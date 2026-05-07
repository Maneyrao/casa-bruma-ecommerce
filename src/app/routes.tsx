import { createBrowserRouter } from 'react-router';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccess from './pages/OrderSuccess';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'product/:slug',
        Component: ProductPage,
      },
      {
        path: 'category/:category',
        Component: CategoryPage,
      },
      {
        path: 'cart',
        Component: CartPage,
      },
      {
        path: 'checkout',
        Component: CheckoutPage,
      },
      {
        path: 'order-success',
        Component: OrderSuccess,
      },
    ],
  },
]);
