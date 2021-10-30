// A una variable se le puede asignar cualquier cosa, inclusive funciones

// console.log("Estamos jugando y pedimos rappi")

// setTimeout(function(){
//     console.log("2. Esperar al rappi hasta que llegue")
// }, 2000);

// const comer = function(){
//     console.log("3. Llega el Rappi y comemos")
// }

// console.log("3. Llega el Rappi y comemos")

/**
 * Tengo que buscar el registro de un alumno en una base de datos inmensa
 */

let alumnosDB = ["Cristopher", "Arturo", "Masami", "Juan", "Fred", "Nicolas", "Ariana", "Glenda", "Graciela", "Melissa"]


// fcallback va a ser la referencia de una funcion que vamos a pasar como parámetro

const buscarAlumno = function (nombre, fCallback) {
    // Para simular que va a demorar voy a utilizar un SetTimeout
    // y esta funcion retornará true o false para indicar si encuentra el alumno
    setTimeout(function () {
        for (let index = 0; index < alumnosDB.length; index++) {
            if (alumnosDB[index] == nombre){
                // Hemos encontrado alumno
                fCallback(true)
                return;
            }
        }
        // si no la encontramos
        fCallback(false)
    }, 4000)
}

buscarAlumno("Melissa", function (existe) {
    if (existe == true) {
        console.log("El alumno existe")
    } else{
        console.log("El alumno no existe ERROR")
    }
})

