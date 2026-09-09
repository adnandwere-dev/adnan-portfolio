export default function TypingIndicator({ isLoading }) {
  return (
    <div className="flex justify-start w-full">
      <div className="flex gap-4">
        <div className="w-8 h-8 rounded-full primary-gradient flex items-center justify-center shrink-0 glow-effect overflow-hidden opacity-50 relative" />

        <div className="glass-panel px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-2">
          {isLoading && (
            <div className="flex items-center gap-2 text-gray-500 text-sm animate-pulse">
              <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
              <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.2s] shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
              <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.4s] shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
