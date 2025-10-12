import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"
import { Benefits } from "@/components/benefits"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Benefits />
      <Newsletter />
      <Footer />
    </div>
  )
}
