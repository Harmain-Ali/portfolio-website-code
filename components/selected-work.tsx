"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "OZMANDIUS",
    number: "01",
    description:
      "[This project is about something interesting, you can not even imagine. You know this is a tentative design but in real life this will be changed by original description]",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "THE RAIN",
    number: "02",
    description:
      "[This project is about something interesting, you can not even imagine. You know this is a tentative design but in real life this will be changed by original description]",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "REGRESSION",
    number: "03",
    description:
      "[This project is about something interesting, you can not even imagine. You know this is a tentative design but in real life this will be changed by original description]",
    githubUrl: "#",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="work" ref={sectionRef} className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: "#FBFBFB" }}>
      {/* Section Header */}
      <motion.div
        className="max-w-7xl mx-auto mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2
          className="text-xl md:text-2xl font-normal leading-none uppercase"
          style={{ color: "#050505", letterSpacing: "-0.08em" }}
        >
          SELECTED
          <br />
          WORK/
        </h2>
      </motion.div>

      {/* Project List */}
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project) => (
          <Link key={project.id} href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <motion.div
              variants={itemVariants}
              className="relative py-8 md:py-12 cursor-pointer group"
              style={{
                borderBottom: "1px solid #262626",
              }}
              whileHover={{ x: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-4">
                  <h3
                    className="font-bold uppercase transition-colors duration-300 group-hover:text-[#FF1E00]"
                    style={{
                      fontSize: "clamp(2rem, 8vw, 8rem)",
                      color: "#050505",
                      letterSpacing: "-0.08em",
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="text-lg md:text-2xl font-normal"
                    style={{ color: "#050505", letterSpacing: "-0.08em" }}
                  >
                    [{project.number}]
                  </span>
                </div>
                <p
                  className="text-sm max-w-xs leading-relaxed font-normal"
                  style={{ color: "#FF1E00", letterSpacing: "-0.08em" }}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  )
}
