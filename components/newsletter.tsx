"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-cta/20 blur-[100px] rounded-full" />

          <div className="relative p-12 md:p-16 rounded-[2.5rem] bg-card backdrop-blur-2xl border border-border overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
                Únete a Nuestra{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-cta bg-clip-text text-transparent">
                  Comunidad
                </span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto text-balance">
                Recibe ofertas exclusivas, lanzamientos anticipados y las últimas novedades en tecnología
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="rounded-full bg-background/50 backdrop-blur-xl border-border focus:border-primary h-14 px-6 text-base"
                />
                <Button
                  size="lg"
                  className="rounded-full bg-cta hover:bg-cta-hover text-white font-semibold px-8 gap-2 h-14 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_-5px] hover:shadow-cta"
                >
                  Suscribirse
                  <Send className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4">No spam. Cancela cuando quieras. 🔒</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
