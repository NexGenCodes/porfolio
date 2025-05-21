import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="py-12 md:py-24 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let&apos;s collaborate to bring your ideas to life with cutting-edge
            technology and exceptional user experiences.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
