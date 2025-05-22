"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[100px] z-10" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-purple-500/10 blur-[100px] opacity-50"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/10 to-primary/20 blur-[100px] opacity-40"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 blur-[100px] opacity-30"
        animate={{
          x: [0, 50, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
