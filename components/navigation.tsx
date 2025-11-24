"use client"

import { ShoppingCart, Search, Menu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState<string>("#home")

  // Use effect to attach scroll listener once and clean up
  if (typeof window !== "undefined") {
    // no-op: window exists, effect below will run
  }

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
        className="skip-to-content"
      >
        Skip to content
      </a>
      <nav
      className={`fixed top-12 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-border shadow-lg shadow-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo as link to Inicio */}
          <a
            href="#inicio"
            aria-label="Ir a inicio"
            className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2"
          >
            <span className="relative">
              <Zap className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-110 group-hover:rotate-12 motion-reduce:transition-none motion-reduce:transform-none" />
              <span className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduce:transition-none" />
            </span>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              TechFlow
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              aria-label="Ir a inicio"
              aria-current={activeHash === "#inicio" ? "page" : undefined}
              data-active={activeHash === "#inicio"}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2 motion-reduce:transition-none data-[active=true]:text-primary data-[active=true]:font-semibold"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full motion-reduce:transition-none" />
            </a>
            <a
              href="#productos"
              aria-label="Ir a productos destacados"
              aria-current={activeHash === "#productos" ? "page" : undefined}
              data-active={activeHash === "#productos"}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2 motion-reduce:transition-none data-[active=true]:text-primary data-[active=true]:font-semibold"
            >
              Productos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full motion-reduce:transition-none" />
            </a>
            <a
              href="#categorias"
              aria-label="Ir a categorías"
              aria-current={activeHash === "#categorias" ? "page" : undefined}
              data-active={activeHash === "#categorias"}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2 motion-reduce:transition-none data-[active=true]:text-primary data-[active=true]:font-semibold"
            >
              Categorías
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full motion-reduce:transition-none" />
            </a>
            <a
              href="#ofertas"
              aria-label="Ir a ofertas"
              aria-current={activeHash === "#ofertas" ? "page" : undefined}
              data-active={activeHash === "#ofertas"}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2 motion-reduce:transition-none data-[active=true]:text-primary data-[active=true]:font-semibold"
            >
              Ofertas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full motion-reduce:transition-none" />
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Buscar"
              type="button"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 relative"
              aria-label="Abrir carrito (3 artículos)"
              type="button"
            >
              <ShoppingCart className="w-5 h-5" />
              <span
                className="absolute -top-1 -right-1 w-5 h-5 bg-cta text-[10px] font-bold rounded-full flex items-center justify-center text-white"
                aria-live="polite"
              >
                3
                <span className="sr-only">artículos en el carrito</span>
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
              aria-label="Abrir menú"
              aria-expanded="false"
              type="button"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
