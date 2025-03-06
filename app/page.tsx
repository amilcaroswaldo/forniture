"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, ChevronRight, Star, Calendar, Tag, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/product-card";
import { CategoryCard } from "@/components/category-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

//constante para los productos
import {
  kitchenProducts,
  fornitureProducts,
  toolsProducts,
  badgetKitchenProducts,
} from "@/lib/data/detailsProducts";

export default function Home() {
  const [showKitchenOfferModal, setShowKitchenOfferModal] = useState(false);
  const formularioUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdLhqcqKRuDvqFY4lcJMw6qvskx2CiTT2Ug5tHNEx6RhVsxOA/viewform?usp=header";
  return (
    <>
      <section className="relative">
        <div className="overflow-hidden rounded-b-lg">
          <div className="relative h-[500px] w-full">
            <Image
              src="/image-products/banner.webp"
              fill
              alt="Banner principal"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-6 md:p-10">
              <h1 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Diseño y calidad para tu hogar
              </h1>
              <p className="mt-4 max-w-md text-white md:text-lg">
                Muebles exclusivos y cocinas a medida con los mejores materiales
                y acabados
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/catalog">Ver Catálogo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white hover:bg-white/20"
                  asChild
                >
                  <Link href="/promotions">Ofertas Especiales</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white hover:bg-white/20"
                  asChild
                >
                  <Link
                    target="_blank"
                    href={formularioUrl}
                    rel="noopener noreferrer"
                  >
                    Solicitar Presupuesto
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Categorías Principales
          </h2>
          <Link href="/catalog" className="flex items-center text-primary">
            Ver todas <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          <CategoryCard
            title="Cocinas"
            image="/image-products/cat-kitchen-min.webp"
            href="/catalog/kitchens"
          />
          <CategoryCard
            title="Muebles"
            image="/image-products/cat-forniture-min.webp"
            href="/catalog/furniture"
          />
          <CategoryCard
            title="Herramientas"
            image="/image-products/cat-tools-min.webp"
            href="/catalog/tools"
          />
          <CategoryCard
            title="Electrodomésticos"
            image="/image-products/cat-appliances-min.webp"
            href="/catalog/appliances"
          />
          <CategoryCard
            title="Materiales"
            image="/image-products/cat-materials-min.webp"
            href="/catalog/materials"
          />
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Productos Destacados
            </h2>
            <Link href="/catalog" className="flex items-center text-primary">
              Ver todos <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="kitchens">Cocinas</TabsTrigger>
              {/* <TabsTrigger value="furniture">Muebles</TabsTrigger>
              <TabsTrigger value="tools">Herramientas</TabsTrigger> */}
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProductCard
                  title={kitchenProducts["cat-kitchen-modular-premiu"].title}
                  price={kitchenProducts["cat-kitchen-modular-premiu"].price}
                  originalPrice={
                    kitchenProducts["cat-kitchen-modular-premiu"].originalPrice
                  }
                  image={kitchenProducts["cat-kitchen-modular-premiu"].image}
                  rating={kitchenProducts["cat-kitchen-modular-premiu"].rating}
                  reviewCount={
                    kitchenProducts["cat-kitchen-modular-premiu"].reviewCount
                  }
                  href={kitchenProducts["cat-kitchen-modular-premiu"].href}
                  discount={
                    kitchenProducts["cat-kitchen-modular-premiu"].discount
                  }
                  description={
                    kitchenProducts["cat-kitchen-modular-premiu"].description
                  }
                />
                <ProductCard
                  title={fornitureProducts["cat-forniture-confort-sofa"].title}
                  price={fornitureProducts["cat-forniture-confort-sofa"].price}
                  image={fornitureProducts["cat-forniture-confort-sofa"].image}
                  rating={
                    fornitureProducts["cat-forniture-confort-sofa"].rating
                  }
                  reviewCount={
                    fornitureProducts["cat-forniture-confort-sofa"].reviewCount
                  }
                  href={fornitureProducts["cat-forniture-confort-sofa"].href}
                  description={
                    fornitureProducts["cat-forniture-confort-sofa"].description
                  }
                />
                <ProductCard
                  title={toolsProducts["cat-tools-setprofesional"].title}
                  price={toolsProducts["cat-tools-setprofesional"].price}
                  originalPrice={
                    toolsProducts["cat-tools-setprofesional"].originalPrice
                  }
                  image={toolsProducts["cat-tools-setprofesional"].image}
                  rating={toolsProducts["cat-tools-setprofesional"].rating}
                  reviewCount={
                    toolsProducts["cat-tools-setprofesional"].reviewCount
                  }
                  href={toolsProducts["cat-tools-setprofesional"].href}
                  discount={toolsProducts["cat-tools-setprofesional"].discount}
                  description={
                    toolsProducts["cat-tools-setprofesional"].description
                  }
                />
                <ProductCard
                  title={fornitureProducts["cat-forniture-table-nordic"].title}
                  price={fornitureProducts["cat-forniture-table-nordic"].price}
                  originalPrice={
                    fornitureProducts["cat-forniture-table-nordic"]
                      .originalPrice
                  }
                  image={fornitureProducts["cat-forniture-table-nordic"].image}
                  rating={
                    fornitureProducts["cat-forniture-table-nordic"].rating
                  }
                  reviewCount={
                    fornitureProducts["cat-forniture-table-nordic"].reviewCount
                  }
                  href={fornitureProducts["cat-forniture-table-nordic"].href}
                  description={
                    fornitureProducts["cat-forniture-table-nordic"].description
                  }
                />
              </div>
            </TabsContent>
            <TabsContent value="kitchens" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Object.values(kitchenProducts).map((product) => (
                  <ProductCard key={product.title} {...product} />
                ))}
              </div>
            </TabsContent>
            {/* Contenido similar para otras pestañas */}
          </Tabs>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={badgetKitchenProducts["cat-kitcjhen-offert"].image}
              width={600}
              height={400}
              alt="Promoción especial"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6">
              <Badge className="w-fit mb-4">
                {badgetKitchenProducts["cat-kitcjhen-offert"].title}
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-2">
                {badgetKitchenProducts["cat-kitcjhen-offert"].description}
              </h3>
              <p className="text-white/90 mb-4">
                {badgetKitchenProducts["cat-kitcjhen-offert"].endOfOffer}
              </p>
              <Button
                className="w-fit"
                onClick={() => setShowKitchenOfferModal(true)}
              >
                Ver Oferta
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/image-products/cat-services.webp"
              width={600}
              height={400}
              alt="Diseño personalizado"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6">
              <Badge variant="secondary" className="w-fit mb-4">
                Servicio Premium
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-2">
                Diseño personalizado
              </h3>
              <p className="text-white/90 mb-4">
                Crea la cocina de tus sueños con nuestros expertos
              </p>
              <Button
                variant="outline"
                className="w-fit bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white hover:bg-white/20"
                  asChild
                >
                  <Link
                    target="_blank"
                    href={formularioUrl}
                    rel="noopener noreferrer"
                  >
                    Agendar cita
                  </Link>
                </Button>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Calidad Premium</h3>
                  <p className="text-muted-foreground">
                    Utilizamos los mejores materiales y acabados para garantizar
                    durabilidad y belleza.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
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
                      className="h-6 w-6 text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
                  <p className="text-muted-foreground">
                    Recoge en tienda en 2 horas o recibe tu pedido en casa en
                    tiempo récord.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
                      <path d="M2 13h10" />
                      <path d="m9 16 3-3-3-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Diseño Personalizado
                  </h3>
                  <p className="text-muted-foreground">
                    Nuestros expertos te ayudan a crear espacios únicos
                    adaptados a tus necesidades.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Garantía Extendida</h3>
                  <p className="text-muted-foreground">
                    Todos nuestros productos cuentan con garantía extendida para
                    tu tranquilidad.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Testimonios de Clientes
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <h4 className="font-semibold">Hey tu!</h4>
                        <div className="flex ml-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-primary text-primary"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        &ldquo;Se el primero en dejar un testimonio!&rdquo;
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6" hidden>
              <Button variant="outline" asChild>
                <Link href="/testimonials">Ver más testimonios</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/image-products/cat-kitchen-example.webp"
                width={800}
                height={500}
                alt="Cocina diseñada por nuestro equipo"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Diseño de cocina personalizada
                </h3>
                <p className="text-white/90 mb-4">
                  Proyecto realizado para la familia Martínez
                </p>
                <Button
                  variant="outline"
                  className="w-fit bg-white/10 text-white hover:bg-white/20"
                  asChild
                >
                  <Link href="/catalog/kitchens">Ver Proyectos</Link>
                  {/* <Link href="/projects">Ver Proyectos</Link> */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                ¿Listo para transformar tu hogar?
              </h2>
              <p className="mb-6">
                Agenda una cita con nuestros expertos y comienza a diseñar el
                espacio de tus sueños. Sin compromiso.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/appointment">Agendar Cita Gratuita</Link>
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/image-products/cat-desing-process.webp"
                width={400}
                height={300}
                alt="Diseñador trabajando"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal para la oferta de cocinas */}
      <Dialog
        open={showKitchenOfferModal}
        onOpenChange={setShowKitchenOfferModal}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-xl">
            {badgetKitchenProducts['cat-kitcjhen-offert'].description}
            </DialogTitle>
            <DialogDescription>
              Oferta especial por tiempo limitado
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="relative h-[200px] rounded-md overflow-hidden">
              <Image
                src={badgetKitchenProducts['cat-kitcjhen-offert'].image}
                alt="Promoción cocinas"
                fill
                className="object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">
                {badgetKitchenProducts['cat-kitcjhen-offert'].discount}%
              </Badge>
            </div>

            <div className="space-y-4">
              <p>
                Renueva tu cocina con los mejores materiales y diseños
                exclusivos a precios increíbles. Aprovecha esta oferta por
                tiempo limitado y transforma el corazón de tu hogar.
              </p>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  <span className="font-medium">
                  {badgetKitchenProducts['cat-kitcjhen-offert'].endOfOffer}
                  </span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-primary" />
                  <span className="font-medium">
                    Aplicable a cocinas seleccionadas
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  <span className="font-medium">
                    ¡No esperes más! La oferta es por tiempo limitado
                  </span>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-medium mb-2">Condiciones de la oferta:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• No acumulable con otras promociones</li>
                  <li>• Válido para compras superiores a $1000</li>
                  <li>• Incluye diseño personalizado e instalación</li>
                  <li>• Consulta disponibilidad en tu tienda más cercana</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end">
              <DialogClose asChild>
                <Button>Cerrar</Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
