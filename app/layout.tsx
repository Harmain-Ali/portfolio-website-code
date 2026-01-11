import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google" // 1. Bring back Inter
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// 2. Configure Inter (Default font)
const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700", "800"],
  variable: "--font-inter", // We need this variable for CSS
})

// 3. Keep PPMondwest (Pixel font)
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
      {/* 4. Add both variables to the body */}
      <body className={`${inter.variable} ${ppMondwest.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}