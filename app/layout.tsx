import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local" // Import localFont
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// 1. Setup Neue Regrade (Main Font)
const neueRegrade = localFont({
  src: [
    {
      path: "./fonts/Neue Regrade Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Neue Regrade Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-regrade", // We will use this ID in CSS
})

// 2. Setup PPMondwest (Pixel Font)
const ppMondwest = localFont({
  src: "./fonts/PPMondwest-Regular.otf",
  variable: "--font-mondwest",
  weight: "400",
})

export const metadata: Metadata = {
  title: "HARMAIN | Data Analyst",
  description: "Data Analyst based in Pakistan - Bringing Data to Real Life",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* 3. Inject the variables here */}
      <body className={`${neueRegrade.variable} ${ppMondwest.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}