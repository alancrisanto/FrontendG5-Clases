// let alumnos = ["Leo", "Arturo", "Gustavo","Alan", "Ariana", "Masami"]

// // Algoritmo para que el usuario ingrese un nombre y busque si existe ek alumno y muestre la posición de ese alumno

// let eleccion = prompt("Ingrese Nombre de Alumno")

// for (let i = 0; i < alumnos.length; i++){
//     if (eleccion == alumnos[i]){
//         console.log(`${eleccion} se encuentra en posición ${i}`)
//         break;
//     }
//     console.log(`Buscando en ${i}`)
// }

// for (let i = 0; i < alumnos.length; i++){
//     if (eleccion == alumnos[i]){
//         console.log(`Usted eligió a ${alumnos[i]}`)
//     }
// }


let notas = [17, 15, 10, 5, 24, 20, 7, 9, 18, 1, 0, 13 ]

// Saber las notas aprobatorias

for(let i =0; i< notas.length; i++){
    if(notas[i] < 12){
        continue;
    }
    console.log(notas[i])
}

for (var activity of ["Dancing", "jumping", "Singing"]){
    for (var family of ["brother", "mother", "father"])
    console.log(activity + " " + family)
}