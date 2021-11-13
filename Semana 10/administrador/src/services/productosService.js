import axios from "axios"; //fetch pero mejor
import firebase from "firebase/compat/app"
import {storage} from "../config/Firebase"

//conjunto de funciones para hacer peticiones

const URL = `${process.env.REACT_APP_API}productos`;

const obtenerProductos = async () => {
    try {
        const {data} = await axios.get(URL);
        // console.log(rpta);
        return data //resolve
    } catch (error) {
        throw error; //reject
    }
};

const crearProducto = async (nuevoProducto) =>{
    try {
        const headers = {
            "Content-type": "application/json"
        }
        // axios siempre devuelve propopiedad data, donde está la respuesta del servidor
        // axios cuando hacer POST, PUT, necesita solo la URL
        // axios.POST(URL, objACrear, Headers)

        const {data} = await axios.post(URL, nuevoProducto, {headers})
        return data
    } catch (error) {
        throw error
    }
}

const obtenerProductPorID = async (id) => {
    try {
        const {data} = await axios.get(`${URL}/${id}`);
        return data
    } catch (error) {
        throw error
    }
}

const editarProductoPorID = async (id, objProducto) =>{
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        await axios.put(`${URL}/${id}`, objProducto, {headers});
        return //resolve (sin nada porque no se necesita)
    } catch (error) {
        throw error
    }
}

const eliminarProducto = async (id) => {
    try {
        await axios.delete(`${URL}/${id}`);
        return "Producto Eliminado" 
    } catch (error) {
        throw error
    }
}

const subirImagen = (imagen) => {

    return new Promise((resolve, reject) => {

        // 1. Necesitamos la referencia para indicar donde vamos a guardar el archivo
        let refStorage = storage.ref(`fotos/${imagen.name}`);
        let tareaSubir = refStorage.put(imagen)

        tareaSubir.on(
            `state_changed`,
            () => {},
            (error) =>{
            reject(error);
            },
            () => {
                tareaSubir.snapshot.ref.getDownloadURL().then((urlImagen) =>{
                resolve(urlImagen)
                });
            }
        )
    })
};


export { obtenerProductos, crearProducto, obtenerProductPorID, editarProductoPorID, eliminarProducto, subirImagen };

