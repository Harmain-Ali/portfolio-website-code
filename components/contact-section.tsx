"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const contactInfo = [
  { label: "harmain.dev@gmail.com", href: "mailto:harmain.dev@gmail.com" },
  { label: "+92 349 6584055", href: "tel:+923496584055" },
]

const socialLinks = [
  { label: "GITHUB", href: "https://github.com/Harmain-Ali" },
  { label: "KAGGLE", href: "https://www.kaggle.com/harmainali" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/harmain-ali/" },
  { label: "INSTAGRAM", href: "#" },
]

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.4 + i * 0.1,
    },
  }),
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 md:py-16 px-6 md:px-12"
      style={{ backgroundColor: "#FF1E00" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[40%_1px_1fr_1px_1fr] items-start">
          {/* Column 1 - Big Typography */}
          <motion.div
            className="pr-8"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              /* CHANGED: added font-pixel */
              className="font-pixel font-normal uppercase leading-[0.9]"
              style={{
                fontSize: "clamp(3rem, 10vw, 128px)",
                color: "#050505",
                letterSpacing: "-0.08em",
              }}
            >
              GET IN
              <br />
              TOUCH/
            </h2>
          </motion.div>

          <motion.div
            className="hidden md:block h-full"
            style={{ backgroundColor: "#050505" }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />

          {/* Column 2 - Contact Info */}
          <div className="px-8 pt-8 md:pt-0">
            <motion.h3
              /* CHANGED: added font-pixel, changed font-extrabold to font-normal */
              className="font-pixel font-normal text-sm uppercase mb-4"
              style={{ color: "#050505", letterSpacing: "0em" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              [CONTACT]
            </motion.h3>
            <div className="flex flex-col">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="group flex items-center justify-between py-3 transition-all duration-300 hover:opacity-70"
                  style={{ borderBottom: "1px solid #050505" }}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-normal" style={{ color: "#050505", letterSpacing: "-0.04em" }}>
                    {item.label}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 ml-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#050505"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            className="hidden md:block h-full"
            style={{ backgroundColor: "#050505" }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          />

          {/* Column 3 - Social Links */}
          <div className="pl-8 pt-8 md:pt-0">
            <motion.h3
              /* CHANGED: added font-pixel, changed font-extrabold to font-normal */
              className="font-pixel font-normal text-sm uppercase mb-4"
              style={{ color: "#050505", letterSpacing: "0em" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              [FOLLOW ME]
            </motion.h3>
            <div className="flex flex-col">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="group flex items-center justify-between py-3 transition-all duration-300 hover:opacity-70"
                  style={{ borderBottom: "1px solid #050505" }}
                  custom={index + 2}
                  variants={linkVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ x: 5 }}
                >
                  <span
                    className="text-sm font-normal uppercase"
                    style={{ color: "#050505", letterSpacing: "-0.04em" }}
                  >
                    {item.label}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 ml-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#050505"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}