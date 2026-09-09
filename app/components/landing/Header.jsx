import Link from "next/link";
export default function Header({ active }) {
  return (
    <nav
      id="nav"
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm"
    >
      <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
        <div className="font-h2 text-[32px] font-bold text-on-surface tracking-tighter">
          Adnan
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            className={`font-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 ${active === "projects" ? "text-primary border-b-2 animate-bounce " : ""}`}
            href="#projects"
          >
            PROJECTS
          </a>
          <a
            className={`font-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 ${active === "journey" ? "text-primary  border-b-2 animate-bounce " : ""}`}
            href="#journey"
          >
            JOURNEY
          </a>
          <a
            className={`font-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 ${active === "tech" ? "text-primary border-b-2 animate-bounce " : ""}`}
            href="#tech"
          >
            TECH
          </a>
          <a
            className={`font-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 ${active === "contact" ? "text-primary border-b-2 animate-bounce " : ""}`}
            href="#contact"
          >
            CONTACT
          </a>
        </div>
        <Link href="/chat">
          <div className="border border-primary/20 text-primary px-6 py-2 rounded-xl font-label-caps bg-surface-container-low/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 active:scale-95">
            CHAT WITH MY AI
          </div>
        </Link>
      </div>
    </nav>
  );
}
