"use client"

import { useState, useEffect } from "react"
import Preloader from "@/components/preloader"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import SelectedWork from "@/components/selected-work"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import CustomCursor from "@/components/custom-cursor"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader isLoading={isLoading} />
      <CustomCursor />
      <SmoothScrollProvider>
        <main className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
          <Navigation />
          <HeroSection />
          <SelectedWork />
          <AboutSection />
          <ContactSection />
        </main>
      </SmoothScrollProvider>
    </>
  )
}
