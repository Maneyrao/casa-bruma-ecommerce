# Casa Bruma Ecommerce

Ecommerce para blanqueria, remeras termicas, frazadas, almohadas y combos.
El flujo actual no cobra online: arma carrito, confirma datos y redirige a WhatsApp con el resumen del pedido.

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Tests

```bash
pnpm test
```

## Build

```bash
pnpm build
```

## Configuracion

El numero de WhatsApp esta centralizado en:

```
src/app/lib/commerce.js
```

Por ahora usa un placeholder:

```js
export const WHATSAPP_PHONE = '5490000000000';
```

Cuando este el numero real, reemplazarlo ahi y redeployar.

## Mercado Pago

La UI y los totales quedan preparados para sumar pago online en una fase futura.
Hoy el checkout coordina disponibilidad, envio y forma de pago por WhatsApp.
