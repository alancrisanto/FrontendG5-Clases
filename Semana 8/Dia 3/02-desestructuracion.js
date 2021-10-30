// Desestructuracion en arreglos

let frutas = ["Piña", "Fresa", "Naranja", "Kiwi"]

// console.log(frutas[2])
// console.log(frutas[3])

let fruta1 = frutas[0]
// Demasiado trabajo poner el código de esta forma

// En una sola línea para cada item
let [fru1, fru2, fru3, fru4] = frutas

// console.log(fru2)
// console.log(fru3)

// Desestructuracion de objetos

let celular = {
    pantalla: 6.9,
    color: "Negro",
    memoria: 3,
    camara: 12,
    marca: "Motorola",
    encender: function(){
        console.log("tururu")
    }
}

// Tengo que saber que propiedades tiene el objeto - requisito

let {pantalla, encender, marca, memoria, color, camara} = celular

// console.log(pantalla)
// encender()
// console.log(color)
// console.log(marca)

// que tenga una funcion que recibe las caracteristicas de una persona

// A - recibiendo argumentos por orden
// let verficarPersona = (nombre, dni, edad) => {
//     console.log(nombre)
//     console.log(dni)
//     console.log(edad)
// }

// verficarPersona("Juan", "98411345", 25)

// B- recibiendo argumentos por un objeto

let verficarPersona = ({nombre, dni, edad}) => {
    
    console.log(nombre)
    console.log(dni)
    console.log(edad)
}

let persona = {
    edad: 21,
    nombre: "Maria",
    dni: "48642204",
    apellidos: "Galvez",
    hobbies: ["comer", "correr"],
}

verficarPersona(persona)

