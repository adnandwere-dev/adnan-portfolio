import { PlusCircle, Send } from "lucide-react";
import { SuggestionChips } from "./SuggestionChips";

// مكون منطقة إدخال الرسائل والاقتراحات (Chat Input Area)
export default function ChatInput({
  input,
  setInput,
  handleSend,
  isLoading,
  activeChat,
}) {
  return (
    <div className="p-4 md:p-8 z-10 bg-linear-to-t from-background via-background/90 to-transparent">
      {/* الاقتراحات الذكية (Smart Suggestions) */}
      <SuggestionChips setInput={setInput} />

      {/* صندوق الإدخال (Input Box) */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <div className="glass-panel rounded-2xl p-2 flex items-end gap-2 border border-outline-variant focus-within:border-primary focus-within:shadow-[0_0_20px_rgba(192,193,255,0.1)] transition-all duration-300">
          <button
            type="button"
            className="p-3 text-on-surface-variant hover:text-white transition-colors rounded-xl"
          >
            <PlusCircle size={20} />
          </button>

          <input
            type="text"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-white font-body-md text-[16px] resize-none py-3 placeholder-on-surface-variant/50 max-h-32"
            placeholder="Ask me anything about Adnan..."
            rows={1}
          />
          <button
            disabled={isLoading || input.trim() === "" || activeChat === null}
            type="submit"
            className="p-3 bg-primary text-on-primary rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center disabled:bg-primary/50 disabled:cursor-not-allowed disabled:hover:opacity-100 glow-effect"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
      <div className="text-center mt-3">
        <p className="font-label-caps text-[10px] text-on-surface-variant/50 uppercase tracking-widest font-semibold">
          AI responses may be synthesized from portfolio data.
        </p>
      </div>
    </div>
  );
}
