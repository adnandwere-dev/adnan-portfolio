export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 w-full py-8">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto gap-4">
        <div className="font-h3 font-bold text-on-surface">Adnan</div>
        <p className="font-body-md text-on-surface-variant">
          Built with ❤️ by Adnan
        </p>
        <a
          className="text-primary font-label-caps text-[10px] hover:underline hover:text-secondary transition-colors"
          href="#hero"
        >
          BACK TO TOP
        </a>
      </div>
    </footer>
  );
}
