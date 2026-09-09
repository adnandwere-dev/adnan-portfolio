"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  TerminalSquare,
  UserRound,
  MessageCircleMore,
} from "lucide-react";

export default function ContactCard({ contact }) {
  return (
    <motion.a
      href={contact.href}
      className="bg-surface-container-low/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl flex flex-col items-center gap-4 group hover:border-primary/40 hover:-translate-y-2 transition-all"
      whileHover={{ y: -6 }}
    >
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(192,193,255,0.4)] transition-all">
        {contact.icon === "mail" && (
          <Image
            src="https://thesvg.org/icons/gmail-2026/default.svg"
            alt="Gmail (2026)"
            width={24}
            height={24}
          />
        )}
        {contact.icon === "github" && (
          <Image
            src="https://thesvg.org/icons/github/dark.svg"
            alt="GitHub"
            width={24}
            height={24}
          />
        )}
        {contact.icon === "WhatsApp" && (
          <Image
            src="https://thesvg.org/icons/whatsapp/default.svg"
            alt="WhatsApp"
            width={24}
            height={24}
          />
        )}

        {/* {contact.icon === "terminal" && <TerminalSquare size={20} />}
        {contact.icon === "person" && <UserRound size={20} />}
        {contact.icon === "chat" && <MessageCircleMore size={20} />} */}
      </div>

      <span className="font-label-caps group-hover:text-primary transition-colors">
        {contact.label}
      </span>
    </motion.a>
  );
}
