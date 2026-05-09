export type ProductCategory = 'termicas' | 'sabanas' | 'almohadas' | 'frazadas' | 'combos';
export type CategorySlug = ProductCategory | 'blanqueria';

export interface ProductVariant {
  id: string;
  label: string;
  price: number;
  stock: number;
  isDefault?: boolean;
  detail?: string;
}

export interface Pack {
  quantity: number;
  price: number;
  label?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  image: string;
  shortDescription: string;
  description: string;
  material: string;
  care: string;
  benefits: string[];
  badges: string[];
  variants?: ProductVariant[];
  packs?: Pack[];
  isBestSeller?: boolean;
  isKit?: boolean;
  featured?: boolean;
  relatedProducts?: string[];
  suggestion?: string;
}

export const categories: Record<CategorySlug, { title: string; description: string; short: string }> = {
  blanqueria: {
    title: 'Blanqueria',
    short: 'Cama completa',
    description: 'Sabanas, almohadas, frazadas y mantas para armar una cama mas suave, calida y facil de comprar.',
  },
  termicas: {
    title: 'Remeras termicas',
    short: 'Abrigo liviano',
    description: 'Primera piel, cuello redondo y capas termicas para salir o dormir sin pasar frio.',
  },
  sabanas: {
    title: 'Sabanas',
    short: 'Cama suave',
    description: 'Juegos de sabanas por plaza, pensados para renovar la cama sin perder practicidad.',
  },
  almohadas: {
    title: 'Almohadas',
    short: 'Descanso real',
    description: 'Almohadas mullidas, firmes y faciles de combinar con fundas y juegos de cama.',
  },
  frazadas: {
    title: 'Frazadas y mantas',
    short: 'Calor de noche',
    description: 'Textiles abrigados para sumar capas, textura y temperatura a la cama.',
  },
  combos: {
    title: 'Combos',
    short: 'Compra resuelta',
    description: 'Selecciones listas para cama, invierno y regalos utiles.',
  },
};

