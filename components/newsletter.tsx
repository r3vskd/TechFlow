"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Newsletter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement | null
    const statusEl = form.querySelector('#newsletter-status') as HTMLDivElement | null
    if (!emailInput || !statusEl) return
    const email = emailInput.value.trim()
    const isValid = /.+@.+\..+/.test(email)
    if (!isValid) {
      emailInput.setAttribute('aria-invalid', 'true')
      statusEl.textContent = 'Please enter a valid email.'
      statusEl.setAttribute('role', 'alert')
      return
    }
    emailInput.removeAttribute('aria-invalid')
    statusEl.textContent = 'Thanks for subscribing! We will send updates soon.'
    statusEl.setAttribute('role', 'status')
    form.reset()
  }
  return (
    <section className="py-24 relative" aria-labelledby="newsletter-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
            {/* glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-cta/20 blur-[100px] rounded-full" />

            <div className="relative p-12 md:p-16 rounded-[2.5rem] bg-card backdrop-blur-2xl border border-border overflow-hidden shadow-lg shadow-primary/10">
            {/* deco */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <h2 id="newsletter-heading" className="text-3xl md:text-5xl font-bold mb-4 text-balance">
                Join Our{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-cta bg-clip-text text-transparent">
                  Community
                </span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto text-balance">
                Get exclusive offers, early releases, and the latest tech updates
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Subscription form">
                <Input
                  type="email"
                  aria-label="Email"
                  id="newsletter-email"
                  name="email"
                  aria-describedby="newsletter-status"
                  autoComplete="email"
                  inputMode="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  aria-required="true"
                  required
                  placeholder="your@email.com"
                  className="rounded-full bg-background/50 backdrop-blur-xl border-border focus:border-primary h-14 px-6 text-base focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
                <Button
                  size="lg"
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-cta to-primary hover:from-cta-hover hover:to-primary text-white font-semibold px-8 gap-2 h-14 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_-5px] hover:shadow-cta ring-1 ring-cta/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cta/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:hover:scale-100 motion-reduce:transition-none motion-reduce:hover:shadow-none"
                >
                  Get updates
                  <Send className="w-5 h-5" aria-hidden="true" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4">No spam. Cancel anytime.</p>
              <div id="newsletter-status" role="status" aria-live="polite" className="mt-2 text-sm text-primary"></div>
              <div className="mt-2 text-[10px] text-muted-foreground">We protect your data per our privacy policy.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
