// console.log("Hola Mundo desde node")

const axios = require("axios")  //Equivalente a import

axios.get("https://reqres.in/api/users?page=2")
.then((respuesta) => {
    console.log(respuesta.data)
})
.catch((error) => {
    console.log(error)
})