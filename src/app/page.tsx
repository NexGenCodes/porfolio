import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/section/hero";
import { AnimatedText } from "@/components/animatedText";
import { SkillsSection } from "@/components/section/skill";
import { AnimatedSection } from "@/components/animatedSection";
import { ProjectsShowcase } from "@/components/showcase";
import { TestimonialsSection } from "@/components/section/testimonial";
import { ContactCta } from "@/components/contact-cta";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <AnimatedSection
        animation="slide"
        className="container py-12 md:py-24 space-y-8"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary shimmer">
            My Expertise
          </div>
          <AnimatedText
            text="Full-Stack Development Skills"
            as="h2"
            className="text-3xl font-bold tracking-tighter sm:text-5xl"
          />
          <p className="max-w-[700px] text-muted-foreground md:text-xl slide-up">
            Specialized in building complete solutions from front-end to
            back-end with a focus on performance and user experience.
          </p>
        </div>

        <SkillsSection />

        <div className="flex justify-center mt-8">
          <Link href="/about">
            <Button variant="outline" className="group hover-lift">
              More About Me
              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade" className="bg-muted py-12 md:py-24">
        <div className="container space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium text-primary shimmer">
              Featured Work
            </div>
            <AnimatedText
              text="Recent Projects"
              as="h2"
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
            />
            <p className="max-w-[700px] text-muted-foreground md:text-xl slide-up">
              A selection of my recent work across web, mobile, and end-to-end
              development.
            </p>
          </div>

          <ProjectsShowcase />

          <div className="flex justify-center mt-8">
            <Link href="/projects">
              <Button className="group hover-lift">
                View All Projects
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <TestimonialsSection />
      <ContactCta />
    </div>
  );
}
