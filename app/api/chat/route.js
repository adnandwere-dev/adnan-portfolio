import { systemPrompt } from "../../lib/systemPrompt";

const MAX_MESSAGES = 20;
const MAX_MESSAGE_CHARS = 2000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 20;
const requestLog = new Map();

function normalizeMessages(messages = []) {
  return messages.map((message) => {
    if (Array.isArray(message?.parts)) {
      return {
        role: message.role === "assistant" ? "model" : "user",
        parts: message.parts.filter((part) => typeof part?.text === "string"),
      };
    }

    return {
      role: message?.role === "assistant" ? "model" : "user",
      parts: [{ text: message?.content || "" }],
    };
  });
}

function getClientKey(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous"
  );
}

function isRateLimited(clientKey) {
  const now = Date.now();

  const recentRequests = (requestLog.get(clientKey) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(clientKey, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(clientKey, recentRequests);

  return false;
}

async function callGemini(apiKey, payload, model) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": apiKey,
      },
      signal: AbortSignal.timeout(15_000),
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `API error: ${response.status} ${response.statusText} - ${errorText}`,
    );
  }

  return response.json();
}

export async function POST(request) {
  try {
    // Too many requests
    if (isRateLimited(getClientKey(request))) {
      return Response.json(
        {
          response:
            "You're sending requests too quickly. Please wait a moment and try again.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();

    const incomingMessages = Array.isArray(body?.messages)
      ? body.messages.slice(-MAX_MESSAGES)
      : [];

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    // Missing API key / server configuration
    if (!apiKey) {
      return Response.json(
        {
          response:
            "🤖 The AI Assistant is temporarily unavailable because the service configuration is incomplete. Please try again later.",
        },
        { status: 503 },
      );
    }

    // No message received
    if (!incomingMessages.length) {
      return Response.json(
        {
          response:
            "🤖 I couldn't process your request because no message was received. Please try sending your message again.",
        },
        { status: 400 },
      );
    }

    // Message too long
    const hasOversizedMessage = incomingMessages.some((message) => {
      const text = message?.parts?.[0]?.text || message?.content || "";

      return typeof text !== "string" || text.length > MAX_MESSAGE_CHARS;
    });

    if (hasOversizedMessage) {
      return Response.json(
        {
          response:
            "🤖 Your message is too long to process. Please shorten it and try again.",
        },
        { status: 413 },
      );
    }

    const payload = {
      system_instruction: {
        parts: [
          {
            text: systemPrompt?.parts?.[0]?.text || "",
          },
        ],
      },

      contents: normalizeMessages(incomingMessages),

      generationConfig: {
        maxOutputTokens: 512,
      },
    };

    const modelsToTry = ["gemini-3.6-flash", "gemini-3.5-flash-lite"];

    let lastError;

    for (const model of modelsToTry) {
      try {
        const data = await callGemini(apiKey, payload, model);

        const aiResponse =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "🤖 The AI Assistant couldn't generate a response right now. Please try again in a moment.";

        return Response.json({
          response: aiResponse,
        });
      } catch (error) {
        lastError = error;

        console.warn(`Gemini model ${model} failed:`, error.message);
      }
    }

    throw lastError || new Error("Unknown Gemini error");
  } catch (error) {
    console.error("Error in API:", error.message);

    const message =
      "🤖 The AI Assistant is temporarily unavailable due to a service error. Please try again later.";

    return Response.json({ response: message }, { status: 502 });
  }
}
