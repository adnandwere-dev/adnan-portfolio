"use client";
import { Bot, User } from "lucide-react";
import MessageBubble from "./MessageBubble";

// مكون منطقة عرض الرسائل (Chat Messages Area)
// export default function ChatMessages() {
//   return (
//     <div className="flex-1 overflow-y-auto px-4 md:px-8 py-8 z-10 flex flex-col gap-8 scroll-smooth">
//       {/* فاصل التاريخ (Date Divider) */}
//       <div className="flex justify-center">
//         <span className="font-label-caps text-[12px] font-semibold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-outline-variant">TODAY</span>
//       </div>

//       {/* رسالة المستخدم (User Message) */}
//       <div className="flex justify-end w-full">
//         <div className="flex gap-4 max-w-[80%] md:max-w-[60%] flex-row-reverse">
//           <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center flex-shrink-0">
//             <span className="material-symbols-outlined text-[18px] text-on-surface-variant">person</span>
//           </div>
//           <div className="bg-primary-container text-on-primary-container p-4 rounded-2xl rounded-tr-sm shadow-lg">
//             <p className="font-body-md text-[16px]">Show me your latest projects</p>
//           </div>
//         </div>
//       </div>

//       {/* رد الذكاء الاصطناعي (AI Response) */}
//       <div className="flex justify-start w-full">
//         <div className="flex gap-4 max-w-[85%] md:max-w-[70%]">
//           <div className="w-8 h-8 rounded-full primary-gradient flex items-center justify-center flex-shrink-0 glow-effect overflow-hidden relative">
//             {/* <Image
//               src="#"
//               alt="Adnan Avatar"
//               fill
//               className="object-cover"
//             /> */}
//           </div>

//           <div className="glass-panel p-5 rounded-2xl rounded-tl-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
//             <p className="font-body-md text-[16px] text-inverse-surface mb-4">
//               I've built several modern React apps focusing on high-performance and premium UI. Here is a highlighted selection of my recent architecture:
//             </p>

//             {/* بطاقات المشاريع (Project Cards - Bento Style) */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div className="bg-surface-container-low border border-white/5 rounded-xl p-4 hover:border-primary/50 transition-colors group cursor-pointer">
//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="material-symbols-outlined text-secondary">analytics</span>
//                   <h4 className="font-h3 text-[18px] font-medium text-white">Nexus Dashboard</h4>
//                 </div>
//                 <p className="text-sm text-on-surface-variant mb-3">Real-time data visualization platform handling millions of events.</p>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="text-[10px] font-label-caps text-primary bg-primary/10 px-2 py-1 rounded font-semibold uppercase">REACT</span>
//                   <span className="text-[10px] font-label-caps text-primary bg-primary/10 px-2 py-1 rounded font-semibold uppercase">D3.JS</span>
//                 </div>
//               </div>

//               <div className="bg-surface-container-low border border-white/5 rounded-xl p-4 hover:border-primary/50 transition-colors group cursor-pointer">
//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="material-symbols-outlined text-primary">storefront</span>
//                   <h4 className="font-h3 text-[18px] font-medium text-white">Aether Commerce</h4>
//                 </div>
//                 <p className="text-sm text-on-surface-variant mb-3">Headless e-commerce storefront with sub-second page loads.</p>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="text-[10px] font-label-caps text-primary bg-primary/10 px-2 py-1 rounded font-semibold uppercase">NEXT.JS</span>
//                   <span className="text-[10px] font-label-caps text-primary bg-primary/10 px-2 py-1 rounded font-semibold uppercase">STRIPE</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* مؤشر الكتابة (Typing Indicator) */}
//       <div className="flex justify-start w-full">
//         <div className="flex gap-4">
//           <div className="w-8 h-8 rounded-full primary-gradient flex items-center justify-center flex-shrink-0 glow-effect overflow-hidden opacity-50 relative">
//             {/* <Image
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8TS3RwY7876MDvB4ZuHt2DF13cQJaoc0PmDav6QutAIUkws34C60emGZX6B1ng7hrTUu4vtFah4DXSENsYNbOhQhQ5mDOuEcJTpb37b0A8oFRkEsnVrjw0vc6GCVpsGFtzjZ1xiVJZ9oDikNfKfQSDXAoKvL2fPPZ87RiI6HSyQKj_mOrZR9boaoK40HeBEPxQLM0MhN5rcWfjQhzy3RnGwt7f3ZiLfxB8wp8EPt7zcKuRo7l8KsfpgdSkdMyp44fB30Lm83flN8"
//               alt="Adnan Avatar"
//               fill
//               className="object-cover"
//             /> */}
//           </div>
//           <div className="glass-panel px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-2">
//             <div className="w-2 h-2 rounded-full bg-secondary/60 animate-pulse"></div>
//             <div className="w-2 h-2 rounded-full bg-secondary/60 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//             <div className="w-2 h-2 rounded-full bg-secondary/60 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ChatMessages({ message, i }) {
  const isUser = message.role === "user";
  return (
    <div className="flex flex-col gap-8">
      <div
        key={i}
        className={`flex w-full mb-6 animate-pulse-once ${isUser ? "justify-end" : "justify-start"} `}
      >
        <div
          className={`flex max-w-[85%] ${isUser ? "flex-row-reverse" : "flex-row"} items-start gap-3  `}
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
