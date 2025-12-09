import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearProducto = () => {
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDACIONES QUE PIDE EL PROFE
    if (!form.nombre || !form.precio || !form.descripcion || !form.imagen || !form.categoria) {
      return setError("Todos los campos son obligatorios.");
    }

    if (form.precio <= 0) {
      return setError("El precio debe ser mayor a 0.");
    }

    if (form.descripcion.length < 10) {
      return setError("La descripción debe tener al menos 10 caracteres.");
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://6927a7d6b35b4ffc50129e0e.mockapi.io/api/producto1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Error al crear producto");

      navigate("/admin");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <h2>Crear Producto</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} className="mt-3">

        <input className="form-control mb-2"
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />

        <input className="form-control mb-2"
          type="number"
          name="precio"
          placeholder="Precio"
          value={form.precio}
          onChange={handleChange}
        />

        <input className="form-control mb-2"
          type="text"
          name="imagen"
          placeholder="URL de la Imagen"
          value={form.imagen}
          onChange={handleChange}
        />

        <textarea className="form-control mb-2"
          name="descripcion"
          placeholder="Descripción"
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
          placeholder="Marca"
          value={form.marca}
          onChange={handleChange}
        />

        <button className="btn btn-primary" disabled={loading}>
          {loading ? "Creando..." : "Crear Producto"}
        </button>
      </form>
    </div>
  );
};

export default CrearProducto;
