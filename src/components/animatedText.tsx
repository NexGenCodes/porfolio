"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  staggerChildren = 0.015,
  once = true,
  as: Component = "p",
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: i,
      transition: { staggerChildren, delayChildren: delay },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={cn(className)}
    >
      <Component className="inline-block">
        {words.map((word, index) => (
          <span key={index} className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={child}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </Component>
    </motion.div>
  );
}
