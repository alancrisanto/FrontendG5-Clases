let hoy = new Date()

// clases (class), plano, diseño, molde
// Cuanod invocamos una clase utilizamos la palabra

console.log(hoy)
console.log(typeof hoy)

// obtengo el año

console.log(hoy.getFullYear())

//  Mes, ebero es 0 y diciembre 1

console.log(hoy.getMonth())

//  día

console.log(hoy.getDate())

let navidad = new Date(2021, 11, 25)

let hastaNavidad = navidad - hoy

console.log(hastaNavidad)

let diasParaNavidad = hastaNavidad /1000/60/60/24

console.log(diasParaNavidad)

// objeto Math

console.log(Math.sqrt(144))

// Potencia

console.log(Math.pow(5, 3))

// Random

console.log(Math.random())

function aleatorio(min, max){
    let resultado = Math.random() * (max - min) + min
    return resultado
}

console.log(aleatorio(5, 50))

for (let i = 0; i< 5; i++){
    console.log(aleatorio(5, 50))
}


