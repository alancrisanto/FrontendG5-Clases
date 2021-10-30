// Classica
// function saludar (nombre){
//     return `Hola soy ${nombre}`
// }

// Función anónima
const despedida = function (mensaje){
    return `Bye ${mensaje}`
}

// Función flecha

// const saludar = (nombre) => {
//     return `Hola soy ${nombre}`
// }

/** 
 * si solo tengo un argumento pra recibir
se puede obviar el parentesis
 * */ 

// const saludar = nombre => {
//     return `Hola soy ${nombre}`
// }

//  Se puede escribir directamente

const saludar = nombre => `Hola soy ${nombre}`


console.log(saludar ("Daniel"))
console.log(despedida ("cuidate"))

// No usar funciones flecha como métodos de un objeto
let Mouse = {
    nombre: "Miguelito",
    roer: function (){
        console.log(`${this.nombre} roe queso`)
    }
}

Mouse.roer();

