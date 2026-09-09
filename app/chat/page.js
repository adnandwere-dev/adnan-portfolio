"use client";

import { MessageCircleMore } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import Sidebar from "../components/chat/Sidebar";
import ChatHeader from "../components/chat/ChatHeader";
import ChatMessages from "../components/chat/ChatMessages";
import Popup from "../components/chat/Popup";
import TypingIndicator from "../components/chat/TypingIndicator";
import ChatInput from "../components/chat/ChatInput";

export default function Chat() {
  // =========================
  // STATES
  // =========================

  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  const [openSidebar, setOpenSidebar] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeChat?.messages?.length, isLoading]);

  // =========================
  // LOAD CHATS
  // =========================

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const savedChats = JSON.parse(localStorage.getItem("chats") || "[]");
      const normalizedChats = Array.isArray(savedChats) ? savedChats : [];

      // This is intentionally client-only hydration from localStorage.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChats(normalizedChats);
      setActiveChat(normalizedChats[0] || null);
      setHasHydrated(true);
    } catch {
      setChats([]);
      setActiveChat(null);
      setHasHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hasHydrated || typeof window === "undefined") return;

    try {
      localStorage.setItem("chats", JSON.stringify(chats));
    } catch {
      // Ignore storage errors in non-browser contexts.
    }
  }, [chats, hasHydrated]);

  // =========================
  // CREATE CHAT
  // =========================

  const onCreateChat = (title) => {
    const newChat = {
      id: Date.now(),
      title: title || "New Chat",
      messages: [],
    };

    setChats((prev) => [...prev, newChat]);

    setActiveChat(newChat);

    setOpenPopup(false);
  };

  // =========================
  // SEND MESSAGE
  // =========================

  const handleSend = async () => {
    if (!input.trim()) return;

    // لا يوجد محادثة مفتوحة
    if (!activeChat) return;

    const userMessage = {
      role: "user",
      content: input,
      time: new Date().toLocaleTimeString(),
    };

    // =========================
    // UPDATE CHATS WITH USER MESSAGE
    // =========================

    const updatedChats = chats.map((chat) =>
      chat.id === activeChat.id
        ? {
            ...chat,
            messages: [...chat.messages, userMessage],
          }
        : chat,
    );

    setChats(updatedChats);

    // تحديث activeChat مباشرة
    const updatedActiveChat = updatedChats.find(
      (chat) => chat.id === activeChat.id,
    );

    setActiveChat(updatedActiveChat);

    setInput("");

    setIsLoading(true);

    const geminiMessages = updatedActiveChat.messages
      .slice(-10)
      .map((message) => ({
        role: message.role === "assistant" ? "model" : "user",

        parts: [
          {
            text: message.content,
          },
        ],
      }));

    // =========================
    // AI REQUEST
    // =========================

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: geminiMessages,
        }),
      });

      const data = await response.json();
      const aiMessage = {
        role: "assistant",
        content: data.response,
        time: new Date().toLocaleTimeString(),
      };

      // =========================
      // ADD AI MESSAGE
      // =========================

      const updatedChatsWithAI = updatedChats.map((chat) =>
        chat.id === activeChat.id
          ? {
              ...chat,
              messages: [...chat.messages, aiMessage],
            }
          : chat,
      );

      setChats(updatedChatsWithAI);

      const updatedAIChat = updatedChatsWithAI.find(
        (chat) => chat.id === activeChat.id,
      );

      setActiveChat(updatedAIChat);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* ================= Sidebar ================= */}

      <Sidebar
        chats={chats}
        setChats={setChats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        onOpen={() => setOpenPopup(true)}
        onClose={() => setOpenSidebar(false)}
        openSidebar={openSidebar}
      />

      {/* ================= Popup ================= */}

      {openPopup && (
        <Popup
          onClose={() => setOpenPopup(false)}
          onCreateChat={onCreateChat}
        />
      )}

      {/* ================= Main ================= */}

      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-surface">
        {/* Glow */}
        <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-primary/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Header */}

        <ChatHeader openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

        {/* Messages */}

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 md:px-8 py-8 z-10 flex flex-col gap-8 scroll-smooth"
        >
          <div className="flex justify-center">
            <span className="font-label-caps text-[12px] font-semibold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-outline-variant">
              TODAY
            </span>
          </div>
          {activeChat ? (
            activeChat?.messages?.map((message, i) => (
              <ChatMessages key={i} message={message} />
            ))
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <MessageCircleMore
                size={64}
                className="text-on-surface-variant"
              />
              <p className="text-on-surface-variant text-lg text-center">
                Select a chat or start a new one!
                <br></br>
                <span className="text-red-600">
                  If you are in Syria, please enable a VPN for the app to work.
                </span>
              </p>
            </div>
          )}

          {isLoading && <TypingIndicator isLoading={isLoading} />}
        </div>

        {/* Input */}

        <ChatInput
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          isLoading={isLoading}
          activeChat={activeChat}
        />
      </main>
    </div>
  );
}
