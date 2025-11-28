"use client"

import { ShoppingCart, Search, Menu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState<string>("#home")

  // scroll listener setup is in effect below

  // Avoid adding event listeners during render
  // and ensure proper cleanup to prevent leaks
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Track current hash to set aria-current and active styles in navigation
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getActiveFromHash = () => {
      const hash = window.location.hash
      return hash && hash.length > 0 ? hash : "#home"
    }
    // Initialize on mount
    setActiveHash(getActiveFromHash())
    const onHashChange = () => setActiveHash(getActiveFromHash())
    window.addEventListener("hashchange", onHashChange, { passive: true })
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return (
    <>
      {/* skip link */}
      <a
        href="#products"
        aria-label="Skip to content"
        className="skip-to-content"
      >
        Skip to content
      </a>
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-12 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-border shadow-lg shadow-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* logo link */}
          <a
            href="#home"
            aria-label="Go to home"
            className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2"
          >
            <span className="relative">
              <Zap className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-110 group-hover:rotate-12 motion-reduce:transition-none motion-reduce:transform-none" aria-hidden="true" />
              <span aria-hidden="true" className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduce:transition-none" />
            </span>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              TechFlow
            </span>
          </a>

          {/* desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              aria-label="Go to home"
              aria-current={activeHash === "#home" ? "page" : undefined}
              data-active={activeHash === "#home"}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2 motion-reduce:transition-none data-[active=true]:text-primary data-[active=true]:font-semibold"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full motion-reduce:transition-none" />
            </a>
            <a
              href="#products"
              aria-label="Go to featured products"
              aria-current={activeHash === "#products" ? "page" : undefined}
              data-active={activeHash === "#products"}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2 motion-reduce:transition-none data-[active=true]:text-primary data-[active=true]:font-semibold"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full motion-reduce:transition-none" />
            </a>
            <a
              href="#categories"
              aria-label="Go to categories"
              aria-current={activeHash === "#categories" ? "page" : undefined}
              data-active={activeHash === "#categories"}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2 motion-reduce:transition-none data-[active=true]:text-primary data-[active=true]:font-semibold"
            >
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full motion-reduce:transition-none" />
            </a>
            <a
              href="#offers"
              aria-label="Go to offers"
              aria-current={activeHash === "#offers" ? "page" : undefined}
              data-active={activeHash === "#offers"}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2 motion-reduce:transition-none data-[active=true]:text-primary data-[active=true]:font-semibold"
            >
              Offers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full motion-reduce:transition-none" />
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Search"
              type="button"
            >
              <Search className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 relative"
              aria-label="Open cart (3 items)"
              type="button"
            >
              <ShoppingCart className="w-5 h-5" aria-hidden="true" />
              <span
                className="absolute -top-1 -right-1 w-5 h-5 bg-cta text-[10px] font-bold rounded-full flex items-center justify-center text-white"
                aria-live="polite"
              >
                3
                <span className="sr-only">items in cart</span>
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
              aria-label="Open menu"
              aria-haspopup="menu"
              aria-expanded="false"
              type="button"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
