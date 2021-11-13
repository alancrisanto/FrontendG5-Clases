import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import FormProducto from "../components/FormProducto";
import { obtenerCategoria } from "../services/categoriasService";
import { crearProducto, subirImagen } from "../services/productosService";
import Cargando from "../components/Cargando"

let imagen; // variable global que no está definida

export default function CrearProductoView() {

    const [value, setValue] = useState ({
        nombre: "",
        descripcion: "",
        precio: 0,
    });

    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const actulalizarInput = (e) => {
        setValue({
            ...value, // cogiendo estado de value
            [e.target.name]: e.target.value,
        });
    }

    const  manejarSubmit = async (e)=> {
        e.preventDefault();

        try {
            setLoading(true);
            const urlImagenSubida = await subirImagen(imagen);

            await crearProducto({...value, imagen: urlImagenSubida});

            await crearProducto(value);
            // antes de dirigirse a navigate uso sweetalert2
            setLoading(false);
            await Swal.fire({
                icon:"success",
                title: "Éxito",
                text: "Producto Creado",
                showConfirmButton: "false", // es para que no me muestre un boton de cierre
                // timer: 2000,
            });
            // despues de que haya terminado de crear el producto voy a hacer un navigate hacia el home
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const manejarImagen = (e) => {
        e.preventDefault();
        console.log(e.target.files);
        imagen = e.target.files[0]; //como para utilizar
    }

    useEffect(() =>{
        const getCategorias = async () => {
            try {
                const catObtenidas = await obtenerCategoria();
                setCategorias(catObtenidas);
            } catch (error) {
                console.error(error)
            }
        }
        getCategorias();
    }, []);


    return (
        <>
        {loading === true ? (
            <Cargando/>
        ):(
            <FormProducto 
                value={value} 
                actualizarInput={actulalizarInput}
                manejarSubmit={manejarSubmit}
                manejarImagen={manejarImagen}
            />
            )}
        </>

    );
};

