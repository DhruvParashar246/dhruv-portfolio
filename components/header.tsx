"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <Link href="/" className="text-xl font-bold text-primary transition-colors hover:text-primary/80">
          DP
        </Link>

        {/* Desktop Navigation - Removed numbers from nav items */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/Dhruv_Parashar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-primary px-4 py-2 text-sm text-primary transition-all hover:bg-primary/10"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-foreground lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation - Removed numbers from mobile nav items */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col items-center justify-center gap-8 pt-20">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/Dhruv_Parashar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-primary px-6 py-3 text-primary transition-all hover:bg-primary/10"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
