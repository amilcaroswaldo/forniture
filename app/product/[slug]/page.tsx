import React from "react";
import { BreadcrumbPage } from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Minus,
  Pen,
  Plus,
  Star,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

//constante para los productos
import {
  kitchenProducts,
  fornitureProducts,
  toolsProducts,
  appliancesProducts,
} from "@/lib/data/detailsProducts";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const detailsProduct = getPropertiesFromObjectSpecified(params);
  const formularioUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdLhqcqKRuDvqFY4lcJMw6qvskx2CiTT2Ug5tHNEx6RhVsxOA/viewform?usp=header";
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
            <BreadcrumbPage>{params.slug}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-lg border">
            <Badge className="absolute top-4 right-4 z-10 bg-destructive hover:bg-destructive">
              -19%
            </Badge>
            <Image
              src={detailsProduct.image}
              alt={detailsProduct.title}
              width={600}
              height={600}
              className="w-full object-cover"
            />
          </div>
          {/* <div className="grid grid-cols-4 gap-4">
            <button className="overflow-hidden rounded-md border border-primary">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Thumbnail 1"
                width={150}
                height={150}
                className="w-full object-cover"
              />
            </button>
            <button className="overflow-hidden rounded-md border">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Thumbnail 2"
                width={150}
                height={150}
                className="w-full object-cover"
              />
            </button>
            <button className="overflow-hidden rounded-md border">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Thumbnail 3"
                width={150}
                height={150}
                className="w-full object-cover"
              />
            </button>
            <button className="overflow-hidden rounded-md border">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Thumbnail 4"
                width={150}
                height={150}
                className="w-full object-cover"
              />
            </button>
          </div> */}
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {detailsProduct.title}
          </h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < 4
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            {/* <span className="text-muted-foreground">124 reseñas</span> */}
            <Separator orientation="vertical" className="h-5" />
            <span className="text-muted-foreground">Código: KMP-2023</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl font-bold">{detailsProduct.price}</span>
            <span className="text-xl text-muted-foreground line-through">
              {detailsProduct.originalPrice}
            </span>
            <Badge className="ml-2 bg-destructive hover:bg-destructive">
              {(
                ((detailsProduct?.discount ?? 0) / 100) *
                detailsProduct.price
              ).toFixed(2)}
            </Badge>
          </div>
          <p className="text-muted-foreground mb-6">
            {detailsProduct.description}
          </p>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex gap-2">
                <button className="h-8 w-8 rounded-full bg-black ring-2 ring-primary ring-offset-2"></button>
                <button className="h-8 w-8 rounded-full bg-white border"></button>
                <button className="h-8 w-8 rounded-full bg-gray-300 border"></button>
                <button className="h-8 w-8 rounded-full bg-amber-800 border"></button>
              </div>
            </div>
            <div>
              {/* <h3 className="font-medium mb-2" >Tamaño</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="border-primary">
                  Pequeña (2m)
                </Button>
                <Button variant="outline">Mediana (3m)</Button>
                <Button variant="outline">Grande (4m)</Button>
                <Button variant="outline">Extra Grande (5m+)</Button>
              </div> */}
            </div>
            <div>
              <h3 className="font-medium mb-2">Cantidad</h3>
              <div className="flex items-center">
                <Button variant="outline" size="icon">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">1</span>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button size="lg" className="flex-1" asChild>
              <Link
                href={formularioUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pen className="mr-2 h-5 w-5" />
                Soliciitar pedido
              </Link>
            </Button>
            {/* <Button hidden size="lg" variant="outline" className="flex-1">
              <Heart className="mr-2 h-5 w-5" /> Añadir a favoritos
            </Button>
            <Button size="lg" variant="outline" className="w-12 flex-none">
              <Share2 className="h-5 w-5" />
            </Button> */}
          </div>
          <div className="bg-muted p-4 rounded-lg space-y-3">
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <h4 className="font-medium">Envío gratuito</h4>
                <p className="text-sm text-muted-foreground">
                  En pedidos superiores a $999
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 mt-0.5 text-primary"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M12 11V3" />
                <path d="M12 3h5a2 2 0 0 1 2 2v1" />
                <path d="M12 3H7a2 2 0 0 0-2 2v1" />
              </svg>
              <div>
                <h4 className="font-medium">Retiro en tienda</h4>
                <p className="text-sm text-muted-foreground">
                  Disponible en 2-3 días hábiles
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 mt-0.5 text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <div>
                <h4 className="font-medium">Garantía de 5 años</h4>
                <p className="text-sm text-muted-foreground">
                  Protección extendida incluida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Descripción
          </TabsTrigger>
          <TabsTrigger
            value="specifications"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Especificaciones
          </TabsTrigger>
          {/* <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Reseñas (124)
          </TabsTrigger> */}
        </TabsList>
        <TabsContent value="description" className="pt-6">
          <div className="space-y-3 pl-1">
            <p>
              {detailsProduct.title} {detailsProduct.largeDescription?.mainDescription}
            </p>
            <p>
              Fabricada con materiales de primera calidad, {detailsProduct.title} cuenta con:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {detailsProduct.largeDescription?.listMaterials.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
            <p>
              Incluye asesoramiento personalizado de nuestros
              expertos en diseño, quienes te ayudarán a crear el espacio
              perfecto según tus necesidades y preferencias. Además, ofrecemos
              servicio de instalación profesional para garantizar un resultado
              impecable.
            </p>
            <p>
              {detailsProduct.largeDescription?.focusIn}
            </p>
          </div>
        </TabsContent>
        <TabsContent value="specifications" className="pt-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Dimensiones</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ancho</span>
                    <span>{detailsProduct.specifications?.width} (personalizable)</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Alto</span>
                    <span>{detailsProduct.specifications?.height}</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Profundidad</span>
                    <span>{detailsProduct.specifications?.deep}</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Peso</span>
                    <span>{detailsProduct.specifications?.weight}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Materiales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estructura</span>
                    <span>{detailsProduct.specifications?.structure}</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Acabado</span>
                    <span>{detailsProduct.specifications?.lining}</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Encimera</span>
                    <span>{detailsProduct.specifications?.Worktop}</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Herrajes</span>
                    <span>{detailsProduct.specifications?.ironwork}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Características</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Módulos incluidos
                    </span>
                    <span>{detailsProduct.specifications?.modules}</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Tipo de cierre
                    </span>
                    <span>{detailsProduct.specifications?.typeClosed}</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Iluminación</span>
                    <span>{detailsProduct.specifications?.lighting}</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Resistencia</span>
                    <span>{detailsProduct.specifications?.resistant}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        {/* <TabsContent value="reviews" className="pt-6">
          Reviews content here...
        </TabsContent> */}
      </Tabs>

      <div className="mb-12" hidden={true}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>
              ¿Cuánto tiempo tarda la instalación?
            </AccordionTrigger>
            <AccordionContent>
              El tiempo de instalación depende del tamaño y complejidad de la
              cocina. En promedio, una cocina estándar toma entre 2 y 3 días
              para su instalación completa. Nuestro equipo de instaladores
              profesionales trabaja de manera eficiente para minimizar las
              molestias en su hogar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>
              ¿Puedo personalizar los colores y acabados?
            </AccordionTrigger>
            <AccordionContent>
              Sí, ofrecemos una amplia gama de colores, acabados y materiales
              para personalizar su cocina según sus preferencias. Puede elegir
              entre diferentes tipos de laminados, lacados, maderas, encimeras y
              herrajes para crear una cocina única que se adapte a su estilo y
              necesidades.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>
              ¿Qué incluye el servicio de diseño?
            </AccordionTrigger>
            <AccordionContent>
              Nuestro servicio de diseño incluye una consulta inicial para
              entender sus necesidades, medición del espacio, creación de un
              diseño 3D personalizado, selección de materiales y acabados, y
              asesoramiento sobre la distribución óptima. Todo esto sin costo
              adicional al comprar su cocina con nosotros.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>¿Cuál es el plazo de entrega?</AccordionTrigger>
            <AccordionContent>
              El plazo de entrega estándar es de 3 a 4 semanas desde la
              confirmación del pedido. Para proyectos más complejos o
              personalizados, el tiempo puede extenderse hasta 6 semanas. Le
              mantendremos informado sobre el estado de su pedido en todo
              momento.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>
              ¿Qué cubre la garantía de 5 años?
            </AccordionTrigger>
            <AccordionContent>
              Nuestra garantía de 5 años cubre defectos de fabricación,
              problemas estructurales, herrajes y mecanismos. También incluye
              servicio técnico para ajustes y reparaciones relacionadas con el
              uso normal del producto. Los electrodomésticos tienen su garantía
              específica según el fabricante.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Productos relacionados
          </h2>
          <Link
            href="/catalog/kitchens"
            className="flex items-center text-primary"
          >
            Ver todos <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            price={299.99}
            image="/image-products/cat-kichen-alacena.webp"
            rating={4.8}
            reviewCount={42}
            href="/product/modern-cabinet"
          />
        </div>
      </div> */}
    </div>
  );
}
function getPropertiesFromObjectSpecified(params: { slug: string }) {
  const detailsProduct =
    {
      "kitchen-premium": kitchenProducts,
      "kitchen-minimal": kitchenProducts,
      "kitchen-island": kitchenProducts,
      "kichen-alacena": kitchenProducts,
      "kitchen-rustic": kitchenProducts,
      "kitchen-compact": kitchenProducts,
      "kitchen-italian": kitchenProducts,
      "kitchen-smart": kitchenProducts,
      "sofa-corner": fornitureProducts,
      "nordic-table": fornitureProducts,
      "chair": fornitureProducts,
      "dining-set": fornitureProducts,
      "tool-set": toolsProducts,
      "drill": toolsProducts,
      "circular-saw": toolsProducts,
      "orbital-sander": toolsProducts,
      "washing-machine": appliancesProducts,
      "electric-oven": appliancesProducts,
      "microwave": appliancesProducts,
      "refrigerator": appliancesProducts,
    }[params.slug] ||
    kitchenProducts ||
    fornitureProducts ||
    toolsProducts ||
    appliancesProducts;
  const nameProduct = {
    "kitchen-premium": "cat-kitchen-modular-premiu",
    "kitchen-minimal": "cat-kichen-minimal",
    "kitchen-island": "cat-kitchen-island",
    "kichen-alacena": "cat-kichen-alacena",
    "kitchen-rustic": "cat-kitchen-rustic",
    "kitchen-compact": "cat-kitchen-compact",
    "kitchen-italian": "cat-kitchen-italian",
    "kitchen-smart": "cat-kitchen-smart",
    "sofa-corner": "cat-forniture-confort-sofa",
    "nordic-table": "cat-forniture-table-nordic",
    "chair": "cat-forniture-chair-ergonomic",
    "dining-set": "cat-forniture-dining-set",
    "tool-set": "cat-tools-setprofesional",
    "drill": "cat-tools-drill",
    "circular-saw": "cat-tools-circular-saw",
    "orbital-sander": "cat-tools-orbital-sander",
    "washing-machine": "cat-appliances-washing-machine",
    "electric-oven": "cat-appliances-electric-oven",
    "microwave": "cat-appliances-microwave",
    "refrigerator": "cat-appliances-refrigerator",
  }[params.slug];
  return detailsProduct[nameProduct!.toLowerCase()];
}
