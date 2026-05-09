import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './app/routes';
import { CartProvider } from './app/context/CartContext';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  </BrowserRouter>
);
