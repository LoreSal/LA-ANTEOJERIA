import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/Logo/logo2.png';
import './Navbar.css';
import { FaShoppingBag, FaUser, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from '../../contexts/AuthContext';
import { useCarrito } from '../../contexts/CarritoContext';

function Navbar() {

    const { isAuthenticated, isAdmin, logout } = useAuth();
    const { carrito } = useCarrito();

    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const totalUnidades = carrito.reduce(
        (sum, item) => sum + (item.cantidad || 1),
        0
    );

    const manejarSubmit = (e) => {
        e.preventDefault();
        if (busqueda.trim() !== "") {
            navigate(`/buscar?q=${encodeURIComponent(busqueda)}`);
            setBusqueda("");
            setMenuOpen(false);
        }
    };

    return (
        <nav className="navbar-container">

            {/* FILA SUPERIOR */}
            <div className="navbar-top-ml">

                {/* LOGO */}
                <Link to="/" className="navbar-logo-link">
                    <img
                        src={logo}
                        alt="Logo La Anteojería"
                        className="navbar-logo-img"
                    />
                </Link>

                {/* BUSCADOR */}
                <form className="navbar-search-ml" onSubmit={manejarSubmit}>
                    <input
                        type="text"
                        placeholder="Buscar productos, marcas y más..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <button type="submit" className="search-btn-ml">
                        🔍
                    </button>
                </form>

                {/* ICONOS DERECHA */}
                <div className="navbar-icons-ml">
                    {isAuthenticated ? (
                        <button onClick={logout} className="icon-btn">
                            <FaSignOutAlt size={18} />
                        </button>
                    ) : (
                        <Link to="/login" className="icon-btn">
                            <FaUser size={20} />
                        </Link>
                    )}

                    <Link to="/carrito" className="icon-btn cart-icon-ml">
                        <FaShoppingBag size={22} />
                        {totalUnidades > 0 && (
                            <span className="cart-count">{totalUnidades}</span>
                        )}
                    </Link>

                    <button
                        className="hamburger-btn-ml"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>
            </div>

            {/* 🟨 FILA DE CATEGORÍAS */}
            <ul className={`navbar-categorias-ml ${menuOpen ? "open" : ""}`}>

                <li><Link to="/categoria/anteojos%20de%20sol">Anteojos de Sol</Link></li>
                <li><Link to="/categoria/armazones%20recetados">Armazones Recetados</Link></li>
                <li><Link to="/categoria/lentes%20de%20contacto">Lentes de Contacto</Link></li>
                <li><Link to="/categoria/accesorios">Accesorios</Link></li>
                <li><Link to="/categoria/kenta">KENTA</Link></li>

                {isAuthenticated && isAdmin && (
                    <li><Link to="/admin">Admin Panel</Link></li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
