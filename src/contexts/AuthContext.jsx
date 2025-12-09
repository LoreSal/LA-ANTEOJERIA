 import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const login = (usuario, contrasena) => {

        // ADMIN
        if (usuario === "admin" && contrasena === "admin1234") {
            setIsAuthenticated(true);
            setIsAdmin(true);
            return { ok: true, admin: true };
        }

        // CLIENTE
        if (usuario === "cliente" && contrasena === "1234") {
            setIsAuthenticated(true);
            setIsAdmin(false);
            return { ok: true, admin: false };
        }

        // SI NO ES NINGUNO DE LOS DOS
        return { ok: false, mensaje: "Credenciales incorrectas" };
    };

    const logout = () => {
        setIsAuthenticated(false);
        setIsAdmin(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
