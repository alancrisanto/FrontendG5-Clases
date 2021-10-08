// window.console.log("Hola")

// Info del navegador
console.log(`Info Navegador: ${window.navigator.userAgent}`)

// Cual es la URL
console.log(`URL: ${window.location}`)

// Para pedir permiso accder a la ubicación
navigator.geolocation.getCurrentPosition(function(ubicacion){
    console.log(ubicacion)
})

console.log(window.document)

let miTitulo = document.querySelector("h1")
console.log(miTitulo)

// innerHTML es el contenido HTML de un elemento
miTitulo.innerHTML = "Hola Soy nuevo título"

console.log(miTitulo.innerHTML)

// Obtener un elemento

let miCaja = document.getElementById("caja")
console.log(miCaja)

// innerHTML representa el contenido HTML de un elemento

miCaja.innerHTML = "<h2>Titulo caja</h2>"

miCaja.style.backgroundColor = "purple"
miCaja.style.color = "white"

let misItems = document.getElementsByClassName("lista_item")

console.log(misItems)

let arregloItems = Array.from(misItems)

console.log(arregloItems)

// Anotación importante: forEach, map, filter, find:
// forEach(function(item, indice_item){})
arregloItems.forEach(function(item, indice, conjunto){
    item.style.backgroundColor = "skyblue"
    item.innerHTML = `Patata ${indice}`
    console.log("mostrando el arreglo", conjunto)
})

// Query Selector
// Obtener elemento de diferentes maneras
// Los QuerySelector y QeuerySelectorAll funcionar de la misma manera que los selectores de CSS

let miTexto = document.querySelector("#texto")
console.log(miTexto)

let boxes = document.querySelectorAll(".box")
console.log(boxes)

boxes.forEach(function(bx){
    bx.innerHTML = "<p>Soy un parrafo</p>"
})

// Crear Elementos
let series = [
    "Squid Game",
    "Dexter",
    "Dark",
    "Billions",
    "GOT",
    "Suits",
    "Mr Robot",
    "House of Dragons",
    "Chernobyls",
    "Breaking Bad"
]

let divContenido = document.getElementById("contenido")
// createElement("etiqueta")=>"p". "ul", "h1", "td"

let lista = document.createElement("ul")

divContenido.appendChild(lista)

let textoli = ""

series.forEach(function(programaTv){
    textoli = textoli + `<li>${programaTv}</li>`
})

console.log(textoli)

lista.innerHTML = textoli

let imagen = document.createElement("img")

divContenido.appendChild(imagen)

// setAttribute("nombre_atri", "valor_atrib"")
imagen.setAttribute("src", "https://picsum.photos/200/300")

// Classes de CSS
// A un elemento le podemos aplicar varias clases
// add("nombre de la clase")

lista.classList.add("resaltado")
lista.classList.add("redondeado")
// lista.classList.remove("resaltado")
