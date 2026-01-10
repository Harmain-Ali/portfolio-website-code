"use client"

import { useEffect, type ReactNode } from "react"

interface SmoothScrollProviderProps {
  children: ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Apply smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = "smooth"

    // Add custom scroll momentum for smoother feel
    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
      }, 50)
    }

    window.addEventListener("wheel", handleWheel, { passive: true })

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
      window.removeEventListener("wheel", handleWheel)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return <>{children}</>
}
