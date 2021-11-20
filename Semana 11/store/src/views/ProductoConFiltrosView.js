import { useState, useEffect } from "react";
import { obtenerProductosPorPagina } from "../services/productoService";
import {obtenerCategorias} from "../services/categoriaService"
import ProductoCard from "../components/ProductoCard";

export default function ProductoConFiltrosView() {

    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [limite, setLimite] = useState(16);

    const getData = async () => {
        try {
            const prodObtenidos = await obtenerProductosPorPagina(pagina, limite);
            const catObtenidas = await obtenerCategorias();
            setProductos(prodObtenidos);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>git pull
            <div className="container">
                <div className="d-flex justify-content-around my-3">
                    {categorias.map((cat, i) => (
                        <button className="btn btn-outline-dark btn-sm" key={i}>
                            {cat.nombre}
                        </button>
                    ))}
                </div>
                <div className="row my-3">
                    {productos.map((prod, i) => (
                        <div className="col-12 col-md-6 col-lg-4" key={i}>
                            <ProductoCard producto={prod} />
                        </div>
                    ))}

                </div>
            </div>   
        </>
    )
}
