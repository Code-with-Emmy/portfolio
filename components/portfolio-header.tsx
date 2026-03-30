"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { getNavItems, getPersonalInfo } from "@/lib/data"

export function PortfolioHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  const navItems = getNavItems()
  const personalInfo = getPersonalInfo()
  const isHomePage = pathname === "/"
  const showSolidBackground = !isHomePage || scrolled

  useEffect(() => {
    if (!isHomePage) {
      return
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section based on scroll position
      const sections = navItems.filter((item) => item.href.startsWith("#")).map((item) => item.href.substring(1))

      // Find the current section in view
      for (const section of sections.reverse()) {
        // Check from bottom to top
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            // If section is at or above 150px from viewport top
            setActiveSection(section)
            break
          }
        }
      }

      // If scrolled to top, set Home as active
      if (window.scrollY < 100) {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage, navItems])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const getNavHref = (href: string) => {
    if (!href.startsWith("#")) {
      return href
    }

    return isHomePage ? href : `/${href}`
  }

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // the required distance between touchStart and touchEnd to be considered a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isRightSwipe = distance < -minSwipeDistance
    if (isRightSwipe) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
        "bg-zinc-950 border-b border-white/10 shadow-2xl",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        {/* Logo/Name */}
        <Link href="/" className="flex min-w-0 items-center group">
          <div className="truncate text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-lg lg:text-xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {personalInfo.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </div>
          <span className="text-zinc-400 text-sm ml-2 hidden xl:inline-block transition-all duration-300 group-hover:text-zinc-300">
            / {personalInfo.title}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 shrink-0">
          {navItems.map((item) => {
            const isActive =
              isHomePage &&
              (item.href === "/"
                ? activeSection === ""
                : activeSection === item.href.substring(1));

            return (
              <Link
                key={item.label}
                href={getNavHref(item.href)}
                className={cn(
                  "px-3 py-2 text-sm relative group transition-all duration-300",
                  isActive ? "text-cyan-400 font-bold" : "text-zinc-400 hover:text-white",
                )}
              >
                <span className="relative z-10">{item.label}</span>

                {/* Hover effect - subtle background glow */}
                <span className="absolute inset-0 bg-cyan-500/0 rounded-md group-hover:bg-cyan-500/10 transition-all duration-300"></span>

                {/* Active/Hover effect - bottom border */}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-4/5",
                    isActive && "w-4/5",
                  )}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            className="text-zinc-400 hover:text-white transition-colors duration-300 relative overflow-hidden group p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            type="button"
          >
            <span className="relative z-10">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
            <span className="absolute inset-0 scale-0 rounded-full bg-zinc-700/50 group-hover:scale-100 transition-transform duration-300"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-zinc-950 z-40 flex flex-col pt-24 px-6 md:hidden transition-all duration-500 ease-in-out",
          "lg:hidden",
          mobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none",
        )}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex flex-col h-full bg-zinc-950">
          <div className="w-12 h-1 bg-zinc-800 rounded-full mx-auto mb-8 shrink-0 lg:hidden"></div>
          <nav className="flex flex-col space-y-2 mt-4 text-center">
            {navItems.map((item, index) => {
              const isActive =
                isHomePage &&
                (item.href === "/"
                  ? activeSection === ""
                  : activeSection === item.href.substring(1));

              return (
                <Link
                  key={item.label}
                  href={getNavHref(item.href)}
                  className={cn(
                    "px-3 py-6 text-xl border-b border-zinc-800/50 relative group transition-all duration-300",
                    isActive
                      ? "text-cyan-400 font-bold bg-zinc-900/50"
                      : "text-zinc-300 hover:text-white",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: mobileMenuOpen
                      ? "translateX(0)"
                      : "translateX(20px)",
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
