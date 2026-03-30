"use client"

import { BrandWhatsAppIcon } from "./icons/whatsapp-icon"
import { Button } from "@/components/ui/button"
import { getPersonalInfo } from "@/lib/data"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function FloatingWhatsApp() {
  const personalInfo = getPersonalInfo()
  const whatsappLink = personalInfo.social.find((s: any) => s.platform === "WhatsApp")?.url
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!whatsappLink) return null

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 pointer-events-auto transition-all duration-500 transform",
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-0 pointer-events-none"
      )}
    >
      <div className="relative group">
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-40" />
          <Button
            onClick={() => window.open(whatsappLink, "_blank")}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl relative z-10 p-0 overflow-hidden"
            aria-label="Contact on WhatsApp"
          >
            <BrandWhatsAppIcon className="w-7 h-7" />
          </Button>
      </div>
    </div>
  )
}