"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/constants/testimonial";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-24" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Testimonials
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold tracking-tighter sm:text-5xl"
          >
            What Clients Say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            Showing testimonial from {testimonials[currentIndex].name},{" "}
            {testimonials[currentIndex].title}
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-12">
              <Quote
                className="h-12 w-12 text-primary/20 mb-6"
                aria-hidden="true"
              />
              <p className="text-xl md:text-2xl italic mb-8">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <div className="flex items-center">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={
                      testimonials[currentIndex].avatar || "/placeholder.svg"
                    }
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full p-0 min-w-0 ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
