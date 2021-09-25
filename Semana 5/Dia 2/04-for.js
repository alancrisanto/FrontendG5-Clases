

// for (let i = 0; i <=30; i = i + 1){
//     console.log(`El contador es :${i}`);
// }

// console.log("Yo estoy al final")

// let ropa = ["Bufanda", "Medias", "Camisas"]

// for (let i = 0; i < ropa.length; i++){
//     console.log(ropa[i])
// }

let carta = ["Ceviche", "Pollo a la Brasa", "Costillar", "Adobo", "Caldo de Gallina"]

let eleccion = +prompt(" 0. Ceviche, 1.Pollo, 2. Costillar, 3. Adobo, 4. Caldo de Gallina")

for (let i = 0; i < carta.length; i++ ){
    if(eleccion == i){
        console.log(`Usted ha elegido: ${carta[i]}`)
    }
}