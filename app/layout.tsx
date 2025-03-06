import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Newsletter } from "@/components/newsletter"
import { SocialLinks } from "@/components/social-links"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MuebleHogar - Muebles, Cocinas y Herramientas",
  description: "Tienda online de muebles, cocinas a medida, herramientas y productos para el hogar",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between py-4">
              <div className="flex items-center gap-6 md:gap-10">
                <Link href="/" className="hidden md:block">
                  <Image src="/icon-project/logo.png" width={120} height={32} alt="MuebleHogar Logo" />
                </Link>
                <div className="hidden md:flex">
                  <MainNav />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <form className="hidden md:block">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Buscar productos..." className="w-[300px] pl-8" />
                  </div>
                </form>
                {/* Carrito de compras oculto
                <Link href="/cart" className="flex items-center gap-1">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="hidden md:inline-block">Carrito</span>
                  <Badge variant="secondary" className="ml-1">
                    3
                  </Badge>
                </Link>
                */}
                {/* Botón de cuenta oculto
                <Link href="/account" className="hidden md:flex items-center gap-1">
                  <User className="h-5 w-5" />
                  <span>Cuenta</span>
                </Link>
                */}
                {/* <Link href="/stores" className="hidden md:flex items-center gap-1">
                  <MapPin className="h-5 w-5" />
                  <span>Tiendas</span>
                </Link> */}
                <MobileNav />
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <SocialLinks />
          <Newsletter />
          <footer className="border-t bg-muted">
            <div className="container py-8 md:py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                <div className="col-span-2 lg:col-span-1">
                  <Link href="/" className="inline-block mb-4">
                    <Image src="/placeholder.svg?height=32&width=120" width={120} height={32} alt="MuebleHogar Logo" />
                  </Link>
                  <p className="text-muted-foreground mb-4">
                    Diseño y calidad para transformar tu hogar con los mejores productos y servicios.
                  </p>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                        className="h-5 w-5"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span className="sr-only">WhatsApp</span>
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Productos</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/catalog/kitchens" className="text-muted-foreground hover:text-foreground">
                        Cocinas
                      </Link>
                    </li>
                    <li>
                      <Link href="/catalog/furniture" className="text-muted-foreground hover:text-foreground">
                        Muebles
                      </Link>
                    </li>
                    <li>
                      <Link href="/catalog/tools" className="text-muted-foreground hover:text-foreground">
                        Herramientas
                      </Link>
                    </li>
                    <li>
                      <Link href="/catalog/appliances" className="text-muted-foreground hover:text-foreground">
                        Electrodomésticos
                      </Link>
                    </li>
                    <li>
                      <Link href="/catalog/materials" className="text-muted-foreground hover:text-foreground">
                        Materiales
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Servicios</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/design" className="text-muted-foreground hover:text-foreground">
                        Diseño Personalizado
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/installation" className="text-muted-foreground hover:text-foreground">
                        Instalación
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/maintenance" className="text-muted-foreground hover:text-foreground">
                        Mantenimiento
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/delivery" className="text-muted-foreground hover:text-foreground">
                        Entrega a Domicilio
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/financing" className="text-muted-foreground hover:text-foreground">
                        Financiamiento
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Empresa</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="text-muted-foreground hover:text-foreground">
                        Sobre Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                        Contacto
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                        Trabaja con Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                        Preguntas Frecuentes
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                        Términos y Condiciones
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                        Política de Privacidad
                      </Link>
                    </li>
                    <li>
                      <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                        Política de Cookies
                      </Link>
                    </li>
                    <li>
                      <Link href="/returns" className="text-muted-foreground hover:text-foreground">
                        Devoluciones
                      </Link>
                    </li>
                    <li>
                      <Link href="/warranty" className="text-muted-foreground hover:text-foreground">
                        Garantía
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                  © {new Date().getFullYear()} MuebleHogar. Todos los derechos reservados.
                </p>
                {/* <div className="flex items-center space-x-4">
                  <Image src="/placeholder.svg?height=24&width=38" width={38} height={24} alt="Visa" />
                  <Image src="/placeholder.svg?height=24&width=38" width={38} height={24} alt="Mastercard" />
                  <Image src="/placeholder.svg?height=24&width=38" width={38} height={24} alt="PayPal" />
                </div> */}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

