import { Zap, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-accent to-cta" />
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                TechFlow
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Los gadgets electrónicos más innovadores. Calidad premium y tecnología de vanguardia al
              alcance de tu mano. Disfruta envíos gratis desde $50 y soporte 24/7.
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
                  aria-label={`Visitar ${name}`}
                  className="w-11 h-11 rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group ring-1 ring-border hover:ring-primary/40 glow-effect"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Comprar</h3>
            <ul className="space-y-3">
              {["Todos los Productos", "Nuevos Lanzamientos", "Ofertas", "Más Vendidos"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Ayuda</h3>
            <ul className="space-y-3">
              {["Centro de Ayuda", "Envíos", "Devoluciones", "Garantía"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Empresa</h3>
            <ul className="space-y-3">
              {["Sobre Nosotros", "Contacto", "Blog", "Afiliados"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 TechFlow. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Términos
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
