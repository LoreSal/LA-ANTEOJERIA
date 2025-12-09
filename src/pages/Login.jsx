 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login/login.css";
import { useAuth } from "../contexts/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [usuario, setUsuario] = useState("");
       const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        const respuesta = login(usuario, contrasena);

        if (respuesta.ok) {
            if (respuesta.admin) {
                navigate("/admin");      // admin → panel admin
            } else {
                navigate("/carrito");    // cliente → carrito
            }
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Iniciar Sesión</h1>

                <input
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    className="input-login"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    className="input-login"
                />

                {error && <p className="error-login">{error}</p>}

                <button onClick={handleLogin} className="btn-login">
                    Acceder
                </button>

                <p className="login-leyenda">
                    <strong>Acceso para pruebas:</strong>
                    <br />
                    Usuario cliente → <em>cliente</em> / <em>1234</em>
                    <br />
                    Administrador → <em>admin</em> / <em>admin1234</em>
                </p>
            </div>
        </div>
    );
}

export default Login;
