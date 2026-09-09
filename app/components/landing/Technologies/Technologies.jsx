"use client";

import { motion } from "framer-motion";
import TechnologyCard from "./TechnologyCard";
import { sectionMotion, containerVariants } from "../../../lib/animations/landingAnimations";

const technologies = [
  { icon: "html", name: "HTML5" },
  { icon: "css", name: "CSS3" },
  { icon: "javascript", name: "JAVASCRIPT" },
  { icon: "data_object", name: "REACT" },
  { icon: "layers", name: "NEXT.JS" },
  { icon: "auto_awesome_motion", name: "TAILWIND" },
  { icon: "database", name: "MYSQL" },
  { icon: "code", name: "PHP" },
  { icon: "api", name: "REST API" },
  { icon: "auto_awesome", name: "GEMINI API" },
];

export default function Technologies() {
  return (
    <motion.section
      id="tech"
      {...sectionMotion("tech", 4)}
      className="max-w-container-max mx-auto px-gutter mb-24 md:mb-32 lg:mb-40 py-16 md:py-20 lg:py-24 border-t border-white/5 reveal"
      aria-labelledby="tech"
    >
      <motion.div className="text-center mb-12 md:mb-14">
        <h2 className="font-h2 text-on-background">The Toolkit</h2>

        <p className="text-on-surface-variant font-body-md mt-2">
          Technologies I use to bring ideas to life.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {technologies.map((tech) => (
          <TechnologyCard key={tech.name} tech={tech} />
        ))}
      </motion.div>
    </motion.section>
  );
}
