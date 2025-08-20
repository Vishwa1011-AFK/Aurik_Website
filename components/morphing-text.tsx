"use client"

import { useEffect, useState } from "react"

interface MorphingTextProps {
  texts: string[]
  className?: string
  interval?: number
}

export function MorphingText({ texts, className = "", interval = 3000 }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsAnimating(false)
      }, 500)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isAnimating ? "transform scale-110 opacity-0 blur-sm" : "transform scale-100 opacity-100 blur-0"
        }`}
      >
        {texts[currentIndex]}
      </div>
    </div>
  )
}
