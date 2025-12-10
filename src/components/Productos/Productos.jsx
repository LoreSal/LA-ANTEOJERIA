import React, { useState, useEffect } from "react";
import "./Productos.css";
import { Link } from "react-router-dom";
import { useCarrito } from "../../contexts/CarritoContext";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { agregarAlCarrito } = useCarrito(); 

  const API_URL = "https://6927a7d6b35b4ffc50129e0e.mockapi.io/api/producto1";

  // PAGINACIÓN
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 12;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setCargando(false);
      });
  }, []);

  if (cargando)
    return <p style={{ textAlign: "center" }}>Cargando productos...</p>;

  //  Productos según la página
  const indexUltimo = paginaActual * productosPorPagina;
  const indexPrimero = indexUltimo - productosPorPagina;
  const productosActuales = productos.slice(indexPrimero, indexUltimo);

  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  const cambiarPagina = (num) => setPaginaActual(num);

  return (
    <div className="productos-container">
      <h2 className="titulo-seccion">Todos nuestros productos</h2>

      <div className="productos-grid">
        {productosActuales.map((prod) => (
          <div key={prod.id} className="producto-card">
            <img src={prod.imagen} alt={prod.nombre} className="producto-img" />

            <div className="producto-info">
              <h3>{prod.nombre}</h3>
              <p className="marca">{prod.marca}</p>
              <p className="precio">${prod.precio}</p>

              {/*  BOTÓN  */}
              <button
                className="btn-agregar"
                onClick={() => agregarAlCarrito(prod)}
              >
                Agregar al carrito
              </button>

              <Link to={`/detalle/${prod.id}`} className="btn-detalle">
                Ver detalle
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/*  BOTONES DE PAGINACIÓN */}
<div className="paginacion">
  {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
    <button
      key={num}
      onClick={() => cambiarPagina(num)}
      className={num === paginaActual ? "activo" : ""}
    >
      {num}
    </button>
  ))}
</div>

    </div>
  );
}

export default Productos;
