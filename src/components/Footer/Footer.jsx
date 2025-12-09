import React, { useState } from "react";
import "./Footer.css";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

import NewsletterModal from "../NewsletterModal/NewsletterModal";

function Footer() {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <footer className="footer-container">

                <div className="footer-content">

                    {/* Columna 1: Marca + Newsletter */}
                    <div className="footer-col">
                        <h3 className="footer-title">La Anteojeria</h3>
                        <p className="footer-text">
                            Óptica boutique especializada en estilo, confort y calidad visual.
                        </p>

                        <div className="newsletter-block">
                            <h4>Newsletter</h4>
                            <p>Suscribite para recibir novedades, ofertas y lanzamientos.</p>

                            <button
                                className="footer-newsletter-btn"
                                onClick={() => setModalOpen(true)}
                            >
                                Suscribirme
                            </button>
                        </div>
                    </div>

                    {/* Columna 2: Navegación */}
                    <div className="footer-col">
                        <h4>Navegación</h4>
                        <ul className="footer-links">
                            <li><a href="/categoria/anteojos de sol">Anteojos de Sol</a></li>
                            <li><a href="/categoria/armazones recetados">Armazones Recetados</a></li>
                            <li><a href="/categoria/lentes de contacto">Lentes de Contacto</a></li>
                            <li><a href="/categoria/accesorios">Accesorios</a></li>
                            <li><a href="/categoria/kenta">KENTA</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div className="footer-col">
                        <h4>Contacto</h4>

                        <p><FaWhatsapp /> +54 9 11 6296 6251</p>

                        <p>
                            <MdOutlineEmail /> 
                            <a href="mailto:laanteojeria@gmail.com" style={{ color: "#333", textDecoration: "none" }}>
                                laanteojeria@gmail.com
                            </a>
                        </p>

                        <p><FaMapMarkerAlt /> Amenábar 2484, CABA</p>
                        <p><FaClock /> Lunes a Viernes: 10 a 18 hs</p>

                        <div className="footer-social">

                            {/* INSTAGRAM */}
                            <a 
                                href="https://www.instagram.com/laanteojeria.ar/"
                                className="social-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>

                            {/* WHATSAPP */}
                            <a 
                                href="https://wa.me/5491162966251"
                                className="social-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp />
                            </a>

                            {/* TIKTOK */}
                            <a 
                                href="https://www.tiktok.com/@laanteojeria.ar"
                                className="social-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTiktok />
                            </a>

                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    © {new Date().getFullYear()} La Anteojería — Todos los derechos reservados.
                </div>
            </footer>

            <NewsletterModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
}

export default Footer;
