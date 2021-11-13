import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  //<a/> ancla
import {obtenerProductos, eliminarProducto} from "../services/productosService"
import Swal from "sweetalert2";



export default function ListaProductosView() {

    const [productos, setProductos] = useState([]);
    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos();
            // console.table(productosObtenidos);
            setProductos(productosObtenidos); // despues de obtener los datos, actualizamos el estado
        } catch (error) {
            console.log(error);
        }
    };

    const verificarEliminar = async (id) => {
        const respuesta = await Swal.fire({
            icon: "warning",
            title: "Desea Eliminar el Producto?",
            text: "Esta acción es irreversible",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Sí, eliminar",
            denyButtonText: "No, cancelar",
        });
        if(respuesta.isConfirmed){
            try {
                await eliminarProducto(id)
                Swal.fire({
                    icon:"success",
                    title: "Producto Eliminado!"
                })
                getProductos()
            } catch (error) {
                throw error
            }
        }
    }

    useEffect(() => {
        getProductos();
    }, []);

    return <div>
        <h1>Productos Registrados</h1>
        <Link to="/crearproducto" className="btn btn-primary my-2">
            Crear Producto
        </Link>

        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(({nombre, descripcion, precio, id}, i)=>(
                    <tr key={i}>
                        <td>{nombre}</td>
                        <td>{descripcion}</td>
                        <td>{precio}</td>
                        <td>
                            {/* obtengo el ID y me lleva directo con el boton al producto con su id */}
                            <Link className="btn btn-info me-2" to={`/editarproducto/${id}`}>Editar</Link>
                            <button className="btn btn-danger" onClick={()=>{verificarEliminar(id)}}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>;
}
