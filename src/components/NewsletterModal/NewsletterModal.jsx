import React, { useEffect, useState } from "react";
import "./NewsletterModal.css";

function NewsletterModal({ isOpen, onClose }) {
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        const handleEsc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleEsc);

        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setEmail("");
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubscribe = () => {
        if (!email.trim()) return;
        setIsSubmitted(true);
    };

    return (
        <div className="nm-overlay" onClick={onClose}>
            <div
                className="nm-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="nm-close" onClick={onClose}>
                    &times;
                </button>

                {!isSubmitted ? (
                    <>
                        <h2 className="nm-title">¡Sumate a nuestro Newsletter!</h2>
                        <p className="nm-text">
                            Recibí ofertas exclusivas, novedades y lanzamientos VIP de La Anteojería.
                        </p>

                        <input
                            type="email"
                            placeholder="Tu email..."
                            className="nm-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button 
                            className="nm-btn"
                            onClick={handleSubscribe}
                        >
                            Suscribirme
                        </button>

                        <small className="nm-legal">
                            Tranquila/o, no enviamos spam 🖤
                        </small>
                    </>
                ) : (
                    <>
                        <h2 className="nm-title">¡Gracias por suscribirte! 🥳</h2>
                        <p className="nm-text">
                            Ya estás en nuestra lista VIP.  
                            Pronto vas a recibir novedades, promos y lanzamientos exclusivos.
                        </p>

                        <button 
                            className="nm-btn"
                            onClick={onClose}
                        >
                            Cerrar
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default NewsletterModal;
