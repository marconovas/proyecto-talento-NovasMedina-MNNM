import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';
import { CartProvider } from './Context/CartProvider.jsx';
import { ProductsProvider } from './Context/MockApiContext.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ProductsProvider>
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </ProductsProvider>
    </HashRouter>
  </StrictMode>,
)
