"use client"

import { Megaphone, X } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "announcement-dismissed-2025-12"

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
      if (localStorage.getItem(STORAGE_KEY)) {
        setVisible(false)
      }
    } catch {}
  }, [handleClose])

  if (!visible) {
    return null
  }

  return (
    <div role="banner" aria-live="polite" className="relative flex h-10 items-center justify-center bg-primary px-4 text-sm font-medium text-primary-foreground gap-x-2">
      <Megaphone className="h-4 w-4" aria-hidden="true" />
      <p id="announcement-text" className="text-sm font-medium" role="status" aria-live="polite" aria-atomic="true">
        TechFlow Season: -20% on accessories + free shipping on orders > $50
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
