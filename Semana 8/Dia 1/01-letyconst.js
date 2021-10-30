// for(var i = 0; i<5; i++){
//     console.log(i)
// }

// console.log(`Iterator ${i}`)

// for(var j = 0; j<5; j++){
//     console.log(j)
// }

// console.log(`Iterador J ${j}`)

// Resumen no usen var al menos un let

// Cuando son const que tienen valores se tiene la convencion de poner el nombre en MAYUSCULAS

const Pi = 3.1415

//Pi = 40 // No podemos cambiar una variable creada con const

console.log("Mostrando Pi", Pi)

// Una variable puede referenciar casi cualquier cosa (number, string, arrays, objects y funciones)

let saludar = function(){
    console.log("Hola")
}

saludar()
    
const despedirme = function(){
    console.log("chau")
}

despedirme()

