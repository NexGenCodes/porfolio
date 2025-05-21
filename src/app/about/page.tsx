import Image from "next/image";
import type { Metadata } from "next";
import { Timeline } from "@/components/timeline";
import { SkillsChart } from "@/components/chart/skill";

export const metadata: Metadata = {
  title: "About Me | Full-Stack Developer Portfolio",
  description:
    "Learn more about my background, skills, and experience as a full-stack developer",
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 space-y-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            About Me
          </h1>
          <p className="text-muted-foreground md:text-xl">
            I&apos;m a passionate full-stack developer with expertise in web,
            mobile, and end-to-end development. With over 8 years of experience,
            I&apos;ve worked on a wide range of projects from startups to
            enterprise applications.
          </p>
          <p className="text-muted-foreground">
            My approach combines technical excellence with a deep understanding
            of user needs, creating solutions that are both powerful and
            intuitive. I&apos;m constantly learning and exploring new
            technologies to stay at the cutting edge of development.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://placehold.co/600x800"
            alt="Developer portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          My Journey
        </h2>
        <Timeline />
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Technical Proficiency
        </h2>
        <SkillsChart />
      </div>
    </div>
  );
}
