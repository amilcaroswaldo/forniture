import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre completo
                  </label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico
                  </label>
                  <Input id="email" type="email" placeholder="tucorreo@ejemplo.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Teléfono
                </label>
                <Input id="phone" placeholder="Tu número de teléfono" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Asunto
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un asunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info">Información general</SelectItem>
                    <SelectItem value="quote">Solicitud de presupuesto</SelectItem>
                    <SelectItem value="support">Soporte técnico</SelectItem>
                    <SelectItem value="complaint">Reclamación</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={5} />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="privacy" className="rounded border-gray-300" />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  He leído y acepto la{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    política de privacidad
                  </Link>
                </label>
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Enviar mensaje
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
            <div className="grid gap-6">
              <Card>
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
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Correo electrónico</h3>
                      <p className="text-muted-foreground mb-1">Consultas generales</p>
                      <p className="font-medium">info@mueblehogar.com</p>
                      <p className="text-muted-foreground mt-2 mb-1">Atención al cliente</p>
                      <p className="font-medium">atencion@mueblehogar.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Tienda principal</h3>
                      <p className="text-muted-foreground mb-1">Visítanos en nuestra tienda</p>
                      <p className="font-medium">Av. Principal 123, 28001 Madrid</p>
                      <Link href="/stores" className="text-primary hover:underline text-sm mt-2 inline-block">
                        Ver todas las tiendas
                      </Link>
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

