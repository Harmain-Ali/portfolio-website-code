"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px) scale(${isHovering ? 4 : 1})`
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", moveCursor)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .cursor-pointer")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [isHovering])

  return (
    <div
      ref={cursorRef}
      className="fixed w-2.5 h-2.5 rounded-full pointer-events-none z-[200] hidden md:block transition-transform duration-100"
      style={{
        backgroundColor: "#FBFBFB",
        mixBlendMode: "difference",
        top: 0,
        left: 0,
      }}
    />
  )
}
