// Esparcir

let frutas = ["Kiwi", "Sandia", "Fresa", "Chirimoya"]

// Sirve para crear copias

let frutasTemp = [...frutas, "Mango", "Uvas"]

// console.log(frutasTemp)

let verduras = ["Lechuga", "Col China", "Zanahoria"]

let comida = [...frutas, ...verduras]

// console.log("comida", comida)

// Spread operator en objetos

let picachu = {
    tipo: "Electrico",
    ataque: 40,
    vida: 55,
    atack: "Cabezaso",
}
// No es correcto hacer esto
// Cambio se ve afectado tambien picachu
// let picachuRojo = picachu

// picachu rojo se peleó
// picachuRojo.vida = 23
// 
// console.table(picachuRojo)
// console.log("Picachu original")
// console.table(picachu)

let picachuVerde = {...picachu, atack: "Conversar", come:"Lechuga"}

picachuVerde.vida = 40

console.log("///Picachu Original")
console.table(picachu)
console.table("///Picachu Verde")
console.table(picachuVerde)

