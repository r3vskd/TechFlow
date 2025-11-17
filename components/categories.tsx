"use client"

import { Smartphone, Headphones, Watch, Home, Camera, Gamepad2 } from "lucide-react"

const categories = [
  {
    icon: Smartphone,
    name: "Smartphones",
    count: "120+ productos",
    color: "from-primary to-accent",
  },
  {
    icon: Headphones,
    name: "Audio",
    count: "85+ productos",
    color: "from-accent to-cta",
  },
  {
    icon: Watch,
    name: "Wearables",
    count: "95+ productos",
    color: "from-cta to-hover-accent",
  },
  {
    icon: Home,
    name: "Smart Home",
    count: "110+ productos",
    color: "from-hover-accent to-primary",
  },
  {
    icon: Camera,
    name: "Fotografía",
    count: "65+ productos",
    color: "from-primary to-cta",
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    count: "75+ productos",
    color: "from-accent to-hover-accent",
  },
]

export function Categories() {
  return (
    <section id="categorias" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Explora por{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Categoría</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Encuentra exactamente lo que necesitas en nuestra amplia selección
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="group relative cursor-pointer">
                <a
                  href="#productos"
                  aria-label={`Explorar categoría ${category.name}`}
                  className="relative p-6 rounded-3xl bg-card backdrop-blur-xl border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:-rotate-1 overflow-hidden block"
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, var(--color-primary), var(--color-accent))`,
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center gap-3">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-0.5 group-hover:scale-110 transition-transform duration-300 glow-effect-strong`}
                    >
                      <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h3>
                      {/* Count pill */}
                      <p className="inline-flex items-center gap-1 mt-2 text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {category.count}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
