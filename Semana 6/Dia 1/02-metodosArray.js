let frutas = ["fresa", "Mango", "Platano", "Piña"]

// Recordar que objetos son arreglos
frutas.forEach(function (frut) {
    console.log(frut)
})

let energia = [89, 90, 86, 85, 100]

// let energiaCima = []

// for (i = 0; i < energia.length, i++){
//     energiaCima.push(energia[i]/2)
//     console.log(energiaCima)
// }

// Map realiza la misma tareas del for anterior
// Map crea un nuevo array con información transformada
let energiaCima = energia.map(function(energy){
    let energiaTransformada = energy / 2
    return energiaTransformada
})

console.log(energiaCima)

// Filter

let conductores = [
    {
        nombre: "Jose",
        vacunado: true,
    },
    {
        nombre: "Glenda",
        vacunado: true,
    },
    {
        nombre: "Osmar",
        vacunado: false,
    },
]

let puedePasar = conductores.filter(function(driver){
    return driver.vacunado == true
})

console.table(puedePasar)

let dniDB = ["41421285", "12345678", "76458563"]


let encontrado = dniDB.filter(function(doc){
    // return doc == "12345678"
    if (doc.includes("44")){
        return doc
    }
})

// console.log(encontrado)

// let oracion = "los pollitos dicen pio pio pio"

// let incluye = oracion.includes("miau")

// console.log(incluye)

let oracion = "Dame 9 piezas de pollo"

let incluye = oracion.includes("9")

console.log(incluye)
