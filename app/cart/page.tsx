"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, ShoppingCart, Trash2, ArrowRight, CreditCard, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ProductCard } from "@/components/product-card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Datos de ejemplo para el carrito
const cartItems = [
  {
    id: 1,
    name: "Cocina Modular Premium",
    price: 1299.99,
    originalPrice: 1599.99,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
    discount: 19,
  },
  {
    id: 2,
    name: "Taladro Inalámbrico Profesional",
    price: 129.99,
    originalPrice: 159.99,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
    discount: 19,
  },
  {
    id: 3,
    name: "Sofá Esquinero Confort",
    price: 899.99,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
  },
]

export default function CartPage() {
  const [items, setItems] = useState(cartItems)
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const applyCoupon = () => {
    if (couponCode.trim() !== "") {
      setCouponApplied(true)
    }
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = couponApplied ? subtotal * 0.1 : 0 // 10% discount if coupon applied
  const shipping = subtotal > 1000 ? 0 : 49.99
  const total = subtotal - discount + shipping

  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-6">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold tracking-tight">Carrito de Compras</h1>
          <span className="ml-2 rounded-full bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
            {items.length}
          </span>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Tu carrito está vacío</h2>
            <p className="text-muted-foreground mb-6">Parece que aún no has añadido ningún producto a tu carrito.</p>
            <Button asChild>
              <Link href="/catalog">Explorar productos</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Producto</TableHead>
                      <TableHead className="text-right">Precio</TableHead>
                      <TableHead className="text-center">Cantidad</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 overflow-hidden rounded">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              {item.originalPrice && (
                                <div className="text-sm text-muted-foreground line-through">
                                  ${item.originalPrice.toFixed(2)}
                                </div>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <div className="flex items-center justify-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-r-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease</span>
                            </Button>
                            <div className="flex h-8 w-10 items-center justify-center border-y">{item.quantity}</div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-l-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase</span>
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Código de descuento"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-[180px]"
                  />
                  <Button variant="outline" onClick={applyCoupon}>
                    Aplicar
                  </Button>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/catalog">Continuar comprando</Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="rounded-lg border p-6">
                <h2 className="text-lg font-semibold mb-4">Resumen del pedido</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Descuento (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Envío</span>
                    <span>{shipping === 0 ? "Gratis" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  {shipping === 0 && (
                    <div className="text-sm text-green-600 flex items-center">
                      <Truck className="h-4 w-4 mr-1" />
                      <span>¡Envío gratuito en pedidos superiores a $1000!</span>
                    </div>
                  )}
                </div>
                <Button className="w-full mt-6" size="lg" asChild>
                  <Link href="/checkout">
                    Proceder al pago <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="mt-4 flex items-center justify-center text-sm text-muted-foreground">
                  <CreditCard className="h-4 w-4 mr-1" />
                  <span>Pago seguro garantizado</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-3">Métodos de pago aceptados</h3>
                <div className="flex gap-2">
                  <div className="rounded-md border p-2 w-12 h-8 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=20&width=30" width={30} height={20} alt="Visa" />
                  </div>
                  <div className="rounded-md border p-2 w-12 h-8 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=20&width=30" width={30} height={20} alt="Mastercard" />
                  </div>
                  <div className="rounded-md border p-2 w-12 h-8 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=20&width=30" width={30} height={20} alt="PayPal" />
                  </div>
                  <div className="rounded-md border p-2 w-12 h-8 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=20&width=30" width={30} height={20} alt="Apple Pay" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {items.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Productos recomendados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <ProductCard
                title="Mesa de Centro Nórdica"
                price={199.99}
                image="/placeholder.svg?height=300&width=300"
                rating={4.5}
                reviewCount={68}
                href="/product/coffee-table"
              />
              <ProductCard
                title="Alacena Moderna"
                price={349.99}
                image="/placeholder.svg?height=300&width=300"
                rating={4.4}
                reviewCount={43}
                href="/product/kitchen-cabinet"
              />
              <ProductCard
                title="Silla Ergonómica"
                price={149.99}
                image="/placeholder.svg?height=300&width=300"
                rating={4.3}
                reviewCount={92}
                href="/product/chair"
              />
              <ProductCard
                title="Juego de Comedor"
                price={599.99}
                image="/placeholder.svg?height=300&width=300"
                rating={4.6}
                reviewCount={53}
                href="/product/dining-set"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

