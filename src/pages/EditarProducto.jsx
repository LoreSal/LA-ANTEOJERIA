import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: "",
    categoria: "",
    marca: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await fetch(
          `https://6927a7d6b35b4ffc50129e0e.mockapi.io/api/producto1/${id}`
        );

        if (!res.ok) throw new Error("No se pudo cargar el producto");

        const data = await res.json();
        setForm(data);

      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchProducto();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.precio || !form.descripcion || !form.imagen || !form.categoria) {
      return setError("Todos los campos son obligatorios.");
    }

    if (form.precio <= 0) {
      return setError("El precio debe ser mayor a 0.");
    }

    if (form.descripcion.length < 10) {
      return setError("La descripción debe tener al menos 10 caracteres.");
    }

    try {
      const res = await fetch(
        `https://6927a7d6b35b4ffc50129e0e.mockapi.io/api/producto1/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Error al actualizar producto");

      navigate("/admin");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="container mt-4">
      <h2>Editar Producto</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} className="mt-3">

        <input className="form-control mb-2"
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />

        <input className="form-control mb-2"
          type="number"
          name="precio"
          value={form.precio}
          onChange={handleChange}
        />

        <input className="form-control mb-2"
          type="text"
          name="imagen"
          value={form.imagen}
          onChange={handleChange}
        />

        <textarea className="form-control mb-2"
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
        />

        <select className="form-control mb-2"
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
        >
          <option value="">Seleccionar Categoría</option>
          <option value="sol">Anteojos de Sol</option>
          <option value="recetados">Armazones Recetados</option>
          <option value="contacto">Lentes de Contacto</option>
          <option value="accesorios">Accesorios</option>
          <option value="kenta">KENTA</option>
        </select>

        <input className="form-control mb-2"
          type="text"
          name="marca"
          value={form.marca}
          onChange={handleChange}
        />

        <button className="btn btn-success">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarProducto;
 