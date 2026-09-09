"use client";
import { useState } from "react";
export default function Popup({ onClose, onCreateChat }) {
  const [title, setTitle] = useState("");

  const handleSave = () => {
    if (!title.trim()) return;
    onCreateChat(title);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-[#13131b00] backdrop-blur-sm">
      <div className="glass-panel w-full max-w-md rounded-xl p-6 shadow-2xl border border-white/10 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-h3 text-h3 text-2xl text-white">
            تسمية المحادثة
          </h2>
          <p className="text-sm text-on-surface-variant">
            يرجى إدخال عنوان جديد لهذه المحادثة لسهولة العودة إليها لاحقاً.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSave();
              }
            }}
            className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-white placeholder-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 font-body-md "
            placeholder="أدخل عنواناً للمحادثة..."
            type="text"
            autoFocus
          />
        </div>
        <div className="flex items-center justify-end gap-3 mt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg font-body-md text-on-surface-variant hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            إلغاء
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2.5 rounded-lg font-body-md bg-primary text-on-primary hover:opacity-90 transition-opacity glow-effect"
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}
