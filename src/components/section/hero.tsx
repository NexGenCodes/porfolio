"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { initThreeScene } from "@/constants/three-scene";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const cleanup = initThreeScene(canvasRef.current);
      return cleanup;
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />
      <div className="container relative z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Full-Stack Developer & Digital Craftsman
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            I build exceptional digital experiences for the web and mobile
            platforms, with a focus on performance, accessibility, and user
            experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contacts">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
