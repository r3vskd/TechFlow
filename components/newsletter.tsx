"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { useState } from "react"

export function Newsletter() {
  const [message, setMessage] = useState<string>("")
  const [isError, setIsError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const emailInput = form.elements.namedItem("email") as HTMLInputElement | null
    if (!emailInput) return
    const email = emailInput.value.trim()
    const isValid = /.+@.+\..+/.test(email)
    if (!isValid) {
      emailInput.setAttribute('aria-invalid', 'true')
      setIsError(true)
      setMessage('Please enter a valid email.')
      return
    }
    emailInput.removeAttribute('aria-invalid')
    setIsError(false)
    setMessage('Thanks for subscribing! We will send updates soon.')
    form.reset()
  }
  return (
    <section className="py-24 relative" aria-labelledby="newsletter-heading" role="region">
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
                Get exclusive offers, early releases, and the newest tech updates
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Subscription form" noValidate>
                <Input
                  type="email"
                  aria-label="Email"
                  id="newsletter-email"
                  name="email"
                  aria-describedby="newsletter-status newsletter-privacy"
                  autoComplete="email"
                  inputMode="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  aria-required="true"
                  required
                  placeholder="you@example.com"
                  className="rounded-full bg-background/50 backdrop-blur-xl border-border focus:border-primary h-14 px-6 text-base focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
                <Button
                  size="lg"
                  type="submit"
                  aria-describedby="newsletter-status newsletter-privacy"
                  className="rounded-full bg-gradient-to-r from-cta to-primary hover:from-cta-hover hover:to-primary text-white font-semibold px-8 gap-2 h-14 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_-5px] hover:shadow-cta ring-1 ring-cta/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cta/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:hover:scale-100 motion-reduce:transition-none motion-reduce:hover:shadow-none"
                >
                  Get updates
                  <Send className="w-5 h-5" aria-hidden="true" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4" aria-live="polite">No spam. Cancel anytime.</p>
              <div
                id="newsletter-status"
                role={isError ? "alert" : "status"}
                aria-live={isError ? "assertive" : "polite"}
                aria-atomic="true"
                className="mt-2 text-sm text-primary"
              >
                {message}
              </div>
              <div id="newsletter-privacy" className="mt-2 text-[10px] text-muted-foreground">We protect your data per our privacy policy.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
