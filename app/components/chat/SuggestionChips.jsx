"use client";
import { Code2, Mail, UserSearch } from "lucide-react";

export const SuggestionChips = ({ setInput }) => {
  return (
    <div className="flex gap-3 mb-4 overflow-x-auto pb-2 scrollbar-hide snap-x">
      <button
        onClick={() => {
          setInput("Tell me about Adnan");
        }}
        className="snap-start whitespace-nowrap font-label-caps text-[12px] font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full transition-colors flex items-center gap-2"
      >
        <UserSearch size={16} />
        Tell me about Adnan
      </button>
      <button
        onClick={() => {
          setInput("What technologies does he use?");
        }}
        className="snap-start whitespace-nowrap font-label-caps text-[12px] font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full transition-colors flex items-center gap-2"
      >
        <Code2 size={16} />
        What technologies does he use?
      </button>
      <button
        onClick={() => {
          setInput("How can I contact him?");
        }}
        className="snap-start whitespace-nowrap font-label-caps text-[12px] font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full transition-colors flex items-center gap-2"
      >
        <Mail size={16} />
        How can I contact him?
      </button>
    </div>
  );
};
