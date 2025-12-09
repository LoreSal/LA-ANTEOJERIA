import React, { useEffect, useState } from 'react';
import { FaShippingFast, FaTools, FaUserCheck } from "react-icons/fa";
import { LuTruck, LuCog, LuUserCheck } from "react-icons/lu";
import { Link } from 'react-router-dom';
import '../assets/css/inicio/inicio.css';
import modeloImagen from '../assets/img/Fondo/modelo.webp';
import logoVulk from '../assets/img/Marcas/vulk.png';
import logoRusty from '../assets/img/Marcas/rusty.png';
import logoAcuve from '../assets/img/Marcas/acuve.png';
import logoOakley from '../assets/img/Marcas/oakley.png';
import logoArmani from '../assets/img/Marcas/armani.png';
import logoPrada from '../assets/img/Marcas/prada.png';
import logoMood from '../assets/img/Marcas/mood.png';
import logoBurberry from '../assets/img/Marcas/burberry.png';
import logoKenta from '../assets/img/Marcas/kenta.jpg';
import logoVogue from '../assets/img/Marcas/vogue.png';
import logoWink from '../assets/img/Marcas/wink.png';
import Reseñas from '../components/Reseñas/Reseñas';
import { Helmet } from "react-helmet-async";
import { i } from 'framer-motion/client';
import ctaNueva from '../assets/img/Fondo/Vidriera.webp';


function Inicio() {
    const [productosDestacados, setProductosDestacados] = useState([]);
    const API_URL = "https://6927a7d6b35b4ffc50129e0e.mockapi.io/api/producto1";

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                const random = data.sort(() => Math.random() - 0.5).slice(0, 4);
                setProductosDestacados(random);
            } catch (error) {
                console.error("Error cargando productos:", error);
            }
        };
        fetchProductos();
    }, []);

    return (
        <>
            <Helmet>
                <title>La Anteojería — Inicio</title>
                <meta
                    name="description"
                    content="Óptica boutique especializada en anteojos de sol, armazones graduados y lentes de contacto. Descubrí la colección KENTA y las mejores marcas internacionales."
                />
            </Helmet>

            {/* ⭐ BANNER KENTA */}
            <header className="kenta-hero">
                <img src={modeloImagen} alt="Colección Kenta de La Anteojería" className="kenta-img"/>
                <div className="kenta-overlay"></div>
                <div className="kenta-text">
                    <h2 className="kenta-title">Colección Exclusiva</h2>
                    <h1 className="kenta-brand">KENTA</h1>
                    <p className="kenta-desc">Diseño moderno, comodidad y estilo premium.</p>
                    <Link to="/categoria/kenta" className="kenta-btn">Ver Colección</Link>
                </div>
            </header>

            {/* ⭐ SOBRE NOSOTROS */}
            <section className="sobre-nosotros">
                <h2>Sobre Nosotros</h2>
                <p>
                    En La Anteojería nos apasiona ofrecer lentes de alta calidad y marcas reconocidas. 
                    Nuestro objetivo es que encuentres el estilo perfecto y la comodidad que tus ojos merecen.
                </p>
            </section>

            

            {/* ⭐ PRODUCTOS DESTACADOS */}
            <section className="destacados-container">
                <h2 className="destacados-title">Productos Destacados</h2>
                <div className="destacados-grid">
                    {productosDestacados.length > 0 ? (
                        productosDestacados.map(producto => (
                            <div key={producto.id} className="destacado-card">
                                <img src={producto.imagen} alt={producto.nombre} className="destacado-img"/>
                                <h4 className="destacado-nombre">{producto.nombre}</h4>
                                <p className="destacado-marca">{producto.marca}</p>
                                <p className="destacado-precio">${producto.precio}</p>
                                <Link to={`/producto/${producto.id}`} className="ver-detalles-btn">
  Ver Detalles
</Link>

                                </div>
                        ))
                    ) : (
                        <p className="loading-text">Cargando productos...</p>
                    )}
                </div>
            </section>

            {/* ⭐ BENEFICIOS */}
 <section className="beneficios">
    <div className="beneficio-card">
        <LuTruck className="beneficio-icon" />
        <h3>Entrega Rápida</h3>
        <p>Recibí tus lentes en tiempo récord con nuestro servicio ágil y confiable.</p>
    </div>

    <div className="beneficio-card">
        <LuCog className="beneficio-icon" />
        <h3>Lentes a Medida</h3>
        <p>Adaptamos cada producto a tus necesidades visuales y estilo personal.</p>
    </div>

    <div className="beneficio-card">
        <LuUserCheck className="beneficio-icon" />
        <h3>Asesoramiento Profesional</h3>
        <p>Nuestro equipo te ayuda a elegir los lentes ideales para vos.</p>
    </div>
</section>



            {/* ⭐ MARCAS */}
            <section className="marcas">
                <h2>Nuestras Marcas</h2>
                <div className="lista-marcas">
                    <img src={logoVulk} alt="Vulk Eyewear" />
                    <img src={logoRusty} alt="Rusty Eyewear" />
                    <img src={logoAcuve} alt="Acuve Marca" />
                    <img src={logoOakley} alt="Oakley" />
                    <img src={logoArmani} alt="Armani" />
                    <img src={logoPrada} alt="Prada" />
                    <img src={logoBurberry} alt="Burberry" />
                    <img src={logoMood} alt="Mood"/>
                    <img src={logoKenta} alt="Kenta" />
                    <img src={logoVogue} alt="Vogue" />
                    <img src={logoWink} alt="Wink" />

                </div>
            </section>

            {/* ⭐ RESEÑAS */}
            <Reseñas />

           {/* ⭐ CTA FINAL */}
<section className="cta-final">
  <img src={ctaNueva} alt="Colección completa" className="cta-img" />
  <div className="cta-overlay"></div>
  <div className="cta-text">
    <h2>Explorá nuestra colección completa</h2>
    <Link to="/productos" className="cta-btn">Ver Productos</Link>
  </div>
</section>

        </>
    );
}

export default Inicio;
