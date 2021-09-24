let edad = +prompt("Cuaĺ es tu edad?")

// if condición
// if(edad >= 18){
//     console.log("Sí accedes a la primera dosis")
// } else if(edad >=0){
//     console.log("No te encuentras en el padron")
// } else{
//     console.log("Error al ingresar datos")
// }

if(edad >=65){
    console.log("Te toca pfizer, Urgente!!")
} else if(edad <= 55 && edad >=45){
    console.log("Te toca pfizer y te toca el finde")
} else if(edad == 18 || edad == 21){
    console.log("Te toca sinopharm mañana")
}