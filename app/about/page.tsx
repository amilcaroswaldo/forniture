import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Users, History, Award, Lightbulb, Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Sobre Nosotros | MuebleHogar",
  description: "Conoce nuestra historia, valores y equipo de profesionales",
}

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Sobre Nosotros</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más de 20 años transformando hogares con diseños exclusivos, materiales de calidad y un servicio
            excepcional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-muted-foreground mb-4">
              MuebleHogar nació en 2003 con una visión clara: revolucionar la forma en que las personas diseñan y
              equipan sus espacios. Lo que comenzó como un pequeño taller familiar se ha convertido en una empresa líder
              en el sector del mobiliario y diseño de interiores.
            </p>
            <p className="text-muted-foreground mb-4">
              A lo largo de estos años, hemos crecido de manera constante, ampliando nuestra gama de productos y
              servicios para ofrecer soluciones integrales que satisfagan todas las necesidades de nuestros clientes.
            </p>
            <p className="text-muted-foreground">
              Hoy, con más de 15 tiendas en todo el país y un equipo de más de 200 profesionales, seguimos fieles a
              nuestra filosofía original: calidad, innovación y atención personalizada.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Historia de MuebleHogar"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Calidad</h3>
                  <p className="text-muted-foreground">
                    Seleccionamos cuidadosamente cada material y supervisamos cada proceso para garantizar productos
                    duraderos y de alto rendimiento.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Servicio al Cliente</h3>
                  <p className="text-muted-foreground">
                    Nuestro equipo está comprometido a brindar una atención personalizada y profesional en cada etapa
                    del proceso.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovación</h3>
                  <p className="text-muted-foreground">
                    Constantemente buscamos nuevas tendencias, tecnologías y soluciones para ofrecer productos a la
                    vanguardia del diseño.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sostenibilidad</h3>
                  <p className="text-muted-foreground">
                    Comprometidos con el medio ambiente, utilizamos materiales sostenibles y procesos de producción
                    responsables.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <History className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Experiencia</h3>
                  <p className="text-muted-foreground">
                    Más de dos décadas en el sector nos han permitido perfeccionar nuestros procesos y conocer a fondo
                    las necesidades de nuestros clientes.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Excelencia</h3>
                  <p className="text-muted-foreground">
                    Buscamos la perfección en cada detalle, desde el diseño inicial hasta la entrega final del producto.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Nuestro Equipo</h2>
          <Tabs defaultValue="directivos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="directivos">Equipo Directivo</TabsTrigger>
              <TabsTrigger value="disenadores">Diseñadores</TabsTrigger>
              <TabsTrigger value="tecnicos">Técnicos e Instaladores</TabsTrigger>
            </TabsList>
            <TabsContent value="directivos">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Director General"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Carlos Martínez</h3>
                  <p className="text-primary">Director General</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Fundador de MuebleHogar con más de 25 años de experiencia en el sector.
                  </p>
                </div>
                <div className="text-center">
                  <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Directora de Diseño"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Laura Sánchez</h3>
                  <p className="text-primary">Directora de Diseño</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Arquitecta de interiores con amplia experiencia en diseño de espacios residenciales.
                  </p>
                </div>
                <div className="text-center">
                  <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Director Comercial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Miguel Rodríguez</h3>
                  <p className="text-primary">Director Comercial</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Especialista en desarrollo de negocio y estrategias de crecimiento.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="disenadores">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="relative h-[250px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=250&width=250"
                      alt="Diseñadora Senior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Ana Gómez</h3>
                  <p className="text-primary">Diseñadora Senior</p>
                </div>
                <div className="text-center">
                  <div className="relative h-[250px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=250&width=250"
                      alt="Diseñador de Cocinas"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Pablo Fernández</h3>
                  <p className="text-primary">Diseñador de Cocinas</p>
                </div>
                <div className="text-center">
                  <div className="relative h-[250px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=250&width=250"
                      alt="Diseñadora de Interiores"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Lucía Torres</h3>
                  <p className="text-primary">Diseñadora de Interiores</p>
                </div>
                <div className="text-center">
                  <div className="relative h-[250px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=250&width=250"
                      alt="Diseñador 3D"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Javier López</h3>
                  <p className="text-primary">Diseñador 3D</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tecnicos">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="relative h-[250px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=250&width=250"
                      alt="Jefe de Instalaciones"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Roberto Díaz</h3>
                  <p className="text-primary">Jefe de Instalaciones</p>
                </div>
                <div className="text-center">
                  <div className="relative h-[250px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=250&width=250"
                      alt="Técnico Especialista"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Sergio Moreno</h3>
                  <p className="text-primary">Técnico Especialista</p>
                </div>
                <div className="text-center">
                  <div className="relative h-[250px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=250&width=250"
                      alt="Instaladora"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Elena Ruiz</h3>
                  <p className="text-primary">Instaladora</p>
                </div>
                <div className="text-center">
                  <div className="relative h-[250px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=250&width=250"
                      alt="Técnico de Mantenimiento"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">David García</h3>
                  <p className="text-primary">Técnico de Mantenimiento</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16 bg-muted rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Nuestras Instalaciones</h2>
              <p className="text-muted-foreground mb-4">
                Contamos con más de 10.000 m² de instalaciones distribuidas entre nuestras tiendas, talleres y
                almacenes. Espacios diseñados para ofrecer la mejor experiencia a nuestros clientes y optimizar nuestros
                procesos de producción.
              </p>
              <p className="text-muted-foreground mb-6">
                Te invitamos a visitar nuestra tienda principal, donde podrás ver en persona la calidad de nuestros
                productos y recibir asesoramiento personalizado de nuestro equipo de expertos.
              </p>
              <Button asChild>
                <Link href="/stores">Conoce nuestras tiendas</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Tienda principal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Taller de fabricación"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="Showroom" fill className="object-cover" />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="Almacén" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Reconocimientos y Certificaciones</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A lo largo de nuestra trayectoria, hemos recibido diversos reconocimientos que avalan nuestro compromiso con
            la calidad y la excelencia.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-[150px]">
              <div className="relative h-[100px] mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Certificación ISO 9001"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <p className="text-sm font-medium">ISO 9001</p>
            </div>
            <div className="w-[150px]">
              <div className="relative h-[100px] mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Certificación Ambiental"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <p className="text-sm font-medium">ISO 14001</p>
            </div>
            <div className="w-[150px]">
              <div className="relative h-[100px] mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Premio Diseño"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <p className="text-sm font-medium">Premio Nacional de Diseño</p>
            </div>
            <div className="w-[150px]">
              <div className="relative h-[100px] mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Empresa Sostenible"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <p className="text-sm font-medium">Empresa Sostenible</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quieres formar parte de nuestro equipo?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Siempre estamos buscando talento para unirse a nuestra familia. Si te apasiona el diseño, la calidad y el
            servicio al cliente, queremos conocerte.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/careers">Ver ofertas de empleo</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

