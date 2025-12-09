import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Navbar from './components/Navbar/Navbar';
import Productos from './components/Productos/Productos';
import ProductoDetalle from './components/Productos/ProductoDetalle';
import Footer from './components/Footer/Footer';
import CarritoCompras from './pages/CarritoCompras';
import Login from './pages/Login';
import RutaProtegida from './components/RutaProtegida/RutaProtegida';
import Reseñas from './components/Reseñas/Reseñas';
import WhatsappBoton from './components/WhatsappBoton/WhatsappBoton';
import { useAuth } from "./contexts/AuthContext";
import { useCarrito } from "./contexts/CarritoContext";
import CrearProducto from "./pages/CrearProducto";
import EditarProducto from "./pages/EditarProducto";
import AdminProductos from "./pages/AdminProductos";
import NewsletterModal from "./components/NewsletterModal/NewsletterModal";
import ProductosCategoria from './components/Productos/ProductosCategoria';
import RutaProtegidaAdmin from "./components/RutaProtegida/RutaProtegidaAdmin";
import Buscar from './components/Buscar/Buscar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {

    const navigate = useNavigate();

    const { isAuthenticated, login, logout } = useAuth();
    const { carrito, eliminarDelCarrito, agregarAlCarrito } = useCarrito();

    const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
    const openNewsletterModal = () => setIsNewsletterOpen(true);
    const closeNewsletterModal = () => setIsNewsletterOpen(false);

    return (
        <div>

            <Navbar
                cantidadItems={carrito.length}
                isAuthenticated={isAuthenticated}
                logout={() => {
                    logout();
                    navigate('/');
                }}
            />

            <Routes>

                {/* PÁGINAS GENERALES */}
                <Route path='/' element={<Inicio />} />

                {/* LISTADO GENERAL DE PRODUCTOS */}
                <Route
                    path='/productos'
                    element={<Productos agregarAlCarrito={agregarAlCarrito} />}
                />

                {/* DETALLE DE PRODUCTO */}
                <Route path='/producto/:id' element={<ProductoDetalle />} />

                {/* PRODUCTOS POR CATEGORÍA */}
                <Route path="/categoria/:categoria" element={<ProductosCategoria />} />

                {/* BUSCADOR  */}
                <Route path="/buscar" element={<Buscar />} />  

                {/* LOGIN */}
                <Route
                    path='/login'
                    element={
                        <Login login={() => {
                            login();
                            navigate('/carrito');
                        }} />
                    }
                />

                {/* CARRITO PROTEGIDO */}
                <Route
                    path='/carrito'
                    element={
                        <RutaProtegida isAuthenticated={isAuthenticated}>
                            <CarritoCompras
                                carrito={carrito}
                                eliminarDelCarrito={eliminarDelCarrito}
                            />
                        </RutaProtegida>
                    }
                />

                {/* CRUD ADMIN - SOLO ADMINISTRADORES */}
                <Route
                    path='/admin'
                    element={
                        <RutaProtegidaAdmin>
                            <AdminProductos />
                        </RutaProtegidaAdmin>
                    }
                />

                <Route
                    path='/crear'
                    element={
                        <RutaProtegidaAdmin>
                            <CrearProducto />
                        </RutaProtegidaAdmin>
                    }
                />

                <Route
                    path='/editar/:id'
                    element={
                        <RutaProtegidaAdmin>
                            <EditarProducto />
                        </RutaProtegidaAdmin>
                    }
                />
            </Routes>

            <WhatsappBoton />
            <NewsletterModal isOpen={isNewsletterOpen} onClose={closeNewsletterModal} />
            <ScrollToTop />
            <Footer openNewsletterModal={openNewsletterModal} />
        </div>
    );
}

export default App;
