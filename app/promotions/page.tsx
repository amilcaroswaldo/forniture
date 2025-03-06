import Image from "next/image"
import Link from "next/link"
import { CalendarClock, ChevronRight, Tag, Percent, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Promociones | MuebleHogar",
  description: "Descubre nuestras ofertas especiales y promociones exclusivas en muebles, cocinas y más",
}

export default function PromotionsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Promociones y Ofertas</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestras ofertas especiales, descuentos exclusivos y promociones por tiempo limitado en muebles,
            cocinas y más.
          </p>
        </div>

        <div className="relative mt-8">
          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[400px] w-full">
              <Image
                src="/image-products/cat-kitchen-modular-premiu.webp"
                fill
                alt="Promoción especial"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-6 md:p-10">
                <Badge className="w-fit mb-4 text-base px-3 py-1">Oferta Estrella</Badge>
                <h2 className="max-w-xl text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  20% de descuento en todas las cocinas
                </h2>
                <p className="mt-4 max-w-md text-white md:text-lg">
                  Renueva tu cocina con los mejores materiales y diseños exclusivos a precios increíbles.
                </p>
                <div className="mt-6 flex items-center">
                  <CalendarClock className="h-5 w-5 text-white mr-2" />
                  <p className="text-white">Válido hasta el 30 de junio</p>
                </div>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/catalog/kitchens">Ver cocinas en oferta</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">Todas las ofertas</TabsTrigger>
              <TabsTrigger value="kitchens">Cocinas</TabsTrigger>
              <TabsTrigger value="furniture">Muebles</TabsTrigger>
              <TabsTrigger value="tools">Herramientas</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden">
                    <div className="relative">
                      <Image
                        src="/image-products/cat-kitchen-modular-premiu.webp"
                        height={300}
                        width={600}
                        alt="Promoción cocinas"
                        className="w-full object-cover h-[200px]"
                      />
                      <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-20%</Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Tag className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm text-muted-foreground">Cocinas</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">20% de descuento en todas las cocinas</h3>
                      <p className="text-muted-foreground mb-4">
                        Renueva tu cocina con los mejores materiales y diseños exclusivos a precios increíbles.
                      </p>
                      <div className="flex items-center mb-4">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Válido hasta el 30 de junio</span>
                      </div>
                      <Button asChild>
                        <Link href="/product/kitchen-premium">Ver oferta</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="relative">
                      <Image
                        src="/image-products/cat-forniture-confort-sofa.webp"
                        height={300}
                        width={600}
                        alt="Promoción sofás"
                        className="w-full object-cover h-[200px]"
                      />
                      <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-15%</Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Tag className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm text-muted-foreground">Muebles</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">15% de descuento en sofás y sillones</h3>
                      <p className="text-muted-foreground mb-4">
                        Renueva tu sala de estar con nuestra colección de sofás y sillones de máxima comodidad.
                      </p>
                      <div className="flex items-center mb-4">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Válido hasta el 15 de julio</span>
                      </div>
                      <Button asChild>
                        <Link href="product/sofa-corner">Ver oferta</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <Card className="overflow-hidden">
                    <div className="relative">
                      <Image
                        src="/image-products/cat-tools-setprofesional.webp"
                        height={200}
                        width={400}
                        alt="Promoción herramientas"
                        className="w-full object-cover h-[150px]"
                      />
                      <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-25%</Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Tag className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm text-muted-foreground">Herramientas</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">25% en sets de herramientas</h3>
                      <div className="flex items-center mb-4">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Hasta el 20 de julio</span>
                      </div>
                      <Button size="sm" asChild>
                        <Link href="/product/tool-set">Ver oferta</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="relative">
                      <Image
                        src="/image-products/cat-appliances-refrigerator.webp"
                        height={200}
                        width={400}
                        alt="Promoción electrodomésticos"
                        className="w-full object-cover h-[150px]"
                      />
                      <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-10%</Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Tag className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm text-muted-foreground">Electrodomésticos</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">10% en electrodomésticos</h3>
                      <div className="flex items-center mb-4">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Hasta el 30 de junio</span>
                      </div>
                      <Button size="sm" asChild>
                        <Link href="/catalog/appliances">Ver oferta</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="relative">
                      <Image
                        src="/image-products/cat-forniture-dining-set.webp"
                        height={200}
                        width={400}
                        alt="Promoción dormitorios"
                        className="w-full object-cover h-[150px]"
                      />
                      <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-30%</Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Tag className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm text-muted-foreground">Dormitorios</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">30% en dormitorios completos</h3>
                      <div className="flex items-center mb-4">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Hasta el 15 de agosto</span>
                      </div>
                      <Button size="sm" asChild>
                        <Link href="/catalog/furniture">Ver oferta</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="kitchens">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/image-products/cat-kitchen-modular-premiu.webp"
                      height={300}
                      width={600}
                      alt="Promoción cocinas"
                      className="w-full object-cover h-[200px]"
                    />
                    <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-20%</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Tag className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Cocinas</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">20% de descuento en todas las cocinas</h3>
                    <p className="text-muted-foreground mb-4">
                      Renueva tu cocina con los mejores materiales y diseños exclusivos a precios increíbles.
                    </p>
                    <div className="flex items-center mb-4">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Válido hasta el 30 de junio</span>
                    </div>
                    <Button asChild>
                      <Link href="product/kitchen-premium">Ver oferta</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/image-products/cat-kitchen-modular-premiu.webp"
                      height={300}
                      width={600}
                      alt="Promoción islas de cocina"
                      className="w-full object-cover h-[200px]"
                    />
                    <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-15%</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Tag className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Cocinas</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">15% de descuento en islas de cocina</h3>
                    <p className="text-muted-foreground mb-4">
                      Añade funcionalidad y estilo a tu cocina con nuestras islas modulares.
                    </p>
                    <div className="flex items-center mb-4">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Válido hasta el 15 de julio</span>
                    </div>
                    <Button asChild>
                      <Link href="/product/island-kitchen">Ver oferta</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="furniture">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/image-products/cat-forniture-confort-sofa.webp"
                      height={300}
                      width={600}
                      alt="Promoción sofás"
                      className="w-full object-cover h-[200px]"
                    />
                    <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-15%</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Tag className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Muebles</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">15% de descuento en sofás y sillones</h3>
                    <p className="text-muted-foreground mb-4">
                      Renueva tu sala de estar con nuestra colección de sofás y sillones de máxima comodidad.
                    </p>
                    <div className="flex items-center mb-4">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Válido hasta el 15 de julio</span>
                    </div>
                    <Button asChild>
                      <Link href="product/sofa-corner">Ver oferta</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/image-products/cat-forniture-confort-sofa.webp"
                      height={300}
                      width={600}
                      alt="Promoción dormitorios"
                      className="w-full object-cover h-[200px]"
                    />
                    <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-30%</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Tag className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Dormitorios</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">30% en dormitorios completos</h3>
                    <p className="text-muted-foreground mb-4">
                      Transforma tu dormitorio con nuestros conjuntos completos que incluyen cama, armario y mesitas.
                    </p>
                    <div className="flex items-center mb-4">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Válido hasta el 15 de agosto</span>
                    </div>
                    <Button asChild>
                      <Link href="product/sofa-corner">Ver oferta</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="tools">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/image-products/cat-tools-setprofesional.webp"
                      height={300}
                      width={600}
                      alt="Promoción herramientas"
                      className="w-full object-cover h-[200px]"
                    />
                    <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-25%</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Tag className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Herramientas</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">25% en sets de herramientas</h3>
                    <p className="text-muted-foreground mb-4">
                      Equípate con nuestros sets completos de herramientas profesionales para cualquier proyecto.
                    </p>
                    <div className="flex items-center mb-4">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Válido hasta el 20 de julio</span>
                    </div>
                    <Button asChild>
                      <Link href="/product/tool-set">Ver oferta</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/image-products/cat-tools-drill.webp"
                      height={300}
                      width={600}
                      alt="Promoción taladros"
                      className="w-full object-cover h-[200px]"
                    />
                    <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-20%</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Tag className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Herramientas</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">20% en taladros inalámbricos</h3>
                    <p className="text-muted-foreground mb-4">
                      Potentes taladros inalámbricos con baterías de larga duración para tus proyectos.
                    </p>
                    <div className="flex items-center mb-4">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Válido hasta el 30 de junio</span>
                    </div>
                    <Button asChild>
                      <Link href="/product/drill">Ver oferta</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Productos en oferta</h2>
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
              title="Refrigerador Smart"
              price={899.99}
              originalPrice={1099.99}
              image="/image-products/cat-appliances-refrigerator.webp"
              rating={4.8}
              reviewCount={74}
              href="/product/refrigerator"
              discount={18}
            />
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/catalog">
                Ver todos los productos <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 bg-muted rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Financiamiento sin intereses</h2>
              <p className="text-muted-foreground mb-4">
                Aprovecha nuestras opciones de financiamiento sin intereses para adquirir los productos que necesitas y
                pagarlos cómodamente en cuotas mensuales.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Percent className="h-5 w-5 mr-2 text-primary" />
                  <span>Hasta 12 meses sin intereses</span>
                </li>
                <li className="flex items-center">
                  <Percent className="h-5 w-5 mr-2 text-primary" />
                  <span>Sin comisiones ocultas</span>
                </li>
                <li className="flex items-center">
                  <Percent className="h-5 w-5 mr-2 text-primary" />
                  <span>Aprobación rápida</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/financing">Conocer más</Link>
              </Button>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=500" alt="Financiamiento" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Cómo aprovechar nuestras promociones?</h2>
          <div className="grid sm:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
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
                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h7" />
                  <path d="M21.21 15.89A3 3 0 1 0 19 18m-4.5 0H19v-4.5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">1. Revisa las fechas</h3>
              <p className="text-muted-foreground">
                Nuestras promociones tienen fechas límite. ¡No dejes pasar la oportunidad!
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">2. Consulta condiciones</h3>
              <p className="text-muted-foreground">
                Cada promoción tiene sus condiciones específicas. Revísalas antes de realizar tu compra.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
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
              <h3 className="text-lg font-bold mb-2">3. Realiza tu compra</h3>
              <p className="text-muted-foreground">
                El descuento se aplicará automáticamente al añadir los productos a tu carrito.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quieres recibir nuestras promociones?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Suscríbete a nuestro boletín y recibe información sobre nuestras promociones exclusivas antes que nadie.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="#newsletter">Suscribirme ahora</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

