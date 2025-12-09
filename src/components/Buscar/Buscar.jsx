import React, { useEffect, useState } from "react";
import "../Buscar/Buscar.css";
import { Link, useLocation } from "react-router-dom";

const Buscar = () => {
  const [productos, setProductos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q")?.toLowerCase() || "";

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://6927a7d6b35b4ffc50129e0e.mockapi.io/api/producto1");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  useEffect(() => {
    if (query === "") {
      setFiltrados([]);
      return;
    }

    const resultado = productos.filter(
      (p) =>
        p.nombre.toLowerCase().includes(query) ||
        p.marca.toLowerCase().includes(query) ||
        p.categoria.toLowerCase().includes(query)
    );

    setFiltrados(resultado);
  }, [query, productos]);

  if (loading) return <p className="buscar-loading">Cargando resultados...</p>;

  return (
    <div className="buscar-container">
      <h2 className="buscar-titulo">
        Resultados para: <span>"{query}"</span>
      </h2>

      {filtrados.length === 0 ? (
        <p className="buscar-sin-resultados">No se encontraron productos.</p>
      ) : (
        <div className="buscar-grid">
  {filtrados.map((prod) => (
    <Link 
      to={`/producto/${prod.id}`} 
      key={prod.id} 
      className="buscar-card"
      state={{ producto: prod }}
    >
      <img src={prod.imagen} alt={prod.nombre} />
      <h3>{prod.nombre}</h3>
      <p className="buscar-marca">{prod.marca}</p>
      <p className="buscar-precio">${prod.precio}</p>
    </Link>
  ))}
</div>

      )}
    </div>
  );
};

export default Buscar;
