"use client";

import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import { sectionMotion } from "../../../lib/animations/landingAnimations";

const contacts = [
  { href: "mailto:adnandwere1@gmail.com", icon: "mail", label: "EMAIL ME" },
  { href: "https://github.com/adnandwere-dev", icon: "github", label: "GITHUB" },
  { href: "https://wa.me/963958785240", icon: "WhatsApp", label: "whatsapp" }
];


export default function Contact() {
  return (
    <motion.section
      id="contact"
      {...sectionMotion("contact", 6)}
      className="max-w-container-max mx-auto px-gutter mb-24 md:mb-32 lg:mb-40 reveal"
      aria-labelledby="contact"
    >
      <motion.h2 className="font-h2 text-on-background mb-10 md:mb-12 text-center">
        Get In Touch
      </motion.h2>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-5 md:gap-6">
        {contacts.map((contact) => (
          <ContactCard key={contact.label} contact={contact} />
        ))}
      </motion.div>
    </motion.section>
  );
}
