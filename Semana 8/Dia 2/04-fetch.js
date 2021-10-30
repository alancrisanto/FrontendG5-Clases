// Petición tipo GET

fetch("https://reqres.in/api/users?page=2")
.then((respuesta)=>{
    console.log(respuesta)
    return respuesta.json()  // parsea tesxto a JS
}).then((gatos)=>{
    console.table(gatos.data)
})

// Tipo POST - Crear

let nuevoUsuario = {
    name: "Daniel de la Cruz",
    job: "Boss",
}

// Headers - (parecidos Guía de remisión)

let cabecera = {
    method: "POST", // Método HTTP, POST, PUT, DELETE, GET
    headers: {
        // que info envio, de que tipo para el backend sepa como procesarlo
        "Content-Type": "application/json"
    },

    body: JSON.stringify(nuevoUsuario), // data, cara, pero hay que transformarla a JSON
}

fetch("https://reqres.in/api/users", cabecera)
.then((respuesta)=>{
    return respuesta.json()
})
.then((usuarioCreado)=>{
    console.table(usuarioCreado)
})
.catch((error)=>{
    console.log(error)
})