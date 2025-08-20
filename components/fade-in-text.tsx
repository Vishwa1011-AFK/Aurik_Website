"use client"

import { useEffect, useState } from "react"

interface FadeInTextProps {
  texts: string[]
  interval?: number
  className?: string
}

export function FadeInText({ texts, interval = 3000, className = "" }: FadeInTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsVisible(true)
      }, 300)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <span className={`transition-all duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}>
      {texts[currentIndex]}
    </span>
  )
}
