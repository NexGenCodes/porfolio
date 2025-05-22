"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "../animatedSection";
import { testimonials } from "@/constants/testimonial";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // const prevTestimonial = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedSection
      animation="fade"
      className="py-8 sm:py-12 md:py-16 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-6 sm:mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary shimmer">
            Testimonials
          </div>
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
          >
            What Clients Say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            Showing testimonial from {testimonials[currentIndex].name},{" "}
            {testimonials[currentIndex].title}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 sm:p-8 md:p-12">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Quote
                      className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary/20 mb-4 sm:mb-6"
                      aria-hidden="true"
                    />
                  </motion.div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl italic mb-6 sm:mb-8">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </p>
                  <div className="flex items-center">
                    <motion.div
                      className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full overflow-hidden mr-3 sm:mr-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={
                          testimonials[currentIndex].avatar ||
                          "/placeholder.svg"
                        }
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonials[currentIndex].title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {/* <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover-scale h-8 w-8 sm:h-10 sm:w-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button> */}

            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full p-0 min-w-0 transition-all duration-300 ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </Button>
            ))}

            {/* <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover-scale h-8 w-8 sm:h-10 sm:w-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button> */}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
