import { ChevronRight } from "lucide-react"

import { ProductCard } from "@/components/product-card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BreadcrumbPage } from "@/components/ui/breadcrumb"

export const metadata = {
  title: "Cocinas | Catálogo | MuebleHogar",
  description: "Explora nuestra colección de cocinas modulares, islas y accesorios para tu hogar",
}

export default function KitchensPage() {
  return (
    <div className="container py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/catalog">Catálogo</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Cocinas</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cocinas</h1>
          <p className="text-muted-foreground">Diseños exclusivos para crear la cocina de tus sueños</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          title="Cocina Modular Premium"
          price={1299.99}
          originalPrice={1599.99}
          image="/image-products/cat-kitchen-modular-premiu.webp"
          rating={4.8}
          reviewCount={124}
          href="/product/kitchen-premium"
          discount={19}
        />
        <ProductCard
          title="Cocina Minimalista"
          price={999.99}
          image="/image-products/cat-kichen-minimal.webp"
          rating={4.7}
          reviewCount={92}
          href="/product/kitchen-minimal"
        />
        <ProductCard
          title="Isla de Cocina Multifuncional"
          price={499.99}
          image="/image-products/cat-kitchen-island.webp"
          rating={4.6}
          reviewCount={57}
          href="/product/kitchen-island"
        />
        <ProductCard
          title="Alacena Moderna"
          price={349.99}
          image="/image-products/cat-kichen-alacena.webp"
          rating={4.4}
          reviewCount={43}
          href="/product/kitchen-cabinet"
        />
        <ProductCard
          title="Cocina Rústica"
          price={1199.99}
          image="/image-products/cat-kitchen-rustic.webp"
          rating={4.5}
          reviewCount={78}
          href="/product/kitchen-rustic"
        />
        <ProductCard
          title="Módulo de Cocina Compacto"
          price={799.99}
          originalPrice={899.99}
          image="/image-products/cat-kitchen-compact.webp"
          rating={4.3}
          reviewCount={65}
          href="/product/kitchen-compact"
          discount={11}
        />
        <ProductCard
          title="Cocina de Diseño Italiano"
          price={1499.99}
          image="/image-products/cat-kitchen-italian.webp"
          rating={4.9}
          reviewCount={112}
          href="/product/kitchen-italian"
        />
        <ProductCard
          title="Cocina Inteligente"
          price={1899.99}
          originalPrice={2199.99}
          image="/image-products/cat-kitchen-smart.webp"
          rating={4.7}
          reviewCount={48}
          href="/product/kitchen-smart"
          discount={14}
        />
      </div>
    </div>
  )
}

