"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"

interface ProductCardProps {
  title: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  href: string
  discount?: number
  description?: string
}

export function ProductCard({
  title,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  href,
  discount,
  description,
}: ProductCardProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Card className="overflow-hidden">
        <div className="relative">
          <Link href={href}>
            <div className="overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={300}
                height={300}
                className="h-[200px] w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          </Link>
          {discount && (
            <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-{discount}%</Badge>
          )}
        </div>
        <CardContent className="p-4">
          <Link href={href}>
            <h3 className="font-semibold text-lg mb-2 hover:underline">{title}</h3>
          </Link>
          <div className="flex items-center mb-2">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-lg">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-muted-foreground line-through ml-2">${originalPrice.toFixed(2)}</span>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full" onClick={() => setShowModal(true)}>
            <Info className="mr-2 h-4 w-4" /> Más detalles
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-xl">{title}</DialogTitle>
            <DialogDescription>Información detallada del producto</DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-[200px] md:h-[250px] rounded-md overflow-hidden">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                {discount && (
                  <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">-{discount}%</Badge>
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({reviewCount} reseñas)</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="font-bold text-2xl">${price.toFixed(2)}</span>
                  {originalPrice && (
                    <span className="text-muted-foreground line-through ml-2">${originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{description}</p>
                <div className="mt-auto">
                  <h4 className="font-medium mb-2">Características principales:</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
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
                        className="h-4 w-4 mr-2 text-primary mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Diseño exclusivo
                    </li>
                    <li className="flex items-start">
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
                        className="h-4 w-4 mr-2 text-primary mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Materiales de alta calidad
                    </li>
                    <li className="flex items-start">
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
                        className="h-4 w-4 mr-2 text-primary mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Garantía extendida
                    </li>
                  </ul>
                </div>
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
  )
}

