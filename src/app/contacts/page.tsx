import { ContactInfo } from "@/components/contact-info";
import { ContactForm } from "@/components/form/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Full-Stack Developer Portfolio",
  description:
    "Get in touch with me for project inquiries or collaboration opportunities",
};

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Get In Touch
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Have a project in mind or want to discuss a potential collaboration?
          I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
