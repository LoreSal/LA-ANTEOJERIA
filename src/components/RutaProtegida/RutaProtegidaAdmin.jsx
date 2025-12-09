import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function RutaProtegidaAdmin({ children }) {

    const { isAuthenticated, isAdmin } = useAuth();

    if (!isAuthenticated || !isAdmin) {
        return <Navigate to="/login" />;
    }

    return children;
}
