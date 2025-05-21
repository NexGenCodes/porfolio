"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { timeline } from "@/constants/timeline";

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="relative">
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

      <div className="space-y-12">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center justify-center`}
          >
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "pr-8 text-right" : "pl-8"
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

            <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
              {index + 1}
            </div>

            <div className="w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
