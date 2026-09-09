"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
// componets
import About from "./components/landing/About";
import AiAssistant from "./components/landing/AI-Assistant";
import Contact from "./components/landing/Contact/Contact";
import Footer from "./components/landing/Footer";
import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import Journey from "./components/landing/Journey";
import Projects from "./components/landing/Projects/Projects";
import Technologies from "./components/landing/Technologies/Technologies";

export default function Page() {
  const prefersReducedMotion = useReducedMotion();

  const [active, setActive] = useState("");

  const progressRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;

      if (progressRef.current) {
        progressRef.current.style.width = `${pct}%`;
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.target.id) return;

          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      },
    );

    document
      .querySelectorAll("main section[id]")
      .forEach((section) => io.observe(section));

    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll('a[href^="#"]'));

    const handler = (e) => {
      e.preventDefault();

      const target = document.querySelector(
        e.currentTarget.getAttribute("href"),
      );

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    links.forEach((link) => link.addEventListener("click", handler));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handler));
    };
  }, []);

  
 

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".group"));

    const handlers = [];

    cards.forEach((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();

        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `perspective(800px) rotateX(${(-py * 4).toFixed(
          2,
        )}deg) rotateY(${(px * 6).toFixed(2)}deg) translateZ(6px)`;

        card.style.transition = "transform 120ms linear";
      };

      const onLeave = () => {
        card.style.transform = "translateZ(0)";
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);

      handlers.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => handlers.forEach((cleanup) => cleanup());
  }, []);

  return (
    <div>
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(192,193,255,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(78,222,163,0.05),transparent_50%)]" />

      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
        <div
          ref={progressRef}
          className="h-1 bg-linear-to-r from-primary via-secondary to-primary"
          style={{ width: 0 }}
        />
      </div>

      <Header active={active} />

      <main className="pt-24 pb-20 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Technologies />
        <AiAssistant />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}