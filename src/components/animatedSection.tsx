"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
  animation?: "fade" | "slide" | "scale" | "none"
  once?: boolean
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  animation = "fade",
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, once])

  const getAnimationVariants = () => {
    switch (animation) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6, delay } },
        }
      case "slide":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
        }
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
        }
      case "none":
        return {
          hidden: {},
          visible: {},
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={getAnimationVariants()}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
