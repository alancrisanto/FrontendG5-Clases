import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import FormProducto from "../components/FormProducto"
import { editarProductoPorID, obtenerProductPorID, subirImagen } from "../services/productosService";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

let imagen; // undefined


export default function EditarProductosView() {

    const [value, setValue] = useState({
        nombre: "",
        descripcion: "",
        precio: 0,
    });
    
    const {id} = useParams(); //1. con esto obtenemos el id de la URL
    const navigate = useNavigate();

    const getProducto = async () => {
        try {
            const prodObtenido = await obtenerProductPorID(id);
            setValue(prodObtenido); // la respuesta de mockapi la pongo en el estado
            console.log(prodObtenido)
        } catch (error) {
            throw error
        }
    }

    const manejarSubmit = async (e) => {
        e.preventDefault();
        try {
            if (typeof imagen !== "undefined"){

            const urlImagenSubida = await subirImagen(imagen);
            await editarProductoPorID(id, {...value, imagen: urlImagenSubida});
        } else{
            await editarProductoPorID(id, value);
        };
            await Swal.fire({
                icon: "success",
                title: "Éxito",
                text: "Producto Editado Exitósamente"
            });
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    const actulalizarInput = (e) => {
        console.log(e.target.name, e.target.value)
        setValue({
            ...value, // cogiendo estado de value
            [e.target.name]: e.target.value,
        });
    }


    const manejarImagen = (e) => {
        e.preventDefault();
        console.log(e.target.files);
        imagen = e.target.files[0]; //como para utilizar
    }

    useEffect(()=>{
        getProducto(); //3 Con un  useEffect llamanos la funcion que me trae el 01 producto por su ID
    }, []);

    
    return (
        <div>
            <FormProducto value={value} actualizarInput={actulalizarInput} manejarSubmit={manejarSubmit} manejarImagen={manejarImagen}/>
        </div>
    )
}
