"use client";

import { ChevronLeft, ChevronRight, Menu, MoreHorizontal } from "lucide-react";

export default function ChatHeader({ openSidebar, setOpenSidebar }) {
  return (
    <header className="h-20 glass-panel border-b border-white/5 flex justify-between items-center px-4 md:px-8 z-10 shrink-0">
      <div className="flex items-center gap-3 md:gap-4">
        {/* Mobile Menu */}
        <button
          type="button"
          aria-label="Open chat menu"
          onClick={() => setOpenSidebar(true)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-on-surface-variant hover:text-white transition-all"
        >
          <Menu size={20} />
        </button>

        {/* Desktop Sidebar Toggle */}
        <button
          type="button"
          aria-label="Toggle sidebar"
          onClick={() => setOpenSidebar((prev) => !prev)}
          className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-on-surface-variant hover:text-primary transition-all duration-300 shadow-sm bg-white/5"
        >
          {openSidebar ? (
            <ChevronLeft size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>

        <div className="flex items-center gap-3 md:gap-4">
          <h1 className="font-h3 text-[20px] md:text-[24px] font-semibold text-white tracking-tighter">
            Adnan AI
          </h1>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4edea3]" />

            <span className="hidden sm:block text-xs font-body-md text-on-surface-variant">
              System Online
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="More options"
        className="text-on-surface-variant hover:text-white transition-colors"
      >
        <MoreHorizontal size={20} />
      </button>
    </header>
  );
}