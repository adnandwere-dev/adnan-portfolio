export const revealVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.995, filter: "blur(6px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.08 },
  }),
};


export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};


export const sectionMotion = (id, idx) => ({
    custom: idx,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.15 },
    variants: revealVariant,
  });