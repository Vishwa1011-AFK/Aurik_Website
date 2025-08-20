"use client"

import { useEffect, useState, useRef } from "react"

interface KineticTextProps {
  text: string
  className?: string
  delay?: number
}

export function KineticText({ text, className = "", delay = 0 }: KineticTextProps) {
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

  const words = text.split(" ")

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className="flex flex-wrap justify-center gap-2">
        {words.map((word, wordIndex) => (
          <div key={wordIndex} className="overflow-hidden">
            <div
              className={`inline-block transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
              style={{
                transitionDelay: `${wordIndex * 150}ms`,
              }}
            >
              {word.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className={`inline-block transition-all duration-700 ease-out hover:text-primary hover:scale-110 ${
                    isVisible ? "animate-pulse" : ""
                  }`}
                  style={{
                    transitionDelay: `${wordIndex * 150 + charIndex * 50}ms`,
                    animationDelay: `${wordIndex * 150 + charIndex * 50}ms`,
                    animationDuration: "2s",
                    animationIterationCount: "1",
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
