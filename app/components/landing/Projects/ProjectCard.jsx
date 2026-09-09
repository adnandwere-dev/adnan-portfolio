"use client";

import { TerminalSquare } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const hasDemo = Boolean(project.demo && project.demo !== "#");
  const hasGithub = Boolean(project.github && project.github !== "#");

  return (
    <motion.div
      className={`group bg-surface-container-low/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:-translate-y-2 ${
        project.accent === "secondary"
          ? "hover:border-secondary/40 hover:shadow-[0_0_30px_rgba(78,222,163,0.15)]"
          : "hover:border-primary/40 hover:shadow-[0_0_30px_rgba(192,193,255,0.15)]"
      }`}
      whileHover={{ y: -6 }}
    >
      <div className="h-64 relative overflow-hidden">
        <Image
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
          src={project.image}
          width={1200}
          height={640}
          unoptimized
        />

        <div className="absolute top-4 left-4 flex gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={`px-3 py-1 bg-surface-container-highest/80 backdrop-blur-md rounded-full text-[10px] font-bold ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      <div className="p-8">
        <h3
          className={`font-h3 text-on-surface mb-2 transition-colors ${
            project.accent === "secondary"
              ? "group-hover:text-secondary"
              : "group-hover:text-primary"
          }`}
        >
          {project.title}
        </h3>

        <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex gap-4">
          {hasDemo ? (
            <a
              href={project.demo}
              target={project.demo.startsWith("http") ? "_blank" : undefined}
              rel={project.demo.startsWith("http") ? "noreferrer" : undefined}
              className={`flex-1 text-center py-3 px-6 rounded-xl font-label-caps border transition-all ${
                project.accent === "secondary"
                  ? "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 hover:shadow-[0_0_15px_rgba(78,222,163,0.3)]"
                  : "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(192,193,255,0.3)]"
              }`}
            >
              LIVE DEMO
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="flex-1 text-center py-3 px-6 rounded-xl font-label-caps border border-white/10 text-on-surface-variant/50"
            >
              DEMO NOT LIVE
            </span>
          )}

          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className={`py-3 px-4 rounded-xl border border-outline-variant text-on-surface transition-all hover:bg-white/5 ${
                project.accent === "secondary"
                  ? "hover:border-secondary/40 hover:text-secondary"
                  : "hover:border-primary/40 hover:text-primary"
              }`}
            >
              <TerminalSquare size={18} />
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="py-3 px-4 rounded-xl border border-white/10 text-on-surface-variant/40 cursor-not-allowed"
              aria-label="GitHub repository not available yet"
            >
              <TerminalSquare size={18} />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
