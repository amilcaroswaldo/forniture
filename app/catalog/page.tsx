import { Filter, SlidersHorizontal, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { ProductCard } from "@/components/product-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { kitchenProducts, fornitureProducts, toolsProducts, appliancesProducts } from "@/lib/data/detailsProducts"
export default function CatalogPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Catálogo de Productos</h1>
          <p className="text-muted-foreground">Explora nuestra amplia selección de productos para tu hogar</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Grid3X3 className="h-4 w-4" />
              <span className="sr-only">Vista de cuadrícula</span>
            </Button>
            <Button variant="outline" size="icon">
              <List className="h-4 w-4" />
              <span className="sr-only">Vista de lista</span>
            </Button>
          </div>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevancia</SelectItem>
              <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="newest">Más recientes</SelectItem>
              <SelectItem value="rating">Mejor valorados</SelectItem>
            </SelectContent>
          </Select>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filtros</SheetTitle>
                <SheetDescription>Refina tu búsqueda con los siguientes filtros</SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <MobileFilters />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="hidden md:block">
          <DesktopFilters />
        </div>
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(kitchenProducts).map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
            {Object.values(fornitureProducts).map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
            {Object.values(toolsProducts).map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
            {Object.values(appliancesProducts).map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-2">
              1
            </Button>
            {/* <Button variant="outline" className="mx-2">
              2
            </Button>
            <Button variant="outline" className="mx-2">
              3
            </Button>
            <Button variant="outline" className="mx-2">
              ...
            </Button>
            <Button variant="outline" className="mx-2">
              10
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

function DesktopFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4 flex items-center">
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filtros
        </h3>
        <Button variant="outline" size="sm" className="w-full">
          Limpiar filtros
        </Button>
      </div>
      <Accordion type="multiple" defaultValue={["category", "price", "brand"]}>
        <AccordionItem value="category">
          <AccordionTrigger>Categorías</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="category-kitchens" />
                <label htmlFor="category-kitchens" className="text-sm">
                  Cocinas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="category-furniture" />
                <label htmlFor="category-furniture" className="text-sm">
                  Muebles
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="category-tools" />
                <label htmlFor="category-tools" className="text-sm">
                  Herramientas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="category-appliances" />
                <label htmlFor="category-appliances" className="text-sm">
                  Electrodomésticos
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="category-materials" />
                <label htmlFor="category-materials" className="text-sm">
                  Materiales
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Precio</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 1000]} max={2000} step={10} />
              <div className="flex items-center space-x-2">
                <Input type="number" placeholder="Min" className="h-8" />
                <span>-</span>
                <Input type="number" placeholder="Max" className="h-8" />
                <Button variant="outline" size="sm">
                  Aplicar
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand">
          <AccordionTrigger>Marcas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="brand-1" />
                <label htmlFor="brand-1" className="text-sm">
                  MuebleHogar
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="brand-2" />
                <label htmlFor="brand-2" className="text-sm">
                  CocinasPro
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="brand-3" />
                <label htmlFor="brand-3" className="text-sm">
                  ToolMaster
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="brand-4" />
                <label htmlFor="brand-4" className="text-sm">
                  ElectroHome
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="brand-5" />
                <label htmlFor="brand-5" className="text-sm">
                  DiseñoModerno
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="color">
          <AccordionTrigger>Color</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="color-black" />
                <label htmlFor="color-black" className="text-sm">
                  Negro
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="color-white" />
                <label htmlFor="color-white" className="text-sm">
                  Blanco
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="color-brown" />
                <label htmlFor="color-brown" className="text-sm">
                  Marrón
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="color-gray" />
                <label htmlFor="color-gray" className="text-sm">
                  Gris
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="color-blue" />
                <label htmlFor="color-blue" className="text-sm">
                  Azul
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="availability">
          <AccordionTrigger>Disponibilidad</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="availability-instock" />
                <label htmlFor="availability-instock" className="text-sm">
                  En stock
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="availability-outofstock" />
                <label htmlFor="availability-outofstock" className="text-sm">
                  Agotado
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

function MobileFilters() {
  return (
    <div className="space-y-6">
      <Button variant="outline" size="sm" className="w-full">
        Limpiar filtros
      </Button>
      <Accordion type="multiple" defaultValue={["category", "price", "brand"]}>
        <AccordionItem value="category">
          <AccordionTrigger>Categorías</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-category-kitchens" />
                <label htmlFor="mobile-category-kitchens" className="text-sm">
                  Cocinas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-category-furniture" />
                <label htmlFor="mobile-category-furniture" className="text-sm">
                  Muebles
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-category-tools" />
                <label htmlFor="mobile-category-tools" className="text-sm">
                  Herramientas
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-category-appliances" />
                <label htmlFor="mobile-category-appliances" className="text-sm">
                  Electrodomésticos
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-category-materials" />
                <label htmlFor="mobile-category-materials" className="text-sm">
                  Materiales
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Precio</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 1000]} max={2000} step={10} />
              <div className="flex items-center space-x-2">
                <Input type="number" placeholder="Min" className="h-8" />
                <span>-</span>
                <Input type="number" placeholder="Max" className="h-8" />
                <Button variant="outline" size="sm">
                  Aplicar
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand">
          <AccordionTrigger>Marcas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-brand-1" />
                <label htmlFor="mobile-brand-1" className="text-sm">
                  MuebleHogar
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-brand-2" />
                <label htmlFor="mobile-brand-2" className="text-sm">
                  CocinasPro
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-brand-3" />
                <label htmlFor="mobile-brand-3" className="text-sm">
                  ToolMaster
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-brand-4" />
                <label htmlFor="mobile-brand-4" className="text-sm">
                  ElectroHome
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mobile-brand-5" />
                <label htmlFor="mobile-brand-5" className="text-sm">
                  DiseñoModerno
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

