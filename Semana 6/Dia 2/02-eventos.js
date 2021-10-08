let divContenido = document.getElementById("contenido")

let miBoton = document.createElement("button")

miBoton.innerText = "Clickeame!"

divContenido.appendChild(miBoton)

// ElementoHTML, addEventListener("evento", function(){})

miBoton.addEventListener("click", function(){
    alert("Has hecho click!")
})

let peliculas = [
    "Parasite",
    "Shang Chi",
    "Interestelar",
    "El bueno, el malo y el feo",
    "Geo Tormenta",
    "Jhon Wick",
    "Constantine",
    "El Señor de los Anillos"
]

peliculas.forEach(function(peli){
    let nuevoParrafo = document.createElement("p")

    nuevoParrafo.innerHTML = peli
    divContenido.appendChild(nuevoParrafo)

    nuevoParrafo.style.cursor = "pointer"

    nuevoParrafo.addEventListener("dblclick", function(){
        alert(`Hiciste click en ${peli}`)

        nuevoParrafo.style.backgroundColor = "steelblue"

    })
})