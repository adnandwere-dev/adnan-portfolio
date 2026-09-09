import { motion } from "framer-motion";
import { sectionMotion} from "../../lib/animations/landingAnimations";

export default function Journey() {
  return (
    <motion.section
      id="journey"
      {...sectionMotion("journey", 2)}
      className="max-w-container-max mx-auto px-gutter mb-24 md:mb-32 lg:mb-40 reveal"
      aria-labelledby="journey"
    >
      <motion.h2 className="font-h2 text-on-background mb-10 md:mb-12 text-center">
        Journey
      </motion.h2>
      <motion.div
        className="relative max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/10 via-secondary/10 to-primary/10 -translate-x-1/2" />
        <motion.div className="space-y-12 md:space-y-16 lg:space-y-20">
          {[
            ["Genesis", "HTML & CSS mastery", "left"],
            ["The Logic", "JavaScript Core & ES6", "right"],
            ["Components", "React Ecosystem & Hooks", "left"],
            ["Full Stack", "Next.js & SSR", "right"],
            ["AdnanBucks", "Modern Coffee Shop Web App", "left"],
          ].map((step, i) => (
            <motion.div
              key={i}
              className="relative flex items-center justify-between group"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div
                className={`w-5/12 ${step[2] === "left" ? "text-right" : ""}`}
              >
                <h4 className="font-h3 text-on-surface group-hover:text-primary transition-colors">
                  {step[0]}
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  {step[1]}
                </p>
              </div>
              <div
                className={`z-10 w-4 h-4 ${i % 2 === 0 ? "bg-primary" : "bg-secondary"} rounded-full active-dot group-hover:scale-125 transition-transform`}
              />
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
