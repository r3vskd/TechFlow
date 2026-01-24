import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"
import { Benefits } from "@/components/benefits"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main id="main" className="min-h-screen pt-36" aria-labelledby="home-heading">
      <header aria-label="Top navigation">
        <Navigation />
      </header>
      <div id="home" className="scroll-mt-36" role="region" aria-labelledby="home-heading" tabIndex={-1}>
        <Hero />
      </div>
      <div id="categories" className="scroll-mt-36" role="region" aria-labelledby="categories-heading" tabIndex={-1}>
        <Categories />
      </div>
      <div id="offers" className="scroll-mt-36" role="region" aria-label="Current offers" tabIndex={-1} />
      <div id="products" className="scroll-mt-36" role="region" aria-labelledby="products-heading" tabIndex={-1}>
        <FeaturedProducts />
      </div>
      <div id="benefits" className="scroll-mt-36" role="region" aria-labelledby="benefits-heading" tabIndex={-1}>
        <Benefits />
      </div>
      <div id="newsletter" className="scroll-mt-36" role="region" aria-labelledby="newsletter-heading" tabIndex={-1}>
        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}
