import { createContext, useContext, useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cargando, setCargando] = useState(true); //por defecto true
    const [error, setError] = useState(null);

    //estado del carrito
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    //FUNCIONES
    const fetchData = async () => { //obtener productos de la API
        try {
            const resp = await fetch('https://dummyjson.com/products?limit=0&skip=10');
            const data = await resp.json();
            setProducts(data.products);
            setCargando(false);
        } catch (err) {
            console.error(err);
            setError(err);
            setCargando(false);
        }
    }
    
    //cargar productos una sola vez
    useEffect(() => {
        fetchData();
    }, []);

    //guardar carrito en localstorage por cada cambio en este
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    //FUNCIONES DEL CARRITO
    // --- AGREGAR AL CARRITO ---
    const addToCart = (product) => {
        setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
            return prev.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
        } else {
            return [...prev, { ...product, quantity: 1 }];
        }
        });

        toast.success(`${product.name} successfully added!`); // --- NOTIFICACIÓN
    };

    //QUITAR DEL CARRITO
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id)); //QUITA TODOS LOS PRODUCTOS DE ESTE TIPO (QUITA TODOS!!! MEJORAR PROXIMAMENTE)
    };

    //LIMPIAR CARRITO
    const clearCart = () => setCart([]);

    // --- RENDER ---
    //SPINNER
    if (cargando) {
        return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" role="status" />
        </div>
        );
    }

    if(error) return <p>Error: {error.message}</p>

    return (
        <CartContext.Provider 
            value={{ cart, products, fetchData, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);