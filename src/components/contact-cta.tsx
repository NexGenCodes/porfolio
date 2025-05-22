"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "./animatedText";
import { AnimatedSection } from "./animatedSection";

export function ContactCta() {
  return (
    <AnimatedSection
      animation="slide"
      className="py-8 sm:py-12 md:py-16 lg:py-24 bg-muted"
      aria-labelledby="cta-heading"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <AnimatedText
            text="Ready to Start Your Next Project?"
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
          />
          <p className="text-base sm:text-lg md:text-xl text-foreground slide-up">
            Let&apos;s collaborate to bring your ideas to life with cutting-edge
            technology and exceptional user experiences.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="hover-lift text-sm sm:text-base"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
