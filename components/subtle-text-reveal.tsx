"use client"

import { useEffect, useRef, useState } from "react"

interface SubtleTextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function SubtleTextReveal({ text, className = "", delay = 0 }: SubtleTextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={className}>
      <span
        className={`inline-block transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {text}
      </span>
    </div>
  )
}
