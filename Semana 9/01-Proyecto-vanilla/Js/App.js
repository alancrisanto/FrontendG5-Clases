/**
 * Tener mockapi listo
 * Obtner los datos (GET) fetch
 * Convertir esos datos a HTML entendible por el navegador
 * 
 * 4. Crear un producto desde el navegador
 * 4.1 Detectar el evento click de un boton
 * 4.2 Vamos a abrir el modal de Bootstrap
 * 4.3 Obtener los datos del formulario que estará en dentro del modal
 * 4.4 Con esa info convertirla a un JSON y enviarla a mockapi
 */


// importar
import { obtenerProductos, crearProducto } from "./comunicaciones.js";
import { imprimirProductos } from "./interfaz.js";

// Variables globales - los elementos del DOM

let btnCrear = document.getElementById("btnCrear")

let modalCrear = new bootstrap.Modal(document.getElementById("modalCrear"))

let btnGuardar = document.getElementById("btnGuardar")

const getProductos = async () => {
    try {
        let productosObtenidos = await obtenerProductos()
        console.table(productosObtenidos)
        imprimirProductos(productosObtenidos)
    } catch (error) {
        console.log(error)
    }
}

getProductos()

btnCrear.addEventListener("click", () => {
    modalCrear.show()
})

btnGuardar.addEventListener("click", async ()=> {
    let formulario = document.getElementById("formCrear")
    // nuevoProducto tiene los datos del form
    let nuevoProducto = {
        nombre:formulario.nombre.value,
        descripcion:formulario.descripcion.value,
        precio:formulario.precio.value
    }
    try {
        let productoCreado = await crearProducto(nuevoProducto)
        // Exito Creando el producto
        formulario.reset()
        modalCrear.hide()
        getProductos()
    } catch (error) {
        console.log(error)
    }
    // console.log(nuevoProducto)
    // Informacion obtenida en objeto para hacer un POST
})