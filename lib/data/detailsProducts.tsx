export interface SpecificationType {
  width?: string;
  deep?: string;
  height?: string;
  weight?: string;
  color?: string;
  structure?: string;
  formEdge?: string;
  Worktop?: string;
  ironwork?: string;
  modules?: string;
  typeClosed?: string;
  lining?: string;
  resistant?: string;
  lighting?: string;
}

export interface DescriptionType {
  mainDescription: string;
  listMaterials: string[];
  focusIn: string;
}
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
  largeDescription?: DescriptionType;
  specifications?: SpecificationType;
}

export const kitchenProducts: { [key: string]: Producto } = {
  "cat-kitchen-modular-premiu": {
    title: "Cocina Modular Premium",
    price: 1000.0,
    originalPrice: 1200.0,
    image: "/image-products/cat-kitchen-modular-premiu.webp",
    rating: 4.8,
    reviewCount: 124,
    href: "/product/kitchen-premium",
    discount: 20,
    description:
      "Cocina modular premium con diseño moderno y funcionalidad excepcional. Ideal para cocinas pequeñas y medianas.",
    largeDescription: {
      mainDescription:
        "Cocina modular premium con diseño moderno y funcionalidad excepcional. Ideal para cocinas pequeñas y medianas.",
      listMaterials: [
        "Módulos personalizables que se adaptan a cualquier espacio",
        "Acabados de alta resistencia a manchas, rayones y humedad",
        "Herrajes de cierre suave para un uso silencioso y duradero",
        "Sistema de organización interior optimizado",
        "Iluminación LED integrada para una mejor visibilidad",
        "Encimera de material compuesto resistente al calor y a los impactos",
        "Sistema de organización interior optimizado",
      ],
      focusIn:
        "Cocina modular premium con diseño moderno y funcionalidad excepcional. Ideal para cocinas pequeñas y medianas.",
    },
    specifications: {
      width: "100cm",
      deep: "100cm",
      height: "100cm",
      weight: "100kg",
      color: "negro",
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
      lighting: "LED",
    },
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
    largeDescription: {
      mainDescription:
        "Cocina minimalista con diseño elegante y espacio eficiente. Perfecta para cocinas pequeñas y modernas.",
      listMaterials: [
        "Módulos minimalistas que se adaptan a cualquier espacio",
        "Acabados de alta resistencia a manchas, rayones y humedad",
        "Herrajes de cierre suave para un uso silencioso y duradero",
        "Encimera de material compuesto resistente al calor y a los impactos",
      ],
      focusIn:
        "Cocina minimalista con diseño elegante y espacio eficiente. Perfecta para cocinas pequeñas y modernas.",
    },
    specifications: {
      width: "100cm",
      deep: "100cm",
      height: "100cm",
      weight: "100kg",
      color: "negro",
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
      lighting: "LED",
    },
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
    largeDescription: {
      mainDescription:
        "Isla de cocina multifuncional con espacio para cocinar, comer y almacenar alimentos. Ideal para cocinas grandes y hogares modernos.",
      listMaterials: [
        "Módulos personalizables que se adaptan a cualquier espacio",
        "Lavamanos de alta calidad",
        "Encimera de material compuesto resistente al calor y a los impactos",
      ],
      focusIn:
        "Isla de cocina multifuncional con espacio para cocinar, comer y almacenar alimentos. Ideal para cocinas grandes y hogares modernos.",
    },
    specifications: {
      width: "100cm",
      deep: "100cm",
      height: "100cm",
      weight: "100kg",
      color: "negro",
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
      lighting: "LED",
    },
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
    largeDescription: {
      mainDescription:
        "Alacena moderna con espacio para almacenar alimentos y utensilios. Ideal para cocinas pequeñas y medianas.",
      listMaterials: [
        "Módulos personalizables que se adaptan a cualquier espacio",
        "Encimera de material compuesto resistente al calor y a los impactos",
      ],
      focusIn:
        "Alacena moderna con espacio para almacenar alimentos y utensilios. Ideal para cocinas pequeñas y medianas.",
    },
    specifications: {
      width: "100cm",
      deep: "100cm",
      height: "100cm",
      weight: "100kg",
      color: "negro",
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
      lighting: "LED",
    },
  },
  "cat-kitchen-rustic": {
    title: "Cocina Rústica",
    price: 1199.99,
    image: "/image-products/cat-kitchen-rustic.webp",
    rating: 4.5,
    reviewCount: 78,
    href: "/product/kitchen-rustic",
    description:
      "Cocina rústica con diseño tradicional y materiales de alta calidad. Ideal para cocinas grandes y hogares modernos.",
    largeDescription: {
      mainDescription:
        "Cocina rústica con diseño tradicional y materiales de alta calidad. Ideal para cocinas grandes y hogares modernos.", 
      listMaterials: [
        "Módulos personalizables que se adaptan a cualquier espacio",
        "Encimera de material compuesto resistente al calor y a los impactos",
      ],
      focusIn:
        "Cocina rústica con diseño tradicional y materiales de alta calidad. Ideal para cocinas grandes y hogares modernos.",
    },
    specifications: {
      width: "100cm",
      deep: "100cm",
      height: "100cm",
      weight: "100kg",
      color: "negro",
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
      lighting: "LED",
    },
  },
  "cat-kitchen-compact": {
    title: "Cocina Compacta",
    price: 799.99,
    originalPrice: 1499.99,
    image: "/image-products/cat-kitchen-compact.webp",
    rating: 4.3,
    reviewCount: 65,
    href: "/product/kitchen-compact",
    discount: 20, 
    description:
      "Cocina compacta con diseño moderno y espacio eficiente. Ideal para cocinas pequeñas y medianas.",
    largeDescription: {
      mainDescription:
        "Cocina compacta con diseño moderno y espacio eficiente. Ideal para cocinas pequeñas y medianas.",  
      listMaterials: [
        "Módulos personalizables que se adaptan a cualquier espacio",
        "Encimera de material compuesto resistente al calor y a los impactos",
      ],
      focusIn:
        "Cocina compacta con diseño moderno y espacio eficiente. Ideal para cocinas pequeñas y medianas.",
    },
    specifications: {
      width: "100cm",
      deep: "100cm",
      height: "100cm",
      weight: "100kg",
      color: "negro",
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
      lighting: "LED",
    },
  },
  "cat-kitchen-italian": {
    title: "Cocina de Diseño Italiano",
    price: 1499.99,
    image: "/image-products/cat-kitchen-italian.webp",
    rating: 4.9,
    reviewCount: 112,
    href: "/product/kitchen-italian",
    description:
      "Cocina de diseño italiano con acabados de alta calidad y detalles elegantes. Ideal para cocinas grandes y hogares modernos.",
    largeDescription: {
      mainDescription:
        "Cocina de diseño italiano con acabados de alta calidad y detalles elegantes. Ideal para cocinas grandes y hogares modernos.",
      listMaterials: [
        "Módulos personalizables que se adaptan a cualquier espacio",
        "Encimera de material compuesto resistente al calor y a los impactos",
      ],
      focusIn:
        "Cocina de diseño italiano con acabados de alta calidad y detalles elegantes. Ideal para cocinas grandes y hogares modernos.",
    },  
    specifications: {
      width: "100cm",
      deep: "100cm",
      height: "100cm",
      weight: "100kg",
      color: "negro",
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
      lighting: "LED",
    },    
  }, 
  "cat-kitchen-smart": {
    title: "Cocina Inteligente",
    price: 1899.99,
    originalPrice: 2199.99,
    image: "/image-products/cat-kitchen-smart.webp",
    rating: 4.7,
    reviewCount: 48,
    href: "/product/kitchen-smart",
    discount: 14, 
    description:
      "Cocina inteligente con tecnología avanzada y diseño moderno. Ideal para cocinas grandes y hogares modernos.",
    largeDescription: {
      mainDescription:
        "Cocina inteligente con tecnología avanzada y diseño moderno. Ideal para cocinas grandes y hogares modernos.",
      listMaterials: [
        "Módulos personalizables que se adaptan a cualquier espacio",
        "Encimera de material compuesto resistente al calor y a los impactos",
      ],
      focusIn:
        "Cocina inteligente con tecnología avanzada y diseño moderno. Ideal para cocinas grandes y hogares modernos.",
    },
    specifications: {
      width: "100cm",
      deep: "100cm",
      height: "100cm",
      weight: "100kg",
      color: "negro", 
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
      lighting: "LED",
    },
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
    description: "20% de descuento en cocinas",
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
    largeDescription: {
      mainDescription:
        "Sofá esquinero con diseño cómodo y elegante. Ideal para espacios pequeños y hogares modernos.",
      listMaterials: [
        "cogines ergonómicas",
        "tela de alta calidad",
      ],
      focusIn:
        "Sofá esquinero con diseño cómodo y elegante. Ideal para espacios pequeños y hogares modernos.",
    },
    specifications: {
      width: "100cm",
      deep: "100cm",
      height: "100cm",
      weight: "100kg",
      color: "negro",
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
      lighting: "LED",
    },
  },
  "cat-forniture-table-nordic": {
    title: "Mesa de Centro Nórdica",
    price: 199.99,
    originalPrice: 199.99,
    image: "/image-products/cat-forniture-table-nordic.webp",
    rating: 4.5,
    reviewCount: 68,
    href: "/product/nordic-table",
    description:
      "Mesa de centro nórdica con diseño moderno y materiales de alta calidad. Ideal para espacios grandes y hogares modernos.",
    largeDescription: {
      mainDescription:
        "Mesa de centro nórdica con diseño moderno y materiales de alta calidad. Ideal para espacios grandes y hogares modernos.",
      listMaterials: [
        "Silla de cedro",
        "estilo ergonómico",
        "color natural",
      ],
      focusIn:
        "Mesa de centro nórdica con diseño moderno y materiales de alta calidad. Ideal para espacios grandes y hogares modernos.",
    },
    specifications: {
      width: "100cm",
      deep: "100cm",
      height: "100cm",
      weight: "100kg",
      color: "negro",
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
      lighting: "LED",
    },
  },
  "cat-forniture-chair-ergonomic": {
    title: "Silla Ergonómica",
    price: 149.99,
    image: "/image-products/cat-forniture-chair-ergonomic.webp",
    rating: 4.3,
    reviewCount: 92,
    href: "/product/chair",
    description:
      "Silla ergonómica con diseño cómodo y elegante. Ideal para espacios pequeños y hogares modernos.",
    largeDescription: {
      mainDescription:
        "Silla ergonómica con diseño cómodo y elegante. Ideal para espacios pequeños y hogares modernos.",
      listMaterials: [
        "cogines ergonómicas",
        "tela de alta calidad",
      ],
      focusIn:
        "Silla ergonómica con diseño cómodo y elegante. Ideal para espacios pequeños y hogares modernos.",
    },  
    specifications: {
      width: "100cm",
      deep: "100cm",
      height: "100cm",
      weight: "100kg",
      color: "negro",
    },  
  },
  "cat-forniture-dining-set": {
    title: "Juego de Comedor",
    price: 599.99,
    image: "/image-products/cat-forniture-dining-set.webp",
    rating: 4.6,
    reviewCount: 53,
    href: "/product/dining-set",
    description:
      "Juego de comedor con diseño moderno y materiales de alta calidad. Ideal para espacios grandes y hogares modernos.",
    largeDescription: {
      mainDescription:
        "Juego de comedor con diseño moderno y materiales de alta calidad. Ideal para espacios grandes y hogares modernos.",
      listMaterials: [
        "Mesa de comedor",
        "Sillas ergonómicas",
        "Sillón de apoyo",
      ],
      focusIn:
        "Juego de comedor con diseño moderno y materiales de alta calidad. Ideal para espacios grandes y hogares modernos.",
    },
    specifications: {
      width: "100cm",
      deep: "100cm",
      height: "100cm",
      weight: "100kg",
      color: "madera",
      structure: "madera"
    },
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
    largeDescription: {
      mainDescription:
        "Set de herramientas profesional con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la cocina.",
      listMaterials: [
        "juego de herramientas",
        "juego de taladro",
        "juego de martillo",
        "juego de destornillador",
        "juego de sierra",
        "juego de cincel",
      ],
      focusIn:
        "Set de herramientas profesional con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    },
    specifications: {
      weight: "100kg",
      color: "negro",
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
      lighting: "LED",
    },
  },
  "cat-tools-drill": {
    title: "Taladro Inalámbrico Profesional",
    price: 129.99,
    image: "/image-products/cat-tools-drill.webp",
    rating: 4.7,
    reviewCount: 156,
    href: "/product/drill",
    description:
      "Taladro inalámbrico profesional con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    largeDescription: {
      mainDescription:
        "Taladro inalámbrico profesional con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
      listMaterials: [
        "juego de herramientas",
        "juego de taladro",
        "juego de martillo",
        "juego de destornillador",
        "juego de sierra",
      ],
      focusIn:
        "Taladro inalámbrico profesional con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    },
    specifications: {
      weight: "100kg",
      color: "negro",
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
    },
  },
  "cat-tools-circular-saw": {
    title: "Sierra Circular",
    price: 179.99,
    image: "/image-products/cat-tools-circular-saw.webp",
    rating: 4.6,
    reviewCount: 98,
    href: "/product/circular-saw",
    description:
      "Sierra circular con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    largeDescription: {
      mainDescription:
        "Sierra circular con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",  
      listMaterials: [
        "juego de herramientas",
        "juego de taladro",
        "juego de martillo",
        "juego de destornillador",
        "juego de sierra",
      ],
      focusIn:
        "Sierra circular con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    },
    specifications: {
      weight: "100kg",
      color: "negro",
      structure: "madera",
      formEdge: "redondo",
      Worktop: "madera",
      ironwork: "acero",
      modules: "10",
      typeClosed: "cerrado",
      lining: "madera",
      resistant: "madera",
    },
  },
  "cat-tools-orbital-sander": {
    title: "Lijadora Orbital",
    price: 89.99,
    image: "/image-products/cat-tools-orbital-sander.webp",
    rating: 4.5,
    reviewCount: 72,
    href: "/product/orbital-sander",
    description:
      "Lijadora orbital con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    largeDescription: {
      mainDescription:
        "Lijadora orbital con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
      listMaterials: [
        "juego de herramientas",
        "juego de taladro",
        "juego de martillo",
        "juego de destornillador",
        "juego de sierra",  
      ],
      focusIn:
        "Lijadora orbital con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    },
    specifications: {
      weight: "100kg",    
      color: "negro", 
    },
  },
};

export const appliancesProducts: { [key: string]: Producto } = {
  "cat-appliances-refrigerator": {
    title: "Refrigerador Smart",
    price: 899.99,
    originalPrice: 1099.99,
    image: "/image-products/cat-appliances-refrigerator.webp",
    rating: 4.9,
    reviewCount: 215,
    href: "/product/refrigerator",
    discount: 18,
    description:
      "Refrigerador smart con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    largeDescription: {
      mainDescription:
          "Refrigerador smart con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
      listMaterials: [
        "juego de herramientas",
        "juego de taladro",
        "juego de martillo",
        "juego de destornillador",
        "juego de sierra",
      ],
      focusIn:
        "Refrigerador smart con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    },
    specifications: {
      weight: "100kg",
      color: "negro",
    },
  },
  "cat-appliances-washing-machine": {
    title: "Lavadora de Carga Frontal",
    price: 599.99,
    image: "/image-products/cat-appliances-washing-machine.webp",
    rating: 4.7,
    reviewCount: 156,
    href: "/product/washing-machine",
    description:
      "Lavadora de carga frontal con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    largeDescription: {
      mainDescription:
        "Lavadora de carga frontal con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
      listMaterials: [
        "juego de herramientas",
        "juego de taladro",
        "juego de martillo",
        "juego de destornillador",
        "juego de sierra",
      ],
      focusIn:
        "Lavadora de carga frontal con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    },
    specifications: {
      weight: "100kg",
      color: "negro",
    },
  },
  "cat-appliances-electric-oven": {
    title: "Horno Eléctrico",
    price: 349.99,
    originalPrice: 399.99,
    image: "/image-products/cat-appliances-electric-oven.webp",
    rating: 4.6,
    reviewCount: 98,
    href: "/product/electric-oven",
    description:
      "Horno eléctrico con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    largeDescription: {
      mainDescription:
        "Horno eléctrico con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
      listMaterials: [
        "juego de herramientas",
        "juego de taladro",
        "juego de martillo",
        "juego de destornillador",
        "juego de sierra",
      ],
      focusIn:
        "Horno eléctrico con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    },
    specifications: {
      weight: "100kg",
      color: "negro",
    },
  },  
  "cat-appliances-microwave": {
    title: "Microondas Digital",
    price: 129.99,
    image: "/image-products/cat-appliances-microwave.webp",
    rating: 4.5,
    reviewCount: 72,
    href: "/product/microwave",
    description:
      "Microondas digital con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    largeDescription: {
      mainDescription:
        "Microondas digital con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
      listMaterials: [
        "juego de herramientas",
        "juego de taladro",
        "juego de martillo",
        "juego de destornillador",
        "juego de sierra",
      ],
      focusIn:
        "Microondas digital con diseño ergonómico y materiales de alta calidad. Ideal para profesionales y amantes de la contruccion.",
    },
    specifications: {
      weight: "100kg",
      color: "negro",
    },
  },
};
