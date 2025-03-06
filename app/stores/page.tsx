import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock, Mail, ExternalLink, Navigation } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Nuestras Tiendas | MuebleHogar",
  description: "Encuentra tu tienda MuebleHogar más cercana y visítanos",
}

export default function StoresPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Nuestras Tiendas</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visita cualquiera de nuestras tiendas y descubre nuestra amplia gama de productos. Nuestro equipo de
            expertos estará encantado de asesorarte.
          </p>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="madrid" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="madrid">Ahuachapán</TabsTrigger>
              {/* <TabsTrigger value="barcelona">Barcelona</TabsTrigger>
              <TabsTrigger value="valencia">Valencia</TabsTrigger>
              <TabsTrigger value="sevilla">Sevilla</TabsTrigger> */}
            </TabsList>

            <TabsContent value="madrid">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Ahuachapán</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* <div className="flex items-start gap-3">
                        </div> */}
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Teléfono</h3>
                            <p className="text-muted-foreground">muy pronto...</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Email</h3>
                            <p className="text-muted-foreground">dekomuebles123@gmail.com</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Horario</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                              <p>Lunes - Viernes:</p>
                              <p>9:00 - 20:00</p>
                              <p>Sábados:</p>
                              <p>10:00 - 14:00</p>
                              <p>Domingos:</p>
                              <p>Cerrado</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1">
                      <Phone className="mr-2 h-4 w-4" /> Llamar
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Navigation className="mr-2 h-4 w-4" /> Cómo llegar
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="rounded-lg overflow-hidden border h-[400px] relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mapa de ubicación Madrid Centro"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button asChild>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Ver en Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Servicios disponibles en esta tienda</h3>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Asesoramiento personalizado
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Diseño 3D
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Financiación
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Entrega a domicilio
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Montaje
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Servicio postventa
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="barcelona">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Tienda Barcelona Diagonal</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Dirección</h3>
                            <p className="text-muted-foreground">Avinguda Diagonal 456, 08006 Barcelona</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Teléfono</h3>
                            <p className="text-muted-foreground">+34 930 456 789</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Email</h3>
                            <p className="text-muted-foreground">barcelona@mueblehogar.com</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Horario</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                              <p>Lunes - Viernes:</p>
                              <p>9:00 - 20:00</p>
                              <p>Sábados:</p>
                              <p>10:00 - 14:00</p>
                              <p>Domingos:</p>
                              <p>Cerrado</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1">
                      <Phone className="mr-2 h-4 w-4" /> Llamar
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Navigation className="mr-2 h-4 w-4" /> Cómo llegar
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="rounded-lg overflow-hidden border h-[400px] relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mapa de ubicación Barcelona Diagonal"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button asChild>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Ver en Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Servicios disponibles en esta tienda</h3>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Asesoramiento personalizado
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Diseño 3D
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Financiación
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Entrega a domicilio
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Montaje
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Servicio postventa
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="valencia">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Tienda Valencia Centro</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Dirección</h3>
                            <p className="text-muted-foreground">Calle Colón 78, 46004 Valencia</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Teléfono</h3>
                            <p className="text-muted-foreground">+34 960 789 123</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Email</h3>
                            <p className="text-muted-foreground">valencia@mueblehogar.com</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Horario</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                              <p>Lunes - Viernes:</p>
                              <p>9:00 - 20:00</p>
                              <p>Sábados:</p>
                              <p>10:00 - 14:00</p>
                              <p>Domingos:</p>
                              <p>Cerrado</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1">
                      <Phone className="mr-2 h-4 w-4" /> Llamar
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Navigation className="mr-2 h-4 w-4" /> Cómo llegar
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="rounded-lg overflow-hidden border h-[400px] relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mapa de ubicación Valencia Centro"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button asChild>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Ver en Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Servicios disponibles en esta tienda</h3>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Asesoramiento personalizado
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Diseño 3D
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Financiación
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Entrega a domicilio
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Montaje
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Servicio postventa
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sevilla">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Tienda Sevilla Nervión</h2>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Dirección</h3>
                            <p className="text-muted-foreground">Avenida de Luis Montoto 123, 41005 Sevilla</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Teléfono</h3>
                            <p className="text-muted-foreground">+34 950 321 654</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Email</h3>
                            <p className="text-muted-foreground">sevilla@mueblehogar.com</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Horario</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                              <p>Lunes - Viernes:</p>
                              <p>9:00 - 20:00</p>
                              <p>Sábados:</p>
                              <p>10:00 - 14:00</p>
                              <p>Domingos:</p>
                              <p>Cerrado</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1">
                      <Phone className="mr-2 h-4 w-4" /> Llamar
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Navigation className="mr-2 h-4 w-4" /> Cómo llegar
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="rounded-lg overflow-hidden border h-[400px] relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mapa de ubicación Sevilla Nervión"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button asChild>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Ver en Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Servicios disponibles en esta tienda</h3>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Asesoramiento personalizado
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Diseño 3D
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Financiación
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Entrega a domicilio
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Montaje
                      </li>
                      <li className="flex items-center">
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
                          className="h-4 w-4 mr-2 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Servicio postventa
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16 bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda para encontrar tu tienda más cercana?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Nuestro equipo de atención al cliente está disponible para ayudarte a encontrar la tienda más cercana a tu
            ubicación y resolver cualquier duda que puedas tener.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Contactar</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+34900123456">
                <Phone className="mr-2 h-4 w-4" /> Llamar ahora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

