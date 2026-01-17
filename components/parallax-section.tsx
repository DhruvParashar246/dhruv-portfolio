"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.1, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const scrollY = window.scrollY
      const elementTop = rect.top + scrollY
      const viewportHeight = window.innerHeight

      // Calculate parallax offset based on element's position relative to viewport
      const relativePosition = scrollY + viewportHeight - elementTop
      setOffset(relativePosition * speed)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  )
}
