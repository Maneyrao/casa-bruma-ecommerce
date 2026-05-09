import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  buildCartItemKey,
  buildWhatsAppCheckoutUrl,
  calculateLineTotal,
  calculateShipping,
  formatCurrency,
  getDefaultVariant,
} from '../src/app/lib/commerce.js';

describe('commerce helpers', () => {
  it('formats Argentine peso amounts without cents', () => {
    assert.equal(formatCurrency(48900), '$ 48.900');
    assert.equal(formatCurrency(1250000), '$ 1.250.000');
  });

  it('uses the default variant when a product has variants', () => {
    const product = {
      price: 100,
      variants: [
        { id: 'queen', label: 'Queen', price: 130, isDefault: true },
        { id: 'king', label: 'King', price: 160 },
      ],
    };

    assert.deepEqual(getDefaultVariant(product), {
      id: 'queen',
      label: 'Queen',
      price: 130,
      isDefault: true,
    });
  });

  it('calculates pack-aware line totals', () => {
    const item = {
      price: 18000,
      quantity: 3,
      packs: [{ quantity: 3, price: 48000 }],
    };

    assert.equal(calculateLineTotal(item), 48000);
  });

  it('builds stable cart keys per product and variant', () => {
    assert.equal(buildCartItemKey('thermal-shirt', 'xl-negra'), 'thermal-shirt::xl-negra');
    assert.equal(buildCartItemKey('combo-cama'), 'combo-cama::default');
  });

  it('calculates shipping and free shipping threshold', () => {
    assert.deepEqual(calculateShipping(42000), {
      cost: 4500,
      isFree: false,
      remainingForFree: 38000,
      label: 'Envio a coordinar',
    });

    assert.deepEqual(calculateShipping(82000), {
      cost: 0,
      isFree: true,
      remainingForFree: 0,
      label: 'Envio bonificado',
    });
  });

  it('builds a WhatsApp checkout URL with items, variants and total', () => {
    const url = buildWhatsAppCheckoutUrl({
      phone: '54 9 11 3281-3830',
      customer: { name: 'Tomi', locality: 'CABA', delivery: 'Retiro' },
      items: [
        {
          name: 'Remera termica primera piel',
          quantity: 2,
          price: 21900,
          variant: { label: 'L / Negro' },
        },
      ],
      total: 43800,
    });

    assert.equal(url.startsWith('https://wa.me/5491132813830?text='), true);
    const decoded = decodeURIComponent(url.split('text=')[1]);
    assert.match(decoded, /Remera termica primera piel/);
    assert.match(decoded, /L \/ Negro/);
    assert.match(decoded, /\$ 43.800/);
    assert.match(decoded, /Tomi/);
  });
});
