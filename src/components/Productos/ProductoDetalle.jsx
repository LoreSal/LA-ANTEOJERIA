import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCarrito } from "../../contexts/CarritoContext";
import { Helmet } from "react-helmet-async";
import "./ProductoDetalle.css";

const ProductoDetalle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { agregarAlCarrito } = useCarrito();

  const [producto, setProducto] = useState(location.state?.producto || null);
  const [cargando, setCargando] = useState(!location.state?.producto);

  const API_URL = `https://6927a7d6b35b4ffc50129e0e.mockapi.io/api/producto1/${id}`;

  useEffect(() => {
    if (!producto) {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setProducto(data);
          setCargando(false);
        })
        .catch(() => navigate("/productos"));
    }
  }, [producto, API_URL, navigate]);

  if (cargando || !producto) return <p>Cargando producto...</p>;

  return (
    <div className="detalle-container">
      <Helmet>
        <title>{producto.nombre} — La Anteojería</title>
      </Helmet>

      <div className="detalle-wrapper">
        {/* IZQUIERDA - Imagen */}
        <div className="detalle-img-container">
          <div className="vertical-bar"></div>
          <img
            src={producto.imagen || "/img/default-product.png"}
            alt={producto.nombre}
            className="detalle-imagen"
          />
        </div>

        {/* DERECHA - Info */}
        <div className="detalle-info">

          <h2 className="detalle-nombre">{producto.nombre}</h2>

          <p className="detalle-marca">
            {producto.marca} • {producto.categoria} • {producto.genero}
          </p>

          <p className="detalle-descripcion">{producto.descripcion}</p>

          <p className="detalle-item"><strong>Material:</strong> {producto.material}</p>

          <p className="detalle-precio">
            ${Number(producto.precio).toFixed(2)}
          </p>

          {/* STOCK DEFAULT */}
          <p className="detalle-stock">🟢 En stock</p>

          <button
            className="btn-agregar"
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al carrito
          </button>

          <Link to="/productos">
            <button className="btn-volver">Volver al catálogo</button>
          </Link>

          <hr className="divider" />

          <div className="detalle-extra">
            <p>🚚 Envíos a todo el país</p>
            <p>🛡️ Garantía por fábrica</p>
          </div>

        </div>
      </div>

      {/* RELACIONADOS (placeholder) */}
      <div className="relacionados">
        <h3>También puede interesarte</h3>
        <p>Productos relacionados próximamente ✨</p>
      </div>

    </div>
  );
};

export default ProductoDetalle;
