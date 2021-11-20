import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { Navigate } from "react-router-dom"; // equivale a un redirect v5


export default function PrivateRoute(props) {
    // props.children es literalmente no se que componente voy a renderizar pero lo renderiza de todas maneras el componente que este dentro de PrivateRoute
    const {user} = useContext(AuthContext);
    console.log("mostrando estado user", user);

    // Navigate es para redireccionar
    // Si es que el susuario es diferente NULL
    //  --V retorno el hijo que me toque
    //  --F lo redirijo a Login con Navigate
    return user !== null ? props.children : <Navigate to="/login" />
}
