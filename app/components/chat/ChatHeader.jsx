import { ChevronLeft, ChevronRight, Menu, MoreHorizontal } from "lucide-react";

// مكون رأس صفحة المحادثة (Chat Header)
export default function ChatHeader({ openSidebar, setOpenSidebar }) {
  return (
    <header className="h-20 glass-panel border-b border-white/5 flex justify-between items-center px-8 z-10">
      <div className="flex items-center gap-4">
        {/* زر فتح القائمة للشاشات الصغيرة (Mobile Menu Toggle) */}
        <button className="md:hidden text-on-surface-variant hover:text-white">
          <Menu size={20} />
        </button>

        <div className="flex items-center  gap-4">
          <button
            onClick={() => setOpenSidebar((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-on-surface-variant hover:text-primary transition-all duration-300 shadow-sm bg-white/5 mr-2"
          >
            {openSidebar ? (
              <ChevronLeft size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>

          <h1 className="font-h3 text-[24px] font-semibold text-white tracking-tighter">
            Adnan AI
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4edea3]"></div>
            <span className="text-xs font-body-md text-on-surface-variant">
              System Online
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-on-surface-variant hover:text-white transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>
    </header>
  );
}
