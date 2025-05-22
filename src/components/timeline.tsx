"use client";

import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { timeline } from "@/constants/timeline";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Center line */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"
        aria-hidden="true"
      />

      <div className="space-y-8">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center md:justify-center`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              transition: `all 0.5s ease-out ${index * 0.2}s`,
            }}
          >
            {/* Mobile view: always show content above the timeline point */}
            <div className="md:hidden w-full pl-12 mb-4 relative">
              <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm z-10">
                {index + 1}
              </div>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">
                    {item.period}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <div className="text-primary font-medium mb-2">
                    {item.company}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Desktop view: alternating layout */}
            <div
              className={`hidden md:block md:w-1/2 ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
              }`}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-1">
                    {item.period}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <div className="text-primary font-medium mb-2">
                    {item.company}
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>

            <div
              className="hidden md:flex relative z-10 items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm"
              aria-hidden="true"
            >
              {index + 1}
            </div>

            <div className="hidden md:block md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
