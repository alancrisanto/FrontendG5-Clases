let nombre = prompt("Ingresa tu nombre")

localStorage.setItem("nombreUsuario", nombre)

// setTimeout(function(){
//     // leer contenido del localStorage
//     // get.item(nombre_algo_guardado_en_el_LS)
//     let obtenido = localStorage.getItem("nombreUsuario")
//     alert(obtenido)
// },4000)

// setTimeout(function(){
//     // Eliminar algo
//     // removeItem("nombre_de_algo_guardado_en_el_LS")
//     localStorage.removeItem("nombreUsuario")
// }, 12000)

// setInterval(function(){
//     console.log("hola")
// }, 1000)

let objeto = {
    modelo: "Iphone",
    pantalla: 6.5,
    colores: ["blanco", "dorado", "negro"],
    año: 2021
}
// JavaScript Object Notation
// JSON.stringify(), convierte JS a string

let objJason = JSON.stringify(objeto)

console.log(objJason)

console.log(typeof objJason)

localStorage.setItem("objeto", objJason)

setTimeout(function(){
    let jasonObtenido = localStorage.getItem("objeto")
    
    let jasonRecuperado = JSON.parse(jasonObtenido)
    console.log(jasonRecuperado)
    console.log(jasonRecuperado.modelo)
}, 4000)
