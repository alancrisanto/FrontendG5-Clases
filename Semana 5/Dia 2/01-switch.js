// let producto = +prompt("Ingrese el códig del producto")

// switch(producto){
//     case 1:
//         console.log("Chocolate");
//         // todo el código que quiera
//         break;
//     case 2:
//         console.log("Papitas")
//         break;
//     case 3:
//         console.log("Galletas")
//         break;
//     default: //else
//         console.log("Código no encontrado")
// }

let horas = +prompt("Ingrese horas")

switch(true){
    case horas >35:
        console.log("Horas Extra")
        break;
    case horas >= 30 && horas <=35:
    console.log("Cumplio su jornada")
    break;
}