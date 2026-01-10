"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const leftTextY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const rightTextY = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-20 flex items-center overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative flex justify-center items-center min-h-[70vh]">
          {/* Center Image with parallax */}
          <motion.div
            className="relative z-0"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 3.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-[280px] md:w-[350px]" style={{ boxShadow: "0 0 100px rgba(255, 30, 0, 0.4)" }}>
              <Image
                src="/images/hero-portrait.jpeg"
                alt="Harmain - Data Analyst"
                width={350}
                height={467}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Left Typography with parallax */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            style={{ y: leftTextY }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="leading-[0.85]">
              <span
                className="block font-normal"
                style={{
                  fontSize: "clamp(3rem, 8vw, 8rem)",
                  color: "#FF1E00",
                  letterSpacing: "-0.08em",
                }}
              >
                DATA
              </span>
              <span
                className="block font-normal"
                style={{
                  fontSize: "clamp(3rem, 8vw, 8rem)",
                  color: "#FF1E00",
                  letterSpacing: "-0.08em",
                }}
              >
                ANALYST/
              </span>
            </h1>
            <p className="mt-3 text-sm font-normal" style={{ color: "#D9D9D9", letterSpacing: "-0.08em" }}>
              [BASED IN PAKISTAN]
            </p>
          </motion.div>

          {/* Right Typography with parallax */}
          <motion.div
            className="absolute right-0 bottom-1/4 z-10 text-right"
            style={{ y: rightTextY }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="leading-[0.9]" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", letterSpacing: "-0.08em" }}>
              <span className="block font-extrabold" style={{ color: "#FF1E00" }}>
                I&apos;M HARMAIN
              </span>
              <span className="block font-normal" style={{ color: "#FF1E00" }}>
                AND I BRING DATA
              </span>
              <span className="block font-normal" style={{ color: "#FF1E00" }}>
                TO REAL LIFE.
              </span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
