import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dhruv Parashar | Software Engineer",
  description:
    "Computer Science student at Rutgers University passionate about software engineering, machine learning, and building impactful products.",
  icons: {
    icon: "/dp.png",
    apple: "/dp.png",
  },
  openGraph: {
    title: "Dhruv Parashar | Software Engineer",
    description:
      "Computer Science student at Rutgers University passionate about software engineering, machine learning, and building impactful products.",
    images: [
      {
        url: "/dp.png",
        width: 512,
        height: 512,
        alt: "Dhruv Parashar Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dhruv Parashar | Software Engineer",
    description:
      "Computer Science student at Rutgers University passionate about software engineering, machine learning, and building impactful products.",
    images: ["/dp.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
