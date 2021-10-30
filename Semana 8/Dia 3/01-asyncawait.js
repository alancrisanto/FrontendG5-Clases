// De promesas a ASYNC

// const traerData = () => {
//     return new Promise((resolvee, reject) => {
//         resolvee("Data Obtenida!!!")
//         // reject("Error al obtener data")
//     })
// }

// Todo este código se puede reemplazar con ASYNC

// async me devueve una promesa en vez de retornarme el resultado
const traerData = async() => { 
    //return ("Data obtenida con async") // return se convierte en resolve
    throw ("Error al obtener data con async")
    //  throw = reject
}
// traerData()
// .then((rpta) => console.log(rpta))
// .catch((error) => console.log(error))

const usarData = async() => {
    // cuando usemos await tiene que estar dentro de una función y esa función tiene que tener async
    
    try {
        let rpta = await traerData()
        console.log(rpta)    

    } catch (error) {
        console.log(error)
    }

}

// usarData()

const traerUsuarios = async () => {
    try {
        let respuesta = await fetch("https://reqres.in/api/users?page=2")

        let datos = await respuesta.json()

        console.table(datos.data)

    } catch (error) {
        // reject error
        console.log(error)
    }
}

traerUsuarios()