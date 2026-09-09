"use client";

import {
  MessageCircleMore,
  Plus,
  Search,
  Settings,
  Trash2,
  X,
} from "lucide-react";

import { useState } from "react";

export default function Sidebar({
  onOpen,
  onClose,
  chats,
  setChats,
  activeChat,
  setActiveChat,
  openSidebar,
}) {
  const [input, setInput] = useState("");

  const handleSet = () => {
    onOpen();
  };

  const handleDelete = (id) => {
    const updatedChats = chats.filter((chat) => chat.id !== id);

    setChats(updatedChats);

    if (activeChat?.id === id) {
      setActiveChat(null);
    }
  };

  const handleSearch = () => {
    if (!input.trim()) return;

    const searchTerm = input.toLowerCase();

    const filteredChats = chats.filter((chat) =>
      chat.title.toLowerCase().includes(searchTerm)
    );

    if (filteredChats.length > 0) {
      setActiveChat(filteredChats[0]);
    }
  };

  const handleSelectChat = (chat) => {
    setActiveChat(chat);
    onClose?.();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed md:relative
          inset-y-0 left-0
          z-50
          flex flex-col
          h-full
          w-72 md:w-64
          border-r border-white/5
          bg-slate-950/95 md:bg-slate-950/40
          backdrop-blur-xl
          py-6
          shrink-0

          transition-transform duration-300 ease-in-out

          ${
            openSidebar
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }

          md:flex
        `}
      >
        {/* Header */}
        <div className="px-6 mb-8 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full primary-gradient flex items-center justify-center glow-effect overflow-hidden relative shrink-0" />

          <div className="flex-1">
            <h2 className="font-h3 text-[20px] font-semibold text-white">
              Intelligence
            </h2>

            <p className="font-label-caps text-[12px] font-semibold text-secondary tracking-widest uppercase">
              V3.2 Active
            </p>
          </div>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-on-surface-variant hover:text-white hover:bg-white/5 transition-all"
          >
            <X size={19} />
          </button>
        </div>

        {/* New Chat */}
        <div className="px-4 mb-6">
          <button
            type="button"
            onClick={handleSet}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-outline-variant hover:bg-white/5 transition-all duration-200 cursor-pointer"
          >
            <Plus size={18} className="text-primary" />

            <span className="font-body-md text-[16px] text-white">
              New Chat
            </span>
          </button>
        </div>

        {/* Search */}
        <div className="px-4 mb-4">
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg focus-within:border-primary/50 transition-all duration-200 overflow-hidden">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              type="text"
              placeholder="Search chats..."
              className="w-full bg-transparent border-none focus:ring-0 px-4 py-2 text-sm text-white font-display placeholder-on-surface-variant/50 outline-none"
            />

            <button
              type="button"
              onClick={handleSearch}
              aria-label="Search chats"
              className="flex items-center justify-center h-8 w-8 mr-1 bg-primary/5 hover:bg-primary/20 text-primary transition-all duration-300 rounded-md shrink-0"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto px-2 space-y-1">
          <div className="text-xs font-label-caps text-[12px] font-semibold text-on-surface-variant px-4 py-2 uppercase tracking-widest">
            Recent
          </div>

          {chats.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => handleSelectChat(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleSelectChat(item);
                }
              }}
              className={`
                w-full text-left
                flex items-center gap-3
                px-4 py-3
                rounded-lg
                transition-all duration-200
                cursor-pointer

                ${
                  activeChat && activeChat.id === item.id
                    ? "bg-white/10 text-white"
                    : "text-on-surface-variant hover:text-white hover:bg-white/5"
                }
              `}
            >
              <MessageCircleMore size={20} className="shrink-0" />

              <span className="truncate flex-1">{item.title}</span>

              <button
                type="button"
                aria-label={`Delete chat ${item.title}`}
                className="text-on-surface-variant/40 hover:text-red-400 transition-colors duration-200 cursor-pointer shrink-0"
                onClick={(event) => {
                  event.stopPropagation();
                  handleDelete(item.id);
                }}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto px-4 pt-4 border-t border-white/5">
          <button
            type="button"
            className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
          >
            <Settings size={18} />

            <span>Preferences</span>
          </button>
        </div>
      </aside>
    </>
  );
}