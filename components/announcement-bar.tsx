"use client"

import { Megaphone, X } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "announcement-dismissed-2026-01-05"

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false)

  const handleClose = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "true")
    } catch {}
    setVisible(false)
  }, [])

  useEffect(() => {
    try {
      setVisible(!localStorage.getItem(STORAGE_KEY))
    } catch {}
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div
      id="announcement-bar"
      role="banner"
      aria-live="polite"
      className="relative flex h-10 items-center justify-center gap-x-2 bg-primary px-4 text-sm font-medium text-primary-foreground"
    >
      <Megaphone className="h-4 w-4" aria-hidden="true" />
      <p id="announcement-text" className="text-sm font-medium" role="status" aria-live="polite" aria-atomic="true">
        Winter 2026: 20% off accessories, plus free shipping over $75
      </p>
      <a
        href="#products"
        aria-label="Shop deals"
        title="Shop deals"
        aria-controls="products"
        aria-describedby="announcement-text"
        className="rounded-full px-2 text-xs font-semibold underline underline-offset-4 hover:text-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
      >
        Shop deals
      </a>
      <button
        aria-label="Dismiss announcement"
        aria-describedby="announcement-text"
        title="Dismiss announcement"
        onClick={handleClose}
        type="button"
        className="ml-auto mr-2 grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 motion-reduce:transition-none"
        aria-controls="announcement-bar"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  )
}
