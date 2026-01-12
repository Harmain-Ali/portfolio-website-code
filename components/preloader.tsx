"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PreloaderProps {
  isLoading: boolean
}

export default function Preloader({ isLoading }: PreloaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.floor(Math.random() * 15) + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "#FF1E00" }}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="text-center overflow-hidden">
            <motion.span
              /* CHANGED: 
                 - Added 'font-pixel'
                 - Changed 'font-bold' to 'font-normal'
                 - Reduced size to 'text-2xl' (mobile) and 'md:text-[40px]' (desktop) 
              */
              className="block font-pixel font-normal uppercase text-2xl md:text-[40px]"
              style={{ color: "#050505", letterSpacing: "0em" }}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              [LOADING...{Math.min(progress, 100)}%]
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}