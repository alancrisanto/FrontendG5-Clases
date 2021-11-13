import {useState, useEffect} from "react"
import { obtenerCategoria } from "../services/categoriasService"
import cargando from "../components/Cargando"
import { Link } from "react-router-dom";




export default function ListaCategoriasView() {

    const [categorias, setCategorias] = useState();
    const [loading, setLoading] = useState(false);

    const getCategorias = async () => {
        try {
            setLoading(true);
            const categoriasObtenidas = await obtenerCategoria();
            setCategorias(categoriasObtenidas);
            setLoading(false);
        } catch (error) {
            throw error
        };
    };

    useEffect(() => {
        getCategorias();
    }, []);



    return (
        <>
            {loading} ? (
                <cargando/>
            ) : (
                <>
                    <h1 className="mb-3">Lista Categorias</h1>
                    <Link to="/crearcategoria" className="btn btn-primary mb-2">
                        Crear Categoria
                    </Link>
                    <table className="table">
                        <thead>
                            <tr>Nombre Categorias</tr>
                            <tr>Descripción</tr>
                        </thead>
                        <tbody>
                        {categorias.map((cat, i)=> (
                                <tr key={i}>
                                    <td>{cat.nombre}</td>
                                    <td>{cat.descripcion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )
        </>
    )
}
