"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import initThreeScene from "@/constants/three-scene";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const cleanup = initThreeScene(canvasRef.current)
      return cleanup;
    }
  }, []);

  return (
    <section
      className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background z-0"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="max-w-2xl space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-primary mb-2 sm:mb-4 light-shadow-sm"
          >
            Full-Stack Development
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
          >
            Full-Stack Developer & Digital Craftsman
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed"
          >
            I build exceptional digital experiences for the web and mobile
            platforms, with a focus on performance, accessibility, and user
            experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
          >
            <Button size="lg" asChild>
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
