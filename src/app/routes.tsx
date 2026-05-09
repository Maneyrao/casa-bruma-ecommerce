import { Route, Routes } from 'react-router';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccess from './pages/OrderSuccess';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="product/:slug" element={<ProductPage />} />
      <Route path="category/:category" element={<CategoryPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="order-success" element={<OrderSuccess />} />
    </Route>
  </Routes>
);
