import { Routes, Route } from "react-router-dom";
import Products from "./Pages/Products.jsx";
import Detail from "./Pages/Detail.jsx"
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import LogIn from "./Pages/LogIn.jsx";
import Admin from './Pages/Admin.jsx';
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Cart from "./Pages/Cart.jsx";
import AddProduct from "./Components/AddProduct.jsx";
import EditProduct from "./Components/EditProduct.jsx";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/admin/edit/:id" element={<EditProduct />} />
        
        {/* PROTECTED ROUTES */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }/>
      </Routes>
  )
}

export default App
