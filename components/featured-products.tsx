"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Star, Heart } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "SmartWatch Pro X",
    category: "Wearables",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 234,
    image: "/modern-smartwatch-black.jpg",
    badge: "Best Seller",
    badgeColor: "bg-cta",
  },
  {
    id: 2,
    name: "Noise Pro Headphones",
    category: "Audio",
    price: 199.99,
    originalPrice: 279.99,
    rating: 4.9,
    reviews: 456,
    image: "/premium-wireless-headphones.png",
    badge: "New",
    badgeColor: "bg-primary",
  },
  {
    id: 3,
    name: "Smart 4K Camera",
    category: "Photography",
    price: 449.99,
    originalPrice: 599.99,
    rating: 4.7,
    reviews: 189,
    image: "/4k-smart-camera-security.jpg",
    badge: "Deal",
    badgeColor: "bg-accent",
  },
  {
    id: 4,
    name: "Elite Smart Hub",
    category: "Smart Home",
    price: 179.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 312,
    image: "/smart-home-hub.png",
    badge: "Featured",
    badgeColor: "bg-hover-accent",
  },
]

export function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <section className="py-24 relative scroll-mt-36" aria-labelledby="products-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="products-heading" className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-cta bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            The most innovative and popular gadgets right now
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Featured products list">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer"
              role="listitem"
              aria-labelledby={`product-${product.id}-name`}
            >
              <div className="relative rounded-3xl bg-card backdrop-blur-xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:scale-[1.02] group-hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-primary/10 motion-reduce:hover:scale-100 motion-reduce:group-hover:translate-y-0 motion-reduce:transition-none focus-within:ring-2 focus-within:ring-primary/30 focus-within:ring-offset-2 focus-within:ring-offset-background">
                {/* glow */}
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-cta/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-cta/5 transition-all duration-500" />

                {/* image */}
                <div className="relative aspect-square overflow-hidden rounded-t-3xl bg-secondary/50">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 motion-reduce:transform-none motion-reduce:transition-none"
                  />

                  {/* badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1.5 rounded-full ${product.badgeColor} text-white text-xs font-semibold backdrop-blur-xl`}
                    aria-hidden="true"
                  >
                    {product.badge}
                  </div>

                  {/* fav */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    aria-pressed={favorites.includes(product.id)}
                    aria-label={favorites.includes(product.id) ? `Remove ${product.name} from favorites` : `Add ${product.name} to favorites`}
                    type="button"
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-xl border border-border flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-background motion-reduce:hover:scale-100 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${
                        favorites.includes(product.id) ? "fill-cta text-cta" : "text-foreground"
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* quick add */}
                  <div className="absolute inset-0 bg-background/95 backdrop-blur-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 flex items-center justify-center motion-reduce:transition-none">
                    <Button
                      size="lg"
                      aria-label={`Add ${product.name} to cart`}
                      aria-controls="products"
                      className="rounded-full bg-gradient-to-r from-cta to-primary hover:from-cta-hover hover:to-primary text-white font-semibold gap-2 hover:scale-105 transition-all duration-300 ring-1 ring-cta/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cta/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:hover:scale-100 motion-reduce:transition-none"
                    >
                      <ShoppingCart className="w-5 h-5" aria-hidden="true" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* info */}
                <div className="p-6 relative z-10">
                  <div className="text-xs text-primary font-semibold mb-2">{product.category}</div>
                  <h3 id={`product-${product.id}-name`} className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300 text-balance">
                    {product.name}
                  </h3>

                  {/* rating */}
                  <div className="flex items-center gap-2 mb-3" aria-label={`Rating ${product.rating} out of 5`}>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                    <span className="sr-only">Rating {product.rating} out of 5 with {product.reviews} reviews</span>
                  </div>

                  {/* price */}
                  <div
                    className="flex items-center gap-3"
                    aria-label={`Current price $${product.price}. Original price $${product.originalPrice}.`}
                  >
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">${product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                  </div>

                  {/* extra */}
                  <div aria-hidden="true" className="mt-4 text-xs text-muted-foreground flex items-center gap-3">
                    <span className="px-2 py-1 rounded-full bg-secondary/50 border border-border">Shipping 24–48h</span>
                    <span className="px-2 py-1 rounded-full bg-secondary/50 border border-border">In stock</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* view all */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-primary/30 hover:border-primary bg-transparent hover:bg-primary/10 backdrop-blur-xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 motion-reduce:hover:scale-100 motion-reduce:transition-none"
          >
            <a href="#products" aria-label="View all products" aria-describedby="products-heading">View All Products</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
