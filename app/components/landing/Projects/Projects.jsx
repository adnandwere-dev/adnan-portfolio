"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { sectionMotion, containerVariants } from "../../../lib/animations/landingAnimations";
import { dataProjects } from "../../../data/Projects";


export default function Projects() {
  const Projects = dataProjects;
  return (
    <motion.section
      id="projects"
      {...sectionMotion("projects", 3)}
      className="max-w-container-max mx-auto px-gutter mb-24 md:mb-32 lg:mb-40 reveal"
      aria-labelledby="projects"
    >
      <motion.div className="flex justify-between items-end mb-10 md:mb-12">
        <div>
          <motion.h2 className="font-h2 text-on-background">
            Selected Projects
          </motion.h2>

          <motion.p className="text-on-surface-variant font-body-md mt-2">
            Crafted with precision and performance.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {Projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
}
