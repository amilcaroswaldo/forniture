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
  title: "Muebles | Catálogo | MuebleHogar",
  description: "Explora nuestra colección de muebles para sala, comedor, dormitorio y más",
}

export default function FurniturePage() {
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
            <BreadcrumbPage>Muebles</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Muebles</h1>
          <p className="text-muted-foreground">Calidad y diseño para cada espacio de tu hogar</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          title="Sofá Esquinero Confort"
          price={899.99}
          image="/image-products/cat-forniture-confort-sofa.webp"
          rating={4.6}
          reviewCount={86}
          href="/product/sofa-corner"
        />
        <ProductCard
          title="Mesa de Centro Nórdica"
          price={199.99}
          image="/image-products/cat-forniture-table-nordic.webp"
          rating={4.5}
          reviewCount={68}
          href="/product/coffee-table"
        />
        <ProductCard
          title="Silla Ergonómica"
          price={149.99}
          image="/image-products/cat-forniture-chair-ergonomic.webp"
          rating={4.3}
          reviewCount={92}
          href="/product/chair"
        />
        <ProductCard
          title="Juego de Comedor"
          price={599.99}
          image="/image-products/cat-forniture-dining-set.webp"
          rating={4.6}
          reviewCount={53}
          href="/product/dining-set"
        />
        
      </div>
    </div>
  )
}

