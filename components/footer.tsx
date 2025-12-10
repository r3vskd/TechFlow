import { Zap, Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border" role="contentinfo" aria-label="Footer">
      {/* accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-accent to-cta" aria-hidden="true" />
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-primary" aria-hidden="true" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                TechFlow
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              The most innovative electronic gadgets. Premium quality and cutting-edge technology at
              your fingertips. Enjoy free shipping from $50 and 24/7 support.
            </p>
            <div className="flex items-center gap-3">
              {[
                { name: "Facebook", Icon: Facebook, href: "#" },
                { name: "Twitter", Icon: Twitter, href: "#" },
                { name: "Instagram", Icon: Instagram, href: "#" },
                { name: "YouTube", Icon: Youtube, href: "#" },
              ].map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href}
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
            <ul className="space-y-3">
              {["All Products", "New Releases", "Offers", "Best Sellers"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Help</h3>
            <ul className="space-y-3">
              {["Help Center", "Shipping", "Returns", "Warranty"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Contact", "Blog", "Affiliates"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 TechFlow. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" title="Privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy
            </a>
            <a href="#" title="Terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms
            </a>
            <a href="#" title="Cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookies
            </a>
            <a
              href="#home"
              aria-label="Back to home"
              title="Back to home"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 rounded-full px-2 motion-reduce:transition-none"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
              <span>Home</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
