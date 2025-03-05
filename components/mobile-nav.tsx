"use client"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <div className="px-2 py-4">
          <Link href="/" className="flex items-center mb-4">
            <span className="font-bold text-xl">MuebleHogar</span>
          </Link>
          <div className="mb-4">
            <Input type="search" placeholder="Buscar productos..." className="w-full" />
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="catalogo">
              <AccordionTrigger>Catálogo</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link href="/catalog/kitchens" className="py-2">
                    Cocinas
                  </Link>
                  <Link href="/catalog/furniture" className="py-2">
                    Muebles
                  </Link>
                  <Link href="/catalog/tools" className="py-2">
                    Herramientas
                  </Link>
                  <Link href="/catalog/appliances" className="py-2">
                    Electrodomésticos
                  </Link>
                  <Link href="/catalog/materials" className="py-2">
                    Materiales
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <nav className="flex flex-col space-y-4 mt-4">
            <Link href="/" className="py-2 font-medium">
              Inicio
            </Link>
            <Link href="/promotions" className="py-2 font-medium">
              Promociones
            </Link>
            <Link href="/about" className="py-2 font-medium">
              Sobre Nosotros
            </Link>
            <Link href="/contact" className="py-2 font-medium">
              Contacto
            </Link>
            <Link href="/cart" className="py-2 font-medium">
              Carrito
            </Link>
            <Link href="/account" className="py-2 font-medium">
              Mi Cuenta
            </Link>
            <Link href="/stores" className="py-2 font-medium">
              Tiendas
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

