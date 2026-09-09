import { motion } from "framer-motion";
import {
  sectionMotion,
  containerVariants,
  revealVariant,
} from "../../lib/animations/landingAnimations";
export default function About() {
  return (
    <motion.section
      id="about"
      {...sectionMotion("about", 1)}
      className="max-w-container-max mx-auto px-gutter mb-24 md:mb-32 lg:mb-40 pt-16 md:pt-24 lg:pt-28 border-t border-white/5 reveal"
      aria-labelledby="about"
    >
      <motion.h2 className="font-h2 text-on-background mb-10 md:mb-12">
        Who Am I?
      </motion.h2>
      <motion.div
        className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="md:w-1/2" variants={revealVariant} custom={0}>
          <p className="font-body-lg text-on-surface-variant leading-relaxed break-words whitespace-normal">
            I`m Adnan, a Frontend Developer who enjoys building modern web
            applications that are intuitive, responsive, and built to last.
            <br/>I believe that great software is more than a polished
            interface. Every project should have a clear structure, reusable
            components, and a user experience that feels simple and natural.
            That`s why I focus on writing clean, maintainable code and improving
            existing solutions just as much as creating new ones.
            <br />
            My current work centers around React, Next.js, JavaScript, and
            Tailwind CSS, while I continue expanding my knowledge of backend
            development and full stack architecture. I enjoy learning, refining
            my workflow, and approaching every project with a long-term mindset.
            <br />
            For me, development is a continuous process of building, improving,
            and paying attention to the details that make a product reliable and
            enjoyable to use.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 grid grid-cols-2 gap-5 md:gap-6 w-full"
          variants={revealVariant}
          custom={1}
        >
          {[
            ["3", "CORE PROJECTS"],
            ["1+", "YEAR BUILDING"],
            ["AI", "API INTEGRATION"],
            ["100%", "RESPONSIVE FOCUS"],
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-surface-container-low/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:scale-105 hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -6 }}
            >
              <span className="font-h2 text-primary mb-2">{item[0]}</span>
              <span className="font-label-caps text-on-surface-variant">
                {item[1]}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
