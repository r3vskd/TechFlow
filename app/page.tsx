import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"
import { Benefits } from "@/components/benefits"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen pt-36" aria-label="Home page">
      <Navigation />
      <div id="home" className="scroll-mt-36">
        <Hero />
      </div>
      <div id="categories" className="scroll-mt-36">
        <Categories />
      </div>
      {/* offers anchor before products */}
      <div id="offers" className="scroll-mt-36" aria-hidden="true" />
      <div id="products">
        <FeaturedProducts />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}
