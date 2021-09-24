// 1. PEdir al usuario nombre, apellido y edad por separado, el resultado deberia ser un console.log resumiendo los datos del usuario

let nombres = prompt(`Cuál es su nombre?`)
let apellidos = prompt(`Cuáles son sus apellidos?`)
let edad = prompt(`Cuál es tu edad?`)

console.log(`Hola ${nombres} ${apellidos} tu edad es ${edad}, bienvenido`)

alert(`Hola ${nombres} ${apellidos} tu edad es ${edad}, bienvenido`)

// Programe un algoritmo que calcule el área de un triángulo, considera las variables y muestra el resultado en la consola

// a) Qué datos necesito
// b) Cómo puedo obtener esos datos
// c) Esos datos están en la forma que necesito?

// Manera 1: Poner el + delante del prompt ( el + Tambien acepta decimales)
// Manera 2: poner el parseInt(prompt("pregunta"))

let altura = +(prompt("Ingrese la altura"))
let base = +(prompt("Ingrese la base"))

let area = (base *  altura)/2

console.log(typeof area, area)


// 3. Preguntar al usuario por dos número y mostrar residuo de la división

let a = +prompt("Ingrese un número")
let b = +prompt("Ingrese segundo número")

let residuo = a % b

console.log(`El residuo de ${a} y ${b} es ${residuo}`)


