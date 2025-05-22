"use client";

import { useState, useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  formatter?: (value: number) => string;
}

export function AnimatedCounter({
  from,
  to,
  duration = 1.5,
  className,
  formatter = (value) => Math.round(value).toString(),
}: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue.get(), {
    duration: duration * 1000,
  });
  const [displayValue, setDisplayValue] = useState(formatter(from));

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, motionValue, to]);

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      return setDisplayValue(formatter(latest));
    });

    return unsubscribe;
  }, [formatter, springValue]);

  return (
    <span ref={nodeRef} className={className}>
      {displayValue}
    </span>
  );
}
