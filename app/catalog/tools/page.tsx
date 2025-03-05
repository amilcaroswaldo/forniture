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
  title: "Herramientas | Catálogo | MuebleHogar",
  description: "Explora nuestra colección de herramientas profesionales para tus proyectos",
}

export default function ToolsPage() {
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
            <BreadcrumbPage>Herramientas</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Herramientas</h1>
          <p className="text-muted-foreground">Herramientas profesionales para todo tipo de proyectos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          title="Set de Herramientas Profesional"
          price={249.99}
          originalPrice={329.99}
          image="/image-products/cat-tools-setprofesional.webp"
          rating={4.9}
          reviewCount={215}
          href="/product/tool-set"
          discount={24}
        />
        <ProductCard
          title="Taladro Inalámbrico Profesional"
          price={129.99}
          originalPrice={159.99}
          image="/image-products/cat-tools-drill.webp"
          rating={4.7}
          reviewCount={156}
          href="/product/drill"
          discount={19}
        />
        <ProductCard
          title="Sierra Circular"
          price={179.99}
          image="/image-products/cat-tools-circular-saw.webp"
          rating={4.6}
          reviewCount={98}
          href="/product/circular-saw"
        />
        <ProductCard
          title="Lijadora Orbital"
          price={89.99}
          image="/image-products/cat-tools-orbital-sander.webp"
          rating={4.5}
          reviewCount={72}
          href="/product/orbital-sander"
        />
        
      </div>
    </div>
  )
}

