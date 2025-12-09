import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { useCarrito } from "../contexts/CarritoContext";
import "../assets/css/carrito/CarritoCompras.css";

const CarritoCompras = () => {
    const { carrito, vaciarCarrito, eliminarItem, total, aumentarCantidad, disminuirCantidad } = useCarrito();

    const [showModal, setShowModal] = React.useState(false);

    const handlePagar = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        vaciarCarrito(); // opcional
    };

    return (
        <Container className="carrito-container">
            <h2 className="carrito-titulo">🛍️ Tu Carrito</h2>

            {carrito.length === 0 ? (
                <p className="carrito-mensaje-vacio">
                    ✨ Aún no agregaste anteojos a tu carrito ✨
                </p>
            ) : (
                <>
                    <div className="carrito-lista">
                        {carrito.map((item) => (
                            <Card key={item.id} className="carrito-item mb-3">
                                <Card.Body>
                                    <Row className="align-items-center">
                                        
                                        {/* Imagen del producto */}
                                        <Col md={2} className="text-center">
                                            <img
                                                src={item.imagen}
                                                alt={item.nombre}
                                                className="carrito-img"
                                            />
                                        </Col>

                                        <Col md={3}>
                                            <Card.Title className="carrito-item-titulo">
                                                {item.nombre}
                                            </Card.Title>
                                            <Card.Text className="precio-unitario">
                                                Precio: ${item.precio}
                                            </Card.Text>
                                        </Col>

                                        {/* Control de cantidad */}
                                        <Col md={3} className="d-flex align-items-center gap-2">
                                            <button className="btn-cantidad" onClick={() => disminuirCantidad(item.id)}>
                                                -
                                            </button>
                                            <span>{item.cantidad}</span>
                                            <button className="btn-cantidad" onClick={() => aumentarCantidad(item.id)}>
                                                +
                                            </button>
                                        </Col>

                                        {/* Subtotal y eliminar */}
                                        <Col md={4} className="text-end">
                                            <h5 className="item-subtotal">
                                                Subtotal: ${item.precio * item.cantidad}
                                            </h5>
                                            <button
                                                className="btn-eliminar"
                                                onClick={() => eliminarItem(item.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </Col>

                                    </Row>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>

                    {/* TOTAL */}
                    <div className="carrito-total-card">
                        <h3 className="carrito-total">Total: ${total}</h3>

                        <div className="d-flex gap-3">
                            <button className="btn-vaciar" onClick={vaciarCarrito}>
                                Vaciar carrito
                            </button>

                            <button className="btn-pagar" onClick={handlePagar}>
                                Finalizar Compra ✨
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* MODAL BOUTIQUE */}
            {showModal && (
                <div className="nm-overlay" onClick={handleCloseModal}>
                    <div className="nm-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="nm-close" onClick={handleCloseModal}>
                            &times;
                        </button>

                        <h2 className="nm-title">¡Gracias por tu compra! 🥳</h2>
                        <p className="nm-text">
                            Tu pedido fue recibido correctamente. Pronto te contactaremos 👓💚
                        </p>

                        <button className="nm-btn" onClick={handleCloseModal}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

        </Container>
    );
};

export default CarritoCompras;
