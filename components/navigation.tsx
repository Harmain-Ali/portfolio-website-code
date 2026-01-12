"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      // items-center here aligns the [HARMAIN] and the Right side vertically
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-3 h-[60px]"
      style={{ borderBottom: "1px solid #1a1a1a", backgroundColor: "#050505" }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.a
        href="#"
        // Changed 'font-base' (invalid) to 'font-normal'
        // Kept 'leading-none' to ensure tight bounding box
        className="font-normal text-lg md:text-[15px] tracking-tighter leading-none"
        style={{ color: "#FBFBFB" }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        [HARMAIN]
      </motion.a>

      {/* Desktop Navigation */}
      {/* Added 'h-full' to ensure it sits centered within the 60px header */}
      <nav className="hidden md:flex items-center gap-8 h-full">
        {["WORK", "ABOUT", "CONTACT"].map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            // ADDED: leading-none (This fixes vertical alignment issues)
            className="text-[10px] uppercase tracking-wide transition-colors hover:opacity-70 leading-none"
            style={{ color: "#D9D9D9" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.7 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -2 }}
          >
            [{item}]
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        // ADDED: leading-none and flex/items-center to force perfect centering
        className="md:hidden text-sm uppercase leading-none flex items-center"
        style={{ color: "#D9D9D9" }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "[CLOSE]" : "[MENU]"}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="absolute top-full left-0 right-0 flex flex-col items-center gap-6 py-8 md:hidden"
            style={{ backgroundColor: "#050505", borderBottom: "1px solid #1a1a1a" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {["WORK", "ABOUT", "CONTACT"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg uppercase tracking-wide leading-none"
                style={{ color: "#D9D9D9" }}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                [{item}]
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}