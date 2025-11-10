import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"
import { Benefits } from "@/components/benefits"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen pt-36">
      <Navigation />
      <div id="inicio">
        <Hero />
      </div>
      <div id="categorias" className="scroll-mt-36">
        <Categories />
      </div>
      {/* Anchor para ofertas, posicionado antes de productos para navegación */}
      <div id="ofertas" className="scroll-mt-36" aria-hidden="true" />
      <div id="productos" className="scroll-mt-36">
        <FeaturedProducts />
      </div>
      <div id="beneficios">
        <Benefits />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
      <Footer />
    </div>
  )
}
