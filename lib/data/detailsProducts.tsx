export interface Producto {
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  href: string;
  discount?: number;
  endOfOffer?: string;
  description?: string;
}

export const kitchenProducts: { [key: string]: Producto } = {
  "cat-kitchen-modular-premiu": {
    title: "Cocina Modular Premium",
    price: 1200.0,
    originalPrice: 1200.0,
    image: "/image-products/cat-kitchen-modular-premiu.webp",
    rating: 4.8,
    reviewCount: 124,
    href: "/product/kitchen-premium",
    discount: 19,
    description:
      "Cocina modular premium con diseño moderno y funcionalidad excepcional. Ideal para cocinas pequeñas y medianas.",
  },
  "cat-kichen-minimal": {
    title: "Cocina Minimalista",
    price: 999.99,
    image: "/image-products/cat-kichen-minimal.webp",
    rating: 4.7,
    reviewCount: 92,
    href: "/product/kitchen-minimal",
    description:
      "Cocina minimalista con diseño elegante y espacio eficiente. Perfecta para cocinas pequeñas y modernas.",
  },
  "cat-kitchen-island": {
    title: "Isla de Cocina Multifuncional",
    price: 499.99,
    image: "/image-products/cat-kitchen-island.webp",
    rating: 4.6,
    reviewCount: 57,
    href: "/product/kitchen-island",
    description:
      "Isla de cocina multifuncional con espacio para cocinar, comer y almacenar alimentos. Ideal para cocinas grandes y hogares modernos.",
  },
  "cat-kichen-alacena": {
    title: "Alacena Moderna",
    price: 349.99,
    image: "/image-products/cat-kichen-alacena.webp",
    rating: 4.4,
    reviewCount: 32,
    href: "/product/kichen-alacena",
    description:
      "Alacena moderna con espacio para almacenar alimentos y utensilios. Ideal para cocinas pequeñas y medianas.",
  },
};

export const badgetKitchenProducts: { [key: string]: Producto } = {
  "cat-kitcjhen-offert": {
    title: "Oferta ilimitada",
    price: 960.0,
    originalPrice: 1200.0,
    image: "/image-products/cat-kitcjhen-offert.webp",
    rating: 4.8,
    reviewCount: 124,
    href: "/product/",
    discount: 20,
    endOfOffer: "Válido hasta el 30 de junio, 2025",
    description:
      "20% de descuento en cocinas",
  },
};

export const fornitureProducts: { [key: string]: Producto } = {
  "cat-forniture-confort-sofa": {
    title: "Sofá Esquinero Confort",
    price: 899.99,
    image: "/image-products/cat-forniture-confort-sofa.webp",
    rating: 4.6,
    reviewCount: 89,
    href: "/product/sofa-corner",
    description:
      "Sofá esquinero con diseño cómodo y elegante. Ideal para espacios pequeños y hogares modernos.",
  },
  "cat-forniture-table-nordic": {
    title: "Mesa de Centro Nórdica",
    price: 199.99,
    originalPrice: 199.99,
    image: "/image-products/cat-forniture-table-nordic.webp",
    rating: 4.5,
    reviewCount: 68,
    href: "/product/coffee-table",
    description:
      "Mesa de centro nórdica con diseño moderno y materiales de alta calidad. Ideal para espacios grandes y hogares modernos.",
  },
};

export const toolsProducts: { [key: string]: Producto } = {
  "cat-tools-setprofesional": {
    title: "Set de Herramientas Profesional",
    price: 249.99,
    originalPrice: 329.99,
    image: "/image-products/cat-tools-setprofesional.webp",
    rating: 4.9,
    reviewCount: 215,
    href: "/product/tool-set",
    discount: 24,
    description:
      "Set de herramientas profesional con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la cocina.",
  },
};
