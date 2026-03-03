// app/template.tsx
"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 20, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -10, filter: "blur(3px)" },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-[calc(100vh- theme(spacing.header)-theme(spacing.footer))]">
      {children}
    </motion.div>
  );
}
