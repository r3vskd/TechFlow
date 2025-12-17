"use client"

import { Megaphone, X } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "announcement-dismissed-2025-11"

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false)

  const handleClose = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "true")
    } catch {}
    setVisible(false)
  }, [])

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)
    setVisible(!dismissed)
  }, [])

  useEffect(() => {
    if (!visible) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [visible, handleClose])

  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60]" role="banner" aria-label="Announcement">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="h-12 mt-2 rounded-full bg-gradient-to-r from-cta via-accent to-primary text-white shadow-soft ring-1 ring-white/10 flex items-center justify-center gap-3 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none"
          aria-label="Season announcement"
          aria-describedby="announcement-text"
          id="announcement-bar"
          data-visible={visible}
        >
          <Megaphone className="w-4 h-4 opacity-90" aria-hidden="true" />
          <p id="announcement-text" className="text-sm font-medium" role="status" aria-live="polite" aria-atomic="true">
            TechFlow Season: -15% on accessories + free shipping on orders &gt; $50
          </p>
          <a
            href="#products"
            aria-label="View featured product deals"
            title="View deals"
            aria-controls="products"
            aria-describedby="announcement-text"
            className="text-xs font-semibold underline underline-offset-4 hover:text-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 rounded-full px-2"
          >
            View deals
          </a>
          <button
            aria-label="Close announcement"
            aria-describedby="announcement-text"
            title="Close"
            onClick={handleClose}
            type="button"
            className="ml-auto mr-2 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 transition-colors w-7 h-7 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 motion-reduce:transition-none"
            aria-controls="announcement-bar"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
