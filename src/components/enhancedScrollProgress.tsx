"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

interface EnhancedScrollProgressProps {
  variant?: "bar" | "circle" | "pill"
  color?: string
  height?: number
  zIndex?: number
  showOnlyAfter?: number
  position?: "top" | "bottom" | "bottom-right"
}

export function EnhancedScrollProgress({
  variant = "bar",
  color = "hsl(var(--primary))",
  height = 3,
  zIndex = 50,
  showOnlyAfter = 50,
  position = "top",
}: EnhancedScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [isVisible, setIsVisible] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  // For the circle variant
  const circumference = 2 * Math.PI * 24 // 24 is the radius
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [circumference, 0])

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollPercentage(Math.round(latest * 100))

      if (latest > 0.01 && window.scrollY > showOnlyAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [scrollYProgress, showOnlyAfter])

  if (variant === "bar") {
    return (
      <motion.div
        className="fixed left-0 right-0 origin-left"
        style={{
          scaleX,
          height,
          backgroundColor: color,
          zIndex,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
          top: position === "top" ? 0 : "auto",
          bottom: position === "bottom" ? 0 : "auto",
        }}
      />
    )
  }

  if (variant === "circle") {
    return (
      <motion.div
        className="fixed"
        style={{
          zIndex,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
          top: position === "top" ? "20px" : "auto",
          bottom: position === "bottom" || position === "bottom-right" ? "20px" : "auto",
          right: position === "bottom-right" ? "20px" : "auto",
          left: position !== "bottom-right" ? "20px" : "auto",
        }}
      >
        <div className="relative h-14 w-14 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 52 52">
            {/* Background circle */}
            <circle
              className="text-muted stroke-current"
              strokeWidth="2"
              stroke="currentColor"
              fill="transparent"
              r="24"
              cx="26"
              cy="26"
            />
            {/* Progress circle */}
            <motion.circle
              className="text-primary stroke-current"
              strokeWidth="4"
              stroke={color}
              fill="transparent"
              r="24"
              cx="26"
              cy="26"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset,
                rotate: -90,
                transformOrigin: "center",
              }}
            />
          </svg>
          <div className="absolute text-sm font-medium">{scrollPercentage}%</div>
        </div>
      </motion.div>
    )
  }

  if (variant === "pill") {
    return (
      <motion.div
        className="fixed rounded-full bg-background/80 backdrop-blur-sm border shadow-md px-3 py-1.5 flex items-center gap-2"
        style={{
          zIndex,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
          top: position === "top" ? "20px" : "auto",
          bottom: position === "bottom" || position === "bottom-right" ? "20px" : "auto",
          right: position === "bottom-right" ? "20px" : "auto",
          left: position !== "bottom-right" ? "20px" : "auto",
        }}
      >
        <div className="relative h-6 w-24 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 bottom-0 origin-left"
            style={{
              scaleX,
              backgroundColor: color,
            }}
          />
        </div>
        <span className="text-xs font-medium">{scrollPercentage}%</span>
      </motion.div>
    )
  }

  return null
}
