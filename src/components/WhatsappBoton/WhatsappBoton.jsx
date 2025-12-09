import React from "react";
import WhatsappIcon from "../../assets/img/WhatsappBoton.png";
import "./WhatsappBoton.css"; 

function WhatsappBoton() {
  return (
    <a
      href="https://wa.me/5491162966251" 
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <img
        src={WhatsappIcon}
        alt="WhatsApp"
      />
    </a>
  );
}

export default WhatsappBoton;
