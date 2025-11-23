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
      <div id="home">
        <Hero />
      </div>
      <div>
        <Categories />
      </div>
      {/* offers anchor before products */}
      <div id="offers" className="scroll-mt-36" aria-hidden="true" />
      <FeaturedProducts />
      <div id="benefits">
        <Benefits />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
      <Footer />
    </div>
  )
}
