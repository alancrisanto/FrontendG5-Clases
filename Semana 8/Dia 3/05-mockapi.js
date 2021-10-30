// Obtener productos
const obtnerProductos = async() => {
    try {
        let rpta = await fetch("https://6174919608834f0017c709b0.mockapi.io/productos")
        
        let productos = await rpta.json()
        console.table(productos)
        
        return productos

    } catch (error) {
        console.log(error)
    }
}

obtnerProductos()

let body = document.querySelector("body")

obtnerProductos()
.then((misProductos) => {
    
    let htmlProductos = ""

    misProductos.forEach((prod) => {

        htmlProductos = htmlProductos + 
        `
        <tr>
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
        </tr>
        `
    })

    body.innerHTML = `<table border=1>
                            ${htmlProductos}
                        </table>`

}).catch((error) => console.log(error))



