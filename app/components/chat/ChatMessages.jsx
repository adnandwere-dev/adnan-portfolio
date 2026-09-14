"use client";
import { Bot, User } from "lucide-react";
import MessageBubble from "./MessageBubble";

export default function ChatMessages({ message, i }) {
  const isUser = message.role === "user";
  return (
    <div className="flex flex-col gap-8">
      <div
        key={i}
        className={`flex w-full mb-6 animate-pulse-once ${isUser ? "justify-end" : "justify-start"} `}
      >
        <div
          className={`flex min-w-0 max-w-[85%] ${isUser ? "flex-row-reverse" : "flex-row"} items-start gap-3  `}
        >
          <div
            className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${isUser ? "bg-indigo-600" : "bg-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.4)]"}`}
          >
            {isUser ? <User size={18} /> : <Bot size={18} />}
          </div>

          <MessageBubble message={message} />
        </div>
      </div>
    </div>
  );
}
