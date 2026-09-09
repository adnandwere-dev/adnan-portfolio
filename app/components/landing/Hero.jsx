"use client";

import {
  ExternalLink,
  Mail,
  Layers,
  Share2,
  Globe2,
  Code2,
  TerminalSquare,
  Palette,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  revealVariant,
  containerVariants,
  sectionMotion,
} from "../../lib/animations/landingAnimations";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      {...sectionMotion("hero", 0)}
      className="max-w-container-max mx-auto px-gutter mb-24 md:mb-32 lg:mb-40 reveal active"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20"
      >
        <motion.div
          className="flex-1 space-y-8 md:space-y-10"
          variants={revealVariant}
          custom={0}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-label-caps border border-primary/20">
            FRONTEND DEVELOPER
          </span>
          <motion.h1
            custom={1}
            variants={revealVariant}
            className="font-h1 text-[40px] md:text-[64px] text-on-background"
          >
            <br />
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Adnan
            </span>
          </motion.h1>
          <motion.p
            custom={2}
            variants={revealVariant}
            className="font-body-lg text-on-surface-variant max-w-lg"
          >
            I&apos;m Adnan, a Junior Frontend Developer focused on building
            responsive, user-friendly web applications with React, Next.js,
            JavaScript, and Tailwind CSS. I enjoy turning ideas into clean,
            practical interfaces while continuously expanding my backend
            knowledge.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 pt-6 md:pt-8"
            custom={3}
            variants={revealVariant}
          >
            <Link
              href={"/chat"}
              className="utton-glow px-8 py-4 rounded-xl bg-linear-to-tr from-primary-container to-secondary-container text-white font-label-caps text-[12px] font-semibold uppercase hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 group"
            >
              CHAT WITH MY AI
            </Link>
            <Link
              href={"/resume"}
              className="button-glow px-8 py-4 rounded-xl bg-linear-to-tr from-primary-container to-secondary-container text-white font-label-caps text-[12px] font-semibold uppercase hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 group"
            >
              VIEW RESUME
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-4 pt-6 md:pt-8"
            custom={3}
            variants={revealVariant}
          >
            <a
              href="#projects"
              className="border border-outline-variant text-on-surface font-label-caps px-8 py-4 rounded-xl hover:bg-surface-variant hover:scale-105 transition-all"
            >
              EXPLORE PROJECTS
            </a>
          </motion.div>
          <motion.div
            className="flex items-center gap-5 pt-10 md:pt-12"
            custom={4}
            variants={revealVariant}
          >
            <a
              className="text-on-surface-variant hover:text-primary hover:-translate-y-1 transition-all"
              href="https://github.com/adnandwere-dev"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="https://thesvg.org/icons/github/dark.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </a>
            <a
              className="text-on-surface-variant hover:text-primary hover:-translate-y-1 transition-all"
              href="mailto:adnandwere1@gmail.com"
            >
              <Image
                src="https://thesvg.org/icons/gmail-2026/default.svg"
                alt="Gmail (2026)"
                width={24}
                height={24}
              />
            </a>
            <a
              className="text-on-surface-variant hover:text-primary hover:-translate-y-1 transition-all"
              href="#contact"
            >
              <Phone size={20} />
            </a>
            <a
              className="text-on-surface-variant hover:text-primary hover:-translate-y-1 transition-all"
              href="#projects"
            >
              <Layers size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 relative flex justify-center items-center"
          variants={revealVariant}
          custom={5}
        >
          <motion.div
            className="absolute w-64 h-64 bg-primary/10 blur-[100px] rounded-full"
            animate={{ opacity: [0.7, 0.9, 0.7], scale: [1, 1.02, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-48 h-48 bg-secondary/10 blur-[80px] rounded-full -bottom-10 -right-10"
            animate={{ y: [-6, 6, -6] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative w-80 h-96 rounded-3xl overflow-visible border border-white/10 bg-surface-container-low/30 backdrop-blur-md">
            <div className="absolute -inset-2 bg-linear-to-tr from-primary/20 via-transparent to-secondary/10 blur-xl -z-10" />
            <Image
              alt="Portrait"
              className="w-full h-full object-cover rounded-3xl opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
              src={"/Portfolio.jpg"}
              width={640}
              height={768}
              unoptimized
            />

            <motion.div
              className="absolute -top-6 -left-12 floating-card"
              style={{ originX: 0.5 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="bg-surface-container-high/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(192,193,255,0.3)] transition-all">
                <Code2 size={16} className="text-primary" />
                <span className="font-label-caps text-[10px]">REACT</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-20 -right-16 floating-card"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            >
              <div className="bg-surface-container-high/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(192,193,255,0.3)] transition-all">
                <TerminalSquare size={16} className="text-primary" />
                <span className="font-label-caps text-[10px]">NEXT.JS</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-20 -left-16 floating-card"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <div className="bg-surface-container-high/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(192,193,255,0.3)] transition-all">
                <Palette size={16} className="text-primary" />
                <span className="font-label-caps text-[10px]">TAILWIND</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 right-0 floating-card"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 9, repeat: Infinity }}
            >
              <div className="bg-surface-container-high/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 hover:border-secondary/50 hover:shadow-[0_0_15px_rgba(78,222,163,0.3)] transition-all">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_#4edea3]"></div>
                <span className="font-label-caps text-[10px] text-secondary">
                  AVAILABLE FOR WORK
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
