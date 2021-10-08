let arrJuegos = [
    {
        nombre: "The Witcher 3",
        precio: 60,
    },
    {
        nombre: "Doom",
        precio: 50,
    },
    {
        nombre: "Among Us",
        precio: 30,
    },
    {
        nombre: "Bloodborne",
        precio: 90,
    },
    {
        nombre: "God of War",
        precio: 120,
    },
    {
        nombre: "Civilization",
        precio: 45,
    },
]

/**
 * Preguntaremos al usuario cual es su presupuesto para ofrecer juegos que estén a su alcance.
 * Después brindaremos un carrito de compras
 * 
 * A. Que datos necesito
 * 
 * B.- Dónde obtengo los datos
 * 
 * C.- Estan en la forma que los necesito
 * 
 * 1.-Preguntar su presupuesto
 * 2.-Comparar el presupuesto con los juegos 
 * 3.-Segun la composición tener una lista de juegos a ofrecer
 * 4.- Agregar al carrito, seleccionar items
 * 5.- Cobrar, indicar el total
 */


let presupuesto = +prompt("Cuánto es su presupuesto?")

function revisarPresupuesto(){
    let juegosComprables =[] // Lista de juegos que el usuario que puede comprar
    for(let i = 0; i< arrJuegos.length; i ++){
        if (presupuesto >= arrJuegos[i].precio){
            juegosComprables.push(arrJuegos[i])
        }
    }
    return juegosComprables;
}

function agregarCarrito(listaJuegos){
    let carrito = []

    for(let j = 0; j < listaJuegos.length; j++){
        // Como saber si al comprar un juego puedo comprar el siguiente sin quedarme sin plata
        if (presupuesto < listaJuegos[j].precio){
            console.log("Lo siento, no alcanza :( ")
            continue;
        }

        let compra = confirm(`Deseas comprar? ${listaJuegos[j].nombre}`)
        console.log(compra)

        if (compra == true){
            carrito.push(listaJuegos[j])
            presupuesto = presupuesto - listaJuegos[j].precio
        }
    }
    // Despues del for el carrito estará lleno
    return carrito
}

let listaComprables = revisarPresupuesto()
console.table(listaComprables)

let miCarrito = agregarCarrito(listaComprables);

console.log("Haz comprado:")
console.table(miCarrito)
console.log(`tu vuelto es: ${presupuesto}`)