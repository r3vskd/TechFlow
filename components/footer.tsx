import { Zap, Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border" role="contentinfo" aria-label="Main site footer">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-accent to-cta" aria-hidden="true" />
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-primary" aria-hidden="true" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                TechFlow
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              The most innovative electronic gadgets. Premium quality and cutting-edge technology at
              your fingertips. Enjoy free shipping from $75 and 24/7 support.
            </p>
            <div className="flex items-center gap-3">
              {[
                { name: "Facebook", Icon: Facebook, href: "https://www.facebook.com/" },
                { name: "X", Icon: Twitter, href: "https://x.com/" },
                { name: "Instagram", Icon: Instagram, href: "https://www.instagram.com/" },
                { name: "YouTube", Icon: Youtube, href: "https://www.youtube.com/" },
              ].map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${name}`}
                  title={name}
                  className="w-11 h-11 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group ring-1 ring-border hover:ring-primary/40 glow-effect focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 motion-reduce:hover:scale-100 motion-reduce:transition-none"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" aria-hidden="true" />
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* links */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Shop</h3>
            <ul className="space-y-3" role="navigation" aria-label="Shop links">
              {[
                { label: "All Products", href: "/shop/all" },
                { label: "New Releases", href: "/shop/new-releases" },
                { label: "Offers", href: "/shop/offers" },
                { label: "Best Sellers", href: "/shop/best-sellers" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Help</h3>
            <ul className="space-y-3" role="navigation" aria-label="Help links">
              {[
                { label: "Help Center", href: "/help/center" },
                { label: "Shipping", href: "/help/shipping" },
                { label: "Returns", href: "/help/returns" },
                { label: "Warranty", href: "/help/warranty" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3" role="navigation" aria-label="Company links">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
                { label: "Affiliates", href: "/affiliates" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 TechFlow Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy" aria-label="Read privacy policy" title="Privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy
            </a>
            <a href="/terms" aria-label="Read terms" title="Terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms
            </a>
            <a href="/cookies" aria-label="Read cookie policy" title="Cookie policy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookies
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              title="Back to top"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2 motion-reduce:transition-none"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
              <span>Top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
