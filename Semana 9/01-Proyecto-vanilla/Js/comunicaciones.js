/**
 * Se va a encargar de hacer peticiones
 * 
 */
const URL = "https://617b3272d842cf001711bde0.mockapi.io/productos"

const obtenerProductos = async () => {
    try {
        
        const respuesta = await fetch(URL) //solamente la URL es un GET, obtengo respuesta de la petición (datos de request: status 200, cabecera de respuesta)

        const productos = await respuesta.json() // me da el json convertirdo

        return productos  //resolve(productos)
    } catch (error) {
        throw error
    }
}

const crearProducto = async (objProducto) => {
    try {
        //POST
        let configuracion = {
            method: "POST",
            body: JSON.stringify(objProducto),
            headers: {"Content-Type": "application/json"}, //API sepa como interpretarla
        }
        const respuesta = await fetch(URL, configuracion)
        const productoCreado = await respuesta.json()
        return productoCreado
    } catch (error) {
        throw error
    }
}
// Export para modulos en APP Js
export{ obtenerProductos, crearProducto}

