export const STORE_NAME = 'Casa Bruma';
export const WHATSAPP_PHONE = '5490000000000';
export const FREE_SHIPPING_THRESHOLD = 80000;
export const STANDARD_SHIPPING_COST = 4500;

export const formatCurrency = (amount) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  })
    .format(Math.round(Number(amount) || 0))
    .replace(/\u00a0/g, ' ');

export const normalizePhone = (phone) => String(phone || '').replace(/\D/g, '');

export const getDefaultVariant = (product) => {
  const variants = product?.variants || [];
  if (!variants.length) return undefined;
  return variants.find((variant) => variant.isDefault) || variants[0];
};

export const getDisplayPrice = (product, variant) => {
  const selectedVariant = variant || getDefaultVariant(product);
  return selectedVariant?.price ?? product?.price ?? 0;
};

export const buildCartItemKey = (productId, variantId) => `${productId}::${variantId || 'default'}`;

export const calculatePackPrice = (packs, quantity, regularPrice) => {
  const safeQuantity = Math.max(1, Number(quantity) || 1);
  const safePrice = Number(regularPrice) || 0;
  if (!packs || packs.length === 0) return safePrice * safeQuantity;

  const sortedPacks = [...packs].sort((a, b) => b.quantity - a.quantity);
  let remaining = safeQuantity;
  let total = 0;

  for (const pack of sortedPacks) {
    const packQuantity = Number(pack.quantity) || 0;
    const packPrice = Number(pack.price) || 0;
    if (packQuantity <= 0) continue;
    const packCount = Math.floor(remaining / packQuantity);
    total += packCount * packPrice;
    remaining -= packCount * packQuantity;
  }

  return total + remaining * safePrice;
};

export const calculateLineTotal = (item) =>
  calculatePackPrice(item?.packs, item?.quantity, item?.price);

export const calculateCartSubtotal = (items) =>
  (items || []).reduce((total, item) => total + calculateLineTotal(item), 0);

export const calculateShipping = (subtotal) => {
  const amount = Number(subtotal) || 0;
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - amount, 0);

  return {
    cost: remaining === 0 ? 0 : STANDARD_SHIPPING_COST,
    isFree: remaining === 0,
    remainingForFree: remaining,
    label: remaining === 0 ? 'Envio bonificado' : 'Envio a coordinar',
  };
};

export const buildWhatsAppMessage = ({ customer = {}, items = [], total = 0 }) => {
  const lines = [
    `Hola ${STORE_NAME}! Quiero consultar por este pedido:`,
    '',
    ...items.map((item) => {
      const variantText = item.variant?.label ? ` (${item.variant.label})` : '';
      return `- ${item.name}${variantText} x${item.quantity}: ${formatCurrency(calculateLineTotal(item))}`;
    }),
    '',
    `Total estimado: ${formatCurrency(total)}`,
  ];

  if (customer.name || customer.locality || customer.delivery || customer.notes) {
    lines.push('', 'Datos para coordinar:');
    if (customer.name) lines.push(`Nombre: ${customer.name}`);
    if (customer.locality) lines.push(`Zona/localidad: ${customer.locality}`);
    if (customer.delivery) lines.push(`Entrega: ${customer.delivery}`);
    if (customer.notes) lines.push(`Notas: ${customer.notes}`);
  }

  lines.push('', 'Me pasan disponibilidad y formas de pago?');
  return lines.join('\n');
};

export const buildWhatsAppCheckoutUrl = ({ phone = WHATSAPP_PHONE, customer, items, total }) => {
  const normalizedPhone = normalizePhone(phone);
  const message = buildWhatsAppMessage({ customer, items, total });
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
};
