import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <span className="loading  loading-spinner loading-lg"></span>

    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
}