import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");

  const API_URL = "https://6927a7d6b35b4ffc50129e0e.mockapi.io/api/producto1";

  const cargarProductos = async () => {
    try {
      const res = await fetch(API_URL);

      if (!res.ok) throw new Error("Error al obtener productos");

      const data = await res.json();
      setProductos(data);

    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("¿Seguro que desea eliminar este producto?");
    if (!confirmar) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      cargarProductos();

    } catch {
      alert("Error al eliminar");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Administrar Productos</h2>

      <Link to="/crear" className="btn btn-primary my-3">
        + Crear Producto
      </Link>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td><img src={p.imagen} width={70} /></td>
              <td>{p.nombre}</td>
              <td>${p.precio}</td>
              <td>{p.categoria}</td>

              <td>
                <Link to={`/editar/${p.id}`} className="btn btn-warning me-2">
                  Editar
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => eliminarProducto(p.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductos;
