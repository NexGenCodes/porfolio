import { AnimatedSection } from "@/components/animatedSection";
import { ContactInfo } from "@/components/contact-info";
import { ContactForm } from "@/components/form/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | NexGenCode Portfolio",
  description:
    "Get in touch with me for project inquiries or collaboration opportunities",
  keywords: [
    "contact developer",
    "hire developer",
    "project inquiry",
    "collaboration",
  ],
};

export default function ContactPage() {
  return (
    <div className="container py-8 sm:py-12 md:py-16 lg:py-24 space-y-6 sm:space-y-8">
      <AnimatedSection
        animation="fade"
        className="flex flex-col items-center text-center space-y-3 sm:space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
          Get In Touch
        </h1>
        <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-muted-foreground">
          Have a project in mind or want to discuss a potential collaboration?
          I&apos;d love to hear from you.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-12 md:gap-12 mt-6 sm:mt-8 md:mt-12">
        <AnimatedSection animation="slide" delay={0.1}>
          <ContactInfo />
        </AnimatedSection>
        <AnimatedSection animation="slide" delay={0.2}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </div>
  );
}
