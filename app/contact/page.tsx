import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Contacto | MuebleHogar",
  description: "Ponte en contacto con nosotros para cualquier consulta o solicitud de presupuesto",
}

export default function ContactPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Contacto</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta, solicitud de presupuesto
            o información adicional sobre nuestros productos y servicios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <div className="bg-muted p-6 rounded-lg text-center">
              <p className="text-muted-foreground mb-6">
                Puedes contactarnos a través de nuestras redes sociales.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
            <div className="grid gap-6">
              {/* <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground mb-1">Atención al cliente</p>
                      <p className="font-medium">+34 900 123 456</p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Correo electrónico</h3>
                      <p className="text-muted-foreground mb-1">Consultas generales</p>
                      <p className="font-medium">dekomuebles123@gmail.com</p>
                      <p className="text-muted-foreground mt-2 mb-1">Atención al cliente</p>
                      <p className="font-medium">dekomuebles123@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horario de atención</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <p className="text-muted-foreground">Lunes - Viernes:</p>
                        <p>9:00 - 20:00</p>
                        <p className="text-muted-foreground">Sábados:</p>
                        <p>10:00 - 14:00</p>
                        <p className="text-muted-foreground">Domingos:</p>
                        <p>Cerrado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Nuestra ubicación</h2>
          <div className="rounded-lg overflow-hidden border h-[400px] relative">
            <Image src="/placeholder.svg?height=400&width=1200" alt="Mapa de ubicación" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button>Ver en Google Maps</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas ayuda con tu proyecto?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Nuestro equipo de expertos está listo para ayudarte a diseñar el espacio perfecto para tu hogar. Agenda una
            cita gratuita y sin compromiso.
          </p>
          <Button size="lg" asChild>
            <Link href="/appointment">Agendar una cita</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

