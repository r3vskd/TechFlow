"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cta/10 rounded-full blur-[150px] animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/20 mb-8 group hover:bg-primary/20 transition-all duration-300 cursor-pointer">
            <Sparkles className="w-4 h-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-sm text-primary font-medium">Nuevos productos cada semana</span>
          </div>

          {/* Seasonal badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 backdrop-blur-xl border border-accent/20 mb-8 group hover:bg-accent/20 transition-all duration-300 cursor-pointer">
            <Sparkles className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-500" />
            <span className="text-xs text-accent font-medium">Colección Otoño 2025</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-8xl font-extrabold mb-6 leading-tight">
            <span className="block text-balance">El Futuro de la</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-cta bg-clip-text text-transparent animate-gradient">
              Tecnología
            </span>
            <span className="block text-balance">en tus manos</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed text-balance">
            Descubre gadgets innovadores que transforman tu día a día. Calidad premium, diseño excepcional
            y tecnología de vanguardia para todos.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-10">
            Envíos gratis desde $50 · Garantía extendida · Ofertas semanales
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full bg-cta hover:bg-cta-hover text-white px-10 py-6 text-lg font-semibold group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-5px] hover:shadow-cta ring-1 ring-cta/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Comprar ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cta to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-primary/30 hover:border-primary bg-transparent hover:bg-primary/10 backdrop-blur-xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Ver ofertas
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            {[
              { value: "500+", label: "Productos" },
              { value: "50K+", label: "Clientes Felices" },
              { value: "4.9★", label: "Valoración" },
            ].map((stat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
