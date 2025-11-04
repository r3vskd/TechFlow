"use client"

import { Megaphone, X } from "lucide-react"
import { useEffect, useState } from "react"

const STORAGE_KEY = "announcement-dismissed-2025-11"

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)
    setVisible(!dismissed)
  }, [])

  const handleClose = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true")
    } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-12 mt-2 rounded-full bg-gradient-to-r from-cta via-accent to-primary text-white shadow-soft ring-1 ring-white/10 flex items-center justify-center gap-3">
          <Megaphone className="w-4 h-4 opacity-90" />
          <p className="text-sm font-medium">
            Temporada TechFlow: -15% en accesorios + envío gratis en pedidos &gt; $50
          </p>
          <a href="#productos" className="text-xs font-semibold underline underline-offset-4 hover:text-white/90">
            Ver ofertas
          </a>
          <button
            aria-label="Cerrar anuncio"
            onClick={handleClose}
            className="ml-auto mr-2 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 transition-colors w-7 h-7"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}