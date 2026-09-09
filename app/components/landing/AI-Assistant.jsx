import { Bot } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { sectionMotion } from "../../lib/animations/landingAnimations";

export default function AiAssistant() {
  return (
    <motion.section
      {...sectionMotion("assistant", 5)}
      className="max-w-container-max mx-auto px-gutter mb-24 md:mb-32 lg:mb-40 reveal"
    >
      <motion.div className="bg-surface-container-low/50 backdrop-blur-sm border border-white/5 rounded-4xl p-10 md:p-14 lg:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-14 relative overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"
          animate={{ x: [0, -12, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full"
          animate={{ x: [0, 12, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <div className="md:w-1/3 flex justify-center">
          <div className="w-48 h-48 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Bot
                size={64}
                className="text-primary animate-pulse shadow-[0_0_30px_rgba(192,193,255,0.2)] rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="md:w-2/3 space-y-6">
          <h2 className="font-h2 text-on-background">
            This portfolio has its own AI
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            I built a custom AI assistant trained on my skills and projects. Ask
            it anything about my experience or how I can help your team.
          </p>
          <div className="flex flex-wrap gap-2">
            <button className="bg-surface-container-high/60 px-4 py-2 rounded-full font-label-caps text-[10px] hover:bg-primary/20 hover:text-primary transition-all border border-transparent hover:border-primary/30">
              &quot;TELL ME ABOUT ADNAN&quot;
            </button>
            <button className="bg-surface-container-high/60 px-4 py-2 rounded-full font-label-caps text-[10px] hover:bg-secondary/20 hover:text-secondary transition-all border border-transparent hover:border-secondary/30">
              &quot;SHOW ME HIS PROJECTS&quot;
            </button>
            <button className="bg-surface-container-high/60 px-4 py-2 rounded-full font-label-caps text-[10px] hover:bg-primary/20 hover:text-primary transition-all border border-transparent hover:border-primary/30">
              &quot;WHAT IS HIS TECH STACK?&quot;
            </button>
          </div>
          <Link
            href={"/chat"}
            className=" px-8 py-4 rounded-xl bg-linear-to-t  from-primary-container to-secondary-container text-white font-label-caps text-[12px] font-semibold uppercase hover:brightness-110 active:scale-95 transition-all "
          >
            START CHAT
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
