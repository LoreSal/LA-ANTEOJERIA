import React from "react";
import "./Reseñas.css";

import cliente1 from "../../assets/img/Reseñas/cliente1.jpeg";
import cliente2 from "../../assets/img/Reseñas/cliente2.jpeg";
import cliente3 from "../../assets/img/Reseñas/cliente3.jpeg";
import cliente4 from "../../assets/img/Reseñas/cliente4.jpeg";


const Reseñas = () => {
  const reseñas = [
    { id: 1, imagen: cliente1, texto: "¡Increíble experiencia! Encontré los anteojos perfectos que no solo mejoran mi visión, sino que también complementan mi estilo. El personal fue muy atento y profesional. ¡Definitivamente recomiendo LA ANTEOJERÍA Óptica Boutique!", nombre: "Ana Rodríguez" },
    { id: 2, imagen: cliente2, texto: "Buscaba unos anteojos de sol de alta calidad y con diseño exclusivo, y los encontré aquí. La selección es impresionante y la atención personalizada hizo la diferencia. ¡Estoy encantado con mi compra!", nombre: "Carlos Pérez" },
    { id: 3, imagen: cliente3, texto: "Desde que uso mis nuevos anteojos progresivos, mi visión es mucho más nítida y cómoda. El proceso de selección y adaptación fue excelente. ¡Un servicio de primera!", nombre: "Alan Gómez" },
    { id: 4, imagen: cliente4, texto: "Me asesoraron con una paciencia increíble. Probé varios modelos hasta encontrar el indicado. La calidad de los armazones y la dedicación del personal hacen que valga totalmente la pena.", nombre: "María López" },
  ];

  return (
    <section className="seccion-resenas">
      <h2>Nuestras Reseñas</h2>
      <div className="reseñas-grid">
        {reseñas.map(resena => (
          <div key={resena.id} className="resena-card">
            <img src={resena.imagen} alt={resena.nombre} />
            <p className="resena-texto">"{resena.texto}"</p>
            <p className="nombre-cliente">- {resena.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reseñas;
