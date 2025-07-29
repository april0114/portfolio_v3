import type React from "react"
import type { Metadata } from "next"
import { Lora } from "next/font/google"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "April's Portfolio",
  description: "Portfolio website of April - Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lora.variable} font-lora`}>{children}</body>
    </html>
  )
}
