import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductosCategoria.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useCarrito } from "../../contexts/CarritoContext";

export default function ProductosCategoria() {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://6927a7d6b35b4ffc50129e0e.mockapi.io/api/producto1";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Error en la petición");
        return res.json();
      })
      .then((data) => {
        const catNorm = categoria.toLowerCase().trim();
        const filtrados = data.filter(
          (p) => p.categoria.toLowerCase().trim() === catNorm
        );

        setProductos(filtrados);
        setCargando(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los productos.");
        setCargando(false);
      });
  }, [categoria]);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container className="categoria-container">

      <h2 className="categoria-titulo text-capitalize">
        {decodeURIComponent(categoria)}
      </h2>

      {productos.length === 0 && (
        <p>No hay productos disponibles en esta categoría.</p>
      )}

      <Row>
        {productos.map((producto) => (
          <Col key={producto.id} xs={12} sm={6} md={4} lg={3} className="categoria-col">
            
            <Card className="categoria-card h-100">

              {/* Imagen */}
              <Card.Img
                variant="top"
                src={producto.imagen}
                alt={producto.nombre}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/fallback.png";
                }}
              />

              <Card.Body className="d-flex flex-column">

                <Card.Title className="card-title">
                  {producto.nombre}
                </Card.Title>

                <Card.Text className="card-text">
                  {producto.descripcion}
                </Card.Text>

                <span className="precio">
                  {Number(producto.precio).toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                </span>

                <small className="text-muted mb-2">{producto.marca}</small>

                {/* BOTÓN AGREGAR AL CARRITO */}
                <Button
                  className="custom-btn mb-2"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </Button>

                {/* BOTÓN VER DETALLE */}
                <Button
                  className="custom-outline-btn mt-auto"
                  onClick={() =>
                    navigate(`/producto/${producto.id}`, {
                      state: { producto },
                    })
                  }
                >
                  Ver producto
                </Button>

              </Card.Body>
            </Card>

          </Col>
        ))}
      </Row>
    </Container>
  );
}
