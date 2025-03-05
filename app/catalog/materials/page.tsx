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
  title: "Materiales | Catálogo | MuebleHogar",
  description: "Explora nuestra selección de materiales de construcción y acabados para tus proyectos",
}

export default function MaterialsPage() {
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
            <BreadcrumbPage>Materiales</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Materiales</h1>
          <p className="text-muted-foreground">Materiales de calidad para tus proyectos de construcción y renovación</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          title="Tablero de Melamina"
          price={49.99}
          image="/placeholder.svg?height=300&width=300"
          rating={4.6}
          reviewCount={83}
          href="/product/melamine-board"
        />
        <ProductCard
          title="Lámina de Cuarzo"
          price={199.99}
          originalPrice={249.99}
          image="/placeholder.svg?height=300&width=300"
          rating={4.8}
          reviewCount={67}
          href="/product/quartz-sheet"
          discount={20}
        />
        <ProductCard
          title="Pintura Interior Premium"
          price={39.99}
          image="/placeholder.svg?height=300&width=300"
          rating={4.7}
          reviewCount={94}
          href="/product/premium-paint"
        />
        <ProductCard
          title="Cemento Multiusos"
          price={12.99}
          image="/placeholder.svg?height=300&width=300"
          rating={4.5}
          reviewCount={112}
          href="/product/multipurpose-cement"
        />
        <ProductCard
          title="Azulejos Decorativos"
          price={29.99}
          originalPrice={34.99}
          image="/placeholder.svg?height=300&width=300"
          rating={4.4}
          reviewCount={76}
          href="/product/decorative-tiles"
          discount={14}
        />
        <ProductCard
          title="Madera Tratada"
          price={79.99}
          image="/placeholder.svg?height=300&width=300"
          rating={4.6}
          reviewCount={58}
          href="/product/treated-wood"
        />
        <ProductCard
          title="Lámina de Acero Inoxidable"
          price={89.99}
          originalPrice={99.99}
          image="/placeholder.svg?height=300&width=300"
          rating={4.7}
          reviewCount={42}
          href="/product/stainless-steel-sheet"
          discount={10}
        />
        <ProductCard
          title="Kit de Selladores"
          price={24.99}
          image="/placeholder.svg?height=300&width=300"
          rating={4.3}
          reviewCount={87}
          href="/product/sealant-kit"
        />
      </div>
    </div>
  )
}

