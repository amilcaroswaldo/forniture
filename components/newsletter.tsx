"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setError(true)
      return
    }

    // Aquí iría la lógica para enviar el email a un servicio
    setSubmitted(true)
    setError(false)
    setEmail("")
  }

  return (
    <section className="border-t py-12">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-2">Suscríbete a nuestro boletín</h2>
          <p className="text-muted-foreground mb-6 max-w-md">
            Recibe las últimas novedades, ofertas exclusivas y consejos de decoración directamente en tu correo.
          </p>
          {submitted ? (
            <Alert className="max-w-md">
              <AlertTitle>¡Gracias por suscribirte!</AlertTitle>
              <AlertDescription>Pronto recibirás nuestras novedades y ofertas exclusivas.</AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="tucorreo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={error ? "border-destructive" : ""}
              />
              <Button type="submit">
                Suscribirse <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
          {error && !submitted && (
            <p className="text-destructive text-sm mt-2">Por favor, introduce un correo electrónico válido.</p>
          )}
        </div>
      </div>
    </section>
  )
}