export const products: Product[] = [
  {
    id: 'combo-sueno-calido',
    name: 'Combo sueno calido',
    slug: 'combo-sueno-calido',
    category: 'combos',
    price: 48900,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=82',
    shortDescription: 'Frazada soft, almohada y sabana ajustable para resolver la cama entera.',
    description: 'Un combo pensado para convertir una cama fria en una cama lista para invierno. Ideal si queres comprar rapido y no olvidarte de nada.',
    material: 'Microfibra soft, relleno siliconado y algodon mixto.',
    care: 'Lavar con agua fria, secado a baja temperatura y evitar lavandina.',
    benefits: ['Compra guiada', 'Ahorro por combo', 'Texturas suaves', 'Listo para regalar'],
    badges: ['Combo ahorro', 'Invierno', 'Mas elegido'],
    variants: [
      { id: '1-plaza', label: '1 plaza', price: 48900, stock: 12, isDefault: true },
      { id: '2-plazas', label: '2 plazas', price: 62900, stock: 9 },
      { id: 'queen', label: 'Queen', price: 72900, stock: 6 },
    ],
    isKit: true,
    isBestSeller: true,
    featured: true,
    relatedProducts: ['frazada-sherpa-nube', 'almohada-hotel-soft', 'sabana-ajustable-algodon'],
    suggestion: 'Sumale una remera termica para cerrar el kit noche fria.',
  },
  {
    id: 'kit-noche-termica',
    name: 'Kit noche termica',
    slug: 'kit-noche-termica',
    category: 'combos',
    price: 38900,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=82',
    shortDescription: 'Remera termica + frazada liviana para dormir o levantarte abrigado.',
    description: 'La opcion directa para quienes sienten frio de noche: primera piel suave y una capa de cama liviana con tacto abrigado.',
    material: 'Polialgodon termico y microfibra soft.',
    care: 'Lavar del reves, no retorcer y secar extendido.',
    benefits: ['Primera piel', 'No pica', 'Ideal entretiempo e invierno', 'Pack sugerido'],
    badges: ['Noche fria', 'Pack termico'],
    variants: [
      { id: 's', label: 'Talle S', price: 38900, stock: 10 },
      { id: 'm', label: 'Talle M', price: 38900, stock: 14, isDefault: true },
      { id: 'l', label: 'Talle L', price: 38900, stock: 12 },
      { id: 'xl', label: 'Talle XL', price: 40900, stock: 8 },
    ],
    isKit: true,
    featured: true,
    relatedProducts: ['remera-termica-primera-piel', 'frazada-sherpa-nube'],
    suggestion: 'Llevando dos remeras termicas tenes una lista para lavar y otra para usar.',
  },
  {
    id: 'remera-termica-primera-piel',
    name: 'Remera termica primera piel',
    slug: 'remera-termica-primera-piel',
    category: 'termicas',
    price: 21900,
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1200&q=82',
    shortDescription: 'Capa liviana, elastizada y suave para usar debajo de todo.',
    description: 'Remera termica de uso diario: acompana el cuerpo, conserva temperatura y no suma volumen debajo de buzos, camisas o pijamas.',
    material: 'Polialgodon elastizado termico.',
    care: 'Lavar con colores similares, no planchar sobre estampas y evitar secadora fuerte.',
    benefits: ['Abrigo sin volumen', 'Tacto suave', 'Respirable', 'Uso diario'],
    badges: ['Talles S-XXL', 'Primera piel', 'Best seller'],
    variants: [
      { id: 's-negro', label: 'S / Negro', price: 21900, stock: 8 },
      { id: 'm-negro', label: 'M / Negro', price: 21900, stock: 15, isDefault: true },
      { id: 'l-negro', label: 'L / Negro', price: 21900, stock: 12 },
      { id: 'xl-negro', label: 'XL / Negro', price: 23900, stock: 8 },
      { id: 'xxl-negro', label: 'XXL / Negro', price: 24900, stock: 5 },
    ],
    packs: [
      { quantity: 2, price: 39900, label: 'Pack x2' },
      { quantity: 3, price: 57900, label: 'Pack x3' },
    ],
    isBestSeller: true,
    relatedProducts: ['kit-noche-termica', 'frazada-sherpa-nube'],
    suggestion: 'Si dudas entre talles, elegi uno mas para usarla como capa de dormir.',
  },
  {
    id: 'frazada-sherpa-nube',
    name: 'Frazada sherpa nube',
    slug: 'frazada-sherpa-nube',
    category: 'frazadas',
    price: 32900,
    image: 'https://images.unsplash.com/photo-1616627988081-0f3f3f63d6a1?auto=format&fit=crop&w=1200&q=82',
    shortDescription: 'Frazada abrigada con textura mullida y reverso suave.',
    description: 'Pensada para sumar calor sin que la cama se sienta pesada. Va sola en entretiempo o como capa extra en invierno.',
    material: 'Microfibra sherpa doble faz.',
    care: 'Lavar en ciclo delicado y secar extendida para conservar el volumen.',
    benefits: ['Muy abrigada', 'Tacto mullido', 'No pesa', 'Ideal sofa o cama'],
    badges: ['Sherpa', 'Abrigo alto'],
    variants: [
      { id: '1-plaza-gris', label: '1 plaza / Gris', price: 32900, stock: 9 },
      { id: '2-plazas-gris', label: '2 plazas / Gris', price: 46900, stock: 8, isDefault: true },
      { id: 'queen-beige', label: 'Queen / Beige', price: 54900, stock: 6 },
    ],
    isBestSeller: true,
    relatedProducts: ['combo-sueno-calido', 'almohada-hotel-soft'],
  },
  {
    id: 'sabana-ajustable-algodon',
    name: 'Sabana ajustable algodon',
    slug: 'sabana-ajustable-algodon',
    category: 'sabanas',
    price: 18900,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=82',
    shortDescription: 'Ajuste firme, tacto fresco y colores faciles de combinar.',
    description: 'Una base simple para renovar la cama: elastico perimetral, caida prolija y tacto agradable para uso diario.',
    material: 'Algodon mixto de facil lavado.',
    care: 'Lavar antes del primer uso, no mezclar con prendas con cierre o velcro.',
    benefits: ['No se sale facil', 'Secado rapido', 'Tacto suave', 'Colores neutros'],
    badges: ['Algodon mixto', 'Uso diario'],
    variants: [
      { id: '1-plaza-blanco', label: '1 plaza / Blanco', price: 18900, stock: 13 },
      { id: '2-plazas-blanco', label: '2 plazas / Blanco', price: 24900, stock: 10, isDefault: true },
      { id: 'queen-vison', label: 'Queen / Vison', price: 29900, stock: 7 },
      { id: 'king-vison', label: 'King / Vison', price: 34900, stock: 5 },
    ],
    relatedProducts: ['combo-sueno-calido', 'almohada-hotel-soft'],
  },
  {
    id: 'almohada-hotel-soft',
    name: 'Almohada hotel soft',
    slug: 'almohada-hotel-soft',
    category: 'almohadas',
    price: 16900,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=82',
    shortDescription: 'Mullida, liviana y con soporte medio para descanso diario.',
    description: 'Almohada de soporte medio, facil de combinar y pensada para quienes buscan una sensacion tipo hotel en casa.',
    material: 'Relleno siliconado premium y funda de microfibra.',
    care: 'Airear semanalmente y lavar funda protectora por separado.',
    benefits: ['Soporte medio', 'Mullida', 'Hipoalergenica', 'Sensacion hotel'],
    badges: ['Hotel soft', 'Hipoalergenica'],
    variants: [
      { id: 'standard', label: 'Standard 50x70', price: 16900, stock: 20, isDefault: true },
      { id: 'king', label: 'King 50x90', price: 21900, stock: 11 },
    ],
    packs: [{ quantity: 2, price: 30900, label: 'Par ahorro' }],
    isBestSeller: true,
    relatedProducts: ['sabana-ajustable-algodon', 'combo-sueno-calido'],
  },
  {
    id: 'juego-sabanas-bruma',
    name: 'Juego de sabanas Bruma',
    slug: 'juego-sabanas-bruma',
    category: 'sabanas',
    price: 38900,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=82',
    shortDescription: 'Juego completo con bajera, sabana superior y fundas.',
    description: 'Un juego completo para que la cama se vea prolija y se sienta suave desde el primer uso.',
    material: 'Algodon mixto peinado.',
    care: 'Lavar en agua fria y doblar apenas seco para evitar marcas profundas.',
    benefits: ['Juego completo', 'Colores neutros', 'Tacto suave', 'Facil de lavar'],
    badges: ['Juego completo', 'Cama lista'],
    variants: [
      { id: '2-plazas', label: '2 plazas', price: 38900, stock: 9, isDefault: true },
      { id: 'queen', label: 'Queen', price: 44900, stock: 7 },
      { id: 'king', label: 'King', price: 49900, stock: 5 },
    ],
    relatedProducts: ['almohada-hotel-soft', 'frazada-sherpa-nube'],
  },
  {
    id: 'manta-liviana-sofa-cama',
    name: 'Manta liviana sofa/cama',
    slug: 'manta-liviana-sofa-cama',
    category: 'frazadas',
    price: 19900,
    image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=82',
    shortDescription: 'Manta de apoyo para siesta, sillon o pie de cama.',
    description: 'Una capa extra para tener a mano. Decora, abriga y no ocupa lugar.',
    material: 'Tejido soft touch.',
    care: 'Lavar en ciclo suave y no usar blanqueadores.',
    benefits: ['Liviana', 'Decorativa', 'Multiuso', 'Ideal regalo'],
    badges: ['Soft touch', 'Regalo util'],
    variants: [
      { id: 'beige', label: 'Beige', price: 19900, stock: 14, isDefault: true },
      { id: 'gris', label: 'Gris', price: 19900, stock: 12 },
      { id: 'verde-salvia', label: 'Verde salvia', price: 20900, stock: 8 },
    ],
    relatedProducts: ['combo-sueno-calido', 'almohada-hotel-soft'],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'blanqueria') {
    return products.filter((p) => ['sabanas', 'almohadas', 'frazadas'].includes(p.category));
  }

  return products.filter((p) => p.category === category);
};

export const getBestSellers = (): Product[] => {
  return products.filter((p) => p.isBestSeller);
};

export const getKits = (): Product[] => {
  return products.filter((p) => p.isKit);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured || p.isBestSeller).slice(0, 6);
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = products.find((p) => p.id === productId);
  if (!product || !product.relatedProducts) return [];

  return product.relatedProducts
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);
};
