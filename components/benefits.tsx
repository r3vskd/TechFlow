"use client"

import { Truck, Shield, Headphones, CreditCard } from "lucide-react"

const benefits = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Extended Warranty",
    description: "2 years of total protection",
    color: "text-accent",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always available for you",
    color: "text-cta",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Multiple payment methods",
    color: "text-hover-accent",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-24 relative" aria-label="Benefits">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="group relative" role="listitem">
                <article
                  className="relative p-8 rounded-3xl bg-card backdrop-blur-xl border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 overflow-hidden"
                  aria-labelledby={`benefit-${index}`}
                  aria-describedby={`benefit-${index}-desc`}
                >
                  {/* glow */}
                  <div
                    className={`absolute inset-0 ${benefit.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow-effect`}
                    >
                      <Icon className={`w-7 h-7 ${benefit.color}`} aria-hidden="true" />
                    </div>
                    <h3 id={`benefit-${index}`} className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p id={`benefit-${index}-desc`} className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    {/* accents */}
                    <div aria-hidden="true" className="pointer-events-none absolute top-3 left-3 w-16 h-16 rounded-tl-2xl border-t border-l border-primary/20" />
                    <div aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 w-16 h-16 rounded-br-2xl border-b border-r border-accent/20" />
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
