"use client"

import { useEffect, useState } from "react"

interface WaveTextProps {
  text: string
  className?: string
  delay?: number
}

export function WaveText({ text, className = "", delay = 0 }: WaveTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`overflow-hidden ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ease-out hover:text-primary cursor-default ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
            animation: isVisible ? `wave 2s ease-in-out ${index * 0.1}s infinite` : "none",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}
