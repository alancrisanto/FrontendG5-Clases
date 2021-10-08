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

// 
let miInput = document.createElement("input")

miInput.setAttribute("type", "password")

divContenido.appendChild(miInput)

let btnVer = document.createElement("button")

btnVer.innerHTML = "ver"
divContenido.appendChild(btnVer)

let esVisible = false //flag

btnVer.addEventListener("click", function(){
    esVisible = !esVisible
    if(esVisible == false){
        miInput.setAttribute("type", "texto")
    }else{
        miInput.setAttribute("type", "password")
    }
})

// btnVer.addEventListener("click", Mostrar)  //por confirmar


// Capturar eventos

let irAGoogle = document.createElement("a")

irAGoogle.setAttribute("href", "https://google.com")

irAGoogle.innerHTML = "Llevame a Google"

divContenido.appendChild(irAGoogle)

irAGoogle.addEventListener("click", function(evento){
    evento.preventDefault()
    console.log(evento)
})

let miFormulario = document.getElementById("formulario");

// Submit es la accion de enviar datos

miFormulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    console.log("Submiiiit!!");
    // vamos a hacer envio de datos con javascript

    let nuevoUsuario = {
        // he obtenido los datos de los input
        // formulario nombre_input: value

        nombres: miFormulario.nombres.value,
        apellidos: miFormulario.apellidos.value,
    };
    console.log(nuevoUsuario);
})