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
  title: "Electrodomésticos | Catálogo | MuebleHogar",
  description: "Explora nuestra colección de electrodomésticos para tu hogar",
}

export default function AppliancesPage() {
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
            <BreadcrumbPage>Electrodomésticos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Electrodomésticos</h1>
          <p className="text-muted-foreground">Las mejores marcas de electrodomésticos para tu hogar</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          title="Refrigerador Smart"
          price={899.99}
          originalPrice={1099.99}
          image="/image-products/cat-appliances-refrigerator.webp"
          rating={4.8}
          reviewCount={74}
          href="/product/refrigerator"
          discount={18}
        />
        <ProductCard
          title="Lavadora de Carga Frontal"
          price={599.99}
          image="/image-products/cat-appliances-washing-machine.webp"
          rating={4.7}
          reviewCount={86}
          href="/product/washing-machine"
        />
        <ProductCard
          title="Horno Eléctrico"
          price={349.99}
          originalPrice={399.99}
          image="/image-products/cat-appliances-electric-oven.webp"
          rating={4.6}
          reviewCount={63}
          href="/product/electric-oven"
          discount={13}
        />
        <ProductCard
          title="Microondas Digital"
          price={129.99}
          image="/image-products/cat-appliances-microwave.webp"
          rating={4.5}
          reviewCount={92}
          href="/product/microwave"
        />
       
      </div>
    </div>
  )
}

