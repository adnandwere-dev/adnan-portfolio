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
    if (isRateLimited(getClientKey(request))) {
      return Response.json(
        { response: "تم تجاوز الحد مؤقتًا، يرجى المحاولة لاحقًا." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const incomingMessages = Array.isArray(body?.messages)
      ? body.messages.slice(-MAX_MESSAGES)
      : [];
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      return Response.json(
        { response: "الخدمة غير مهيأة حاليًا." },
        { status: 503 },
      );
    }

    if (!incomingMessages.length) {
      return Response.json(
        { response: "أرسل رسالة للبدء بالمحادثة." },
        { status: 400 },
      );
    }

    const hasOversizedMessage = incomingMessages.some((message) => {
      const text = message?.parts?.[0]?.text || message?.content || "";
      return typeof text !== "string" || text.length > MAX_MESSAGE_CHARS;
    });

    if (hasOversizedMessage) {
      return Response.json(
        { response: "الرسالة طويلة جدًا. اختصرها وحاول مرة أخرى." },
        { status: 413 },
      );
    }

    const payload = {
      system_instruction: {
        parts: [{ text: systemPrompt?.parts?.[0]?.text || "" }],
      },
      contents: normalizeMessages(incomingMessages),
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 512,
      },
    };

    const modelsToTry = [
      "gemini-1.5-flash",
      "gemini-2.0-flash",
      "gemini-flash-latest",
    ];

    let lastError;
    for (const model of modelsToTry) {
      try {
        const data = await callGemini(apiKey, payload, model);
        const aiResponse =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "لا يوجد رد متاح الآن.";

        return Response.json({ response: aiResponse });
      } catch (error) {
        lastError = error;
        console.warn(`Gemini model ${model} failed:`, error.message);
      }
    }

    throw lastError || new Error("Unknown Gemini error");
  } catch (error) {
    console.error("Error in API:", error.message);
    const message = error.message.includes("503")
      ? "الخدمة غير متاحة مؤقتًا، يرجى المحاولة لاحقًا."
      : "حدث خطأ ما";

    return Response.json({ response: message }, { status: 502 });
  }
}
