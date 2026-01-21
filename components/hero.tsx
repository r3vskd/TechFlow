"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section aria-label="Hero section" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div aria-hidden="true" role="presentation" className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse motion-reduce:animate-none" />
        <div aria-hidden="true" role="presentation" className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000 motion-reduce:animate-none" />
        <div aria-hidden="true" role="presentation" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cta/10 rounded-full blur-[150px] animate-pulse delay-500 motion-reduce:animate-none" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div aria-hidden="true" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/20 mb-8 group hover:bg-primary/20 transition-all duration-300 cursor-default motion-reduce:transition-none">
            <Sparkles className="w-4 h-4 text-primary group-hover:rotate-180 transition-transform duration-500 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" />
            <span className="text-sm text-primary font-medium">Weekly deals</span>
          </div>

          <div aria-hidden="true" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 backdrop-blur-xl border border-accent/20 mb-8 group hover:bg-accent/20 transition-all duration-300 cursor-default motion-reduce:transition-none">
            <Sparkles className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-500 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" />
            <span className="text-xs text-accent font-medium">Winter 2026 Collection</span>
          </div>

          <h1 id="home-heading" className="text-6xl md:text-8xl lg:text-8xl font-extrabold mb-6 leading-tight">
            <span className="block text-balance">The Future of</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-cta bg-clip-text text-transparent animate-gradient motion-reduce:animate-none">
              Technology
            </span>
            <span className="block text-balance">in your hands</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed text-balance">
            Discover innovative gadgets that upgrade your everyday. Premium quality, exceptional design,
            and cutting-edge technology for everyone.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-10">
            Free shipping over $75 · Extended warranty · Weekly deals
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-cta hover:bg-cta-hover text-white px-10 py-6 text-lg font-semibold group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-5px] hover:shadow-cta ring-1 ring-cta/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cta/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:hover:scale-100 motion-reduce:transition-none motion-reduce:hover:shadow-none"
            >
              <a href="#products" aria-label="Go to products" aria-describedby="products-heading" title="Go to products">
                <span className="relative z-10 flex items-center gap-2">
                  Shop products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cta to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduce:opacity-100 motion-reduce:transition-none" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-primary/30 hover:border-primary bg-transparent hover:bg-primary/10 backdrop-blur-xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:hover:scale-100 motion-reduce:transition-none"
            >
              <a href="#offers" aria-label="View current offers" title="View offers">View offers</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            {[
              { value: "500+", label: "Products" },
              { value: "50K+", label: "Happy Customers" },
              { value: "4.9★", label: "Rating" },
            ].map((stat, index) => (
              <div key={index} className="group cursor-default">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 motion-reduce:transform-none motion-reduce:transition-none">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#products"
        aria-label="Jump to products"
        aria-describedby="products-heading"
        title="Jump to products"
        aria-controls="products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2" aria-hidden="true">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </a>
    </section>
  )
}
