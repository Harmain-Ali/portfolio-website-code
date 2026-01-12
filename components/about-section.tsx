"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const skills = ["PYTHON/", "POSTGRES SQL/", "NUMPY/", "PANDAS/", "PLOTLY/", "JUPYTER LAB/", "POWER BI/"]

export default function AboutSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 md:px-10"
      style={{ backgroundColor: "#D9D9D9" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          /* CHANGED: added font-pixel */
          className="font-pixel font-normal text-xl md:text-2xl uppercase leading-none mb-16 md:mb-24"
          style={{ color: "#050505", letterSpacing: "-0.08em" }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          ABOUT
          <br />
          ME/
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left - Image with parallax */}
          <motion.div className="relative" style={{ y: imageY }}>
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <Image
                src="/images/about-sitting.jpeg"
                alt="Harmain sitting"
                width={500}
                height={667}
                className="w-full h-auto"
              />
            </motion.div>
            {/* Overlay Text below image */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <p
                /* CHANGED: added font-pixel */
                className="font-pixel font-normal text-lg md:text-xl uppercase leading-tight"
                style={{ color: "#050505", letterSpacing: "-0.08em" }}
              >
                STUDENT/
                <br />
                CREATIVE/
                <br />
                DATA ANALYST/
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Content with appropriate spacing */}
          <div className="flex flex-col justify-start lg:pl-8">
            {/* Introduction */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <span 
                /* CHANGED: added font-pixel, changed font-bold to font-normal */
                className="font-pixel font-normal block text-sm mb-4" 
                style={{ color: "#FF1E00", letterSpacing: "-0.08em" }}
              >
                [INTRODUCTION]
              </span>
              <p
                className="text-base md:text-lg font-normal leading-relaxed uppercase mb-4"
                style={{ color: "#050505", letterSpacing: "-0.08em" }}
              >
                I&apos;M A 20-YEAR-OLD STUDENT WITH A PASSION FOR DIVING DEEP INTO DATA. I&apos;VE HONED MY SKILLS IN
                DATA ANALYTICS, WHERE I LOVE TURNING RAW DATA INTO MEANINGFUL INSIGHTS.
              </p>
              <p
                className="text-base md:text-lg font-normal leading-relaxed uppercase"
                style={{ color: "#050505", letterSpacing: "-0.08em" }}
              >
                I LOVE TO UNCOVER STORIES HIDDEN IN NUMBERS AND HELPING OTHERS MAKE INFORMED DECISIONS BASED ON SOLID
                DATA.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              <span 
                /* CHANGED: added font-pixel, changed font-bold to font-normal */
                className="font-pixel font-normal block text-sm mb-6" 
                style={{ color: "#FF1E00", letterSpacing: "-0.08em" }}
              >
                [SKILLS]
              </span>
              <div className="flex flex-col gap-1">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl md:text-3xl uppercase cursor-pointer transition-colors duration-300 font-normal"
                    style={{
                      color: hoveredSkill === index ? "#050505" : "#808080",
                      letterSpacing: "-0.08em",
                    }}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 + index * 0.05 }}
                    whileHover={{ x: 10 }}
                  >
                    {skill.slice(0, -1)}
                    <span style={{ color: hoveredSkill === index ? "#FF1E00" : "#808080" }}>/</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}