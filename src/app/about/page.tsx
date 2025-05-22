import Image from "next/image";
import { Timeline } from "@/components/timeline";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animatedSection";
import { SkillsChart } from "@/components/chart/skill";

export const metadata: Metadata = {
  title: "About Me | NexGenCode Portfolio",
  description:
    "Learn more about my background, skills, and experience as a full-stack developer",
  keywords: [
    "full-stack developer",
    "developer skills",
    "developer experience",
    "developer background",
  ],
};

export default function AboutPage() {
  return (
    <div className="container py-8 sm:py-12 md:py-16 lg:py-24 space-y-8 sm:space-y-12 md:space-y-16">
      <AnimatedSection
        animation="fade"
        className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center"
      >
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
            About Me
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            I&apos;m a passionate full-stack developer with expertise in web,
            mobile, and end-to-end development. With over 8 years of experience,
            I&apos;ve worked on a wide range of projects from startups to
            enterprise applications.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            My approach combines technical excellence with a deep understanding
            of user needs, creating solutions that are both powerful and
            intuitive. I&apos;m constantly learning and exploring new
            technologies to stay at the cutting edge of development.
          </p>
        </div>
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Professional portrait of me, a full-stack developer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </AnimatedSection>

      <AnimatedSection
        animation="slide"
        delay={0.1}
        className="space-y-4 sm:space-y-6 md:space-y-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center">
          My Journey
        </h2>
        <Timeline />
      </AnimatedSection>

      <AnimatedSection
        animation="slide"
        delay={0.2}
        className="space-y-4 sm:space-y-6 md:space-y-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center">
          Technical Proficiency
        </h2>
        <SkillsChart />
      </AnimatedSection>
    </div>
  );
}
