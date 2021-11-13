// Usar el if y for

/**
 * Ej1. Crear una función que reciba un arreglo y un monbre si el nombre existe dentro de la función retornar la posición del nombre encontrado, en caso contrario retornar -1
 */

// let nombres = ["Mario", "Luigui", "Yoshi", "Koopa"]
// let nombre = prompt("Cual es su nombre")

// function encontrado (){
//     for(let i=0; i  < nombres.length; i++){
        
//         if (nombre == nombres[i]){
//             console.log(nombre)
//         } else{
//             console.log(-1)
//         }
//     }
// return true 
// }


// #######  EJERCICIO 02  ##########

// Cómo sabe la sunat si un ruc es válido?
// Hay un dígito verificador


// function verificarRUC(ruc) {
//     //verifiquemos que el ruc tenga 11 dígitos
//     if (ruc.length == 11) {
//         //es correcto
//         //porque eventualmente en este bloque de codigo retornare un true
//         let factorChequeo = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
//         let total = 0;
//         for (let i = 0; i < factorChequeo.length; i++) {
//             let prod = ruc[i] * factorChequeo[i];
//             // total = total + prod
//             total += prod;
//         }
//         console.log("total", total);
//         let modulo = total % 11;
//         console.log("modulo", modulo);
//         let verificador = 11 - modulo;
//         console.log(verificador);
//         if (verificador == ruc[10]) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(verificarRUC("10434077171"));


// #######  EJERCICIO 03  ##########

// Una empresa tiene dregistro de las horas que trabaja diariamente 

// let pagoHora = +prompt("Cuánto es el pago por hora");

// let totalHoras = 0;

// for(let i = 1; i <=6; i++){
//     let cantDiaria = +prompt("Cuantas horas fueron hoy?");

//     totalHoras += cantDiaria;
// }

// console.log(`El trabajador tiene ${totalHoras} de horas trabajadas con un pago de ${totalHoras * pagoHora}`)

// #######  EJERCICIO 04  ##########

// ábricas “El cometa” produce artículos con claves (1, 2, 3, 4, 5 y 6). Se
// requiere un algoritmo para calcular los precios de venta, para esto hay que
// considerar lo siguiente:
// Costo de producción = materia prima + mano de obra + gastos de fabri-
// cación.
// Precio de venta = costo de producción + 45 % de costo de producción.
// El costo de la mano de obra se obtiene de la siguiente forma: para
// los productos con clave 3 o 4 se carga 75 % del costo de la materia prima;
// para los que tienen clave 1 y 5 se carga 80 %, y para los que tienen clave
// 2 o 6, 85 %.
// Para calcular el gasto de fabricación se considera que si el artículo
// que se va a producir tiene claves 2 o 5, este gasto representa 30 % sobre
// el costo de la materia prima; si las claves son 3 o 6, representa 35 %; si las
// claves son 1 o 4, representa 28 %. La materia prima tiene el mismo costo
// para cualquier clave.

// let productos = [
//     {
//         nombre: "Audifonos",
//         clave: 1,
//         materiaPrima: 20,
//     },
//     {
//         nombre: "Funda para movil",
//         clave: 2,
//         materiaPrima: 10,
//     },
//     {
//         nombre: "USB",
//         clave: 3,
//         materiaPrima: 15,
//     },
//     {
//         nombre: "Mouse Gamer",
//         clave: 6,
//         materiaPrima: 30,
//     },
//     {
//         nombre: "Teclado",
//         clave: 4,
//         materiaPrima: 120,
//     },
//     {
//         nombre: "Gráfica",
//         clave: 5,
//         materiaPrima: 200,
//     },
// ];

// function calcularManoDeObra(clave, costoMP) {
//     console.log("ejecutando mano de obra");
//     if (clave == 3 || clave == 4) {
//         return costoMP * 0.75;
//     } else if (clave == 1 || clave == 5) {
//         return costoMP * 0.8;
//     } else if (clave == 2 || clave == 6) {
//         return costoMP * 0.85;
//     }
// }

// function calcularCostoFabricacion(clave, costoMP) {
//     console.log("ejecutando costo fabricacion");
//     if (clave == 2 || clave == 5) {
//         return costoMP * 0.3;
//     } else if (clave == 3 || clave == 6) {
//         return costoMP * 0.35;
//     } else if (clave == 1 || clave == 4) {
//         return costoMP * 0.28;
//     }
// }

// function calcularCostos(arrProductos) {
//     let cProduccion = 0;
//     for (let i = 0; i < arrProductos.length; i++) {
//         //enfoquemonos en la mano de obra
//         let costoMP = arrProductos[i].materiaPrima;
//         console.log("MP", costoMP);
//         let clave = arrProductos[i].clave;
//         let costoMO = calcularManoDeObra(clave, costoMP);
//         let costoCF = calcularCostoFabricacion(clave, costoMP);

//         cProduccion += costoMP + costoMO + costoCF;
//         // console.log(`El costo total de ${arrProductos[i].nombre} es S/ ${cProduccion}`);
//     }
//     return cProduccion;
// }

// console.log(calcularCostos(productos));

// #######  EJERCICIO 05  ##########

let ventas = [
    {
        nombre: "Televisor",
        precio: 1200
    },
    {
        nombre: "Radio",
        precio: 400
    },
    {
        nombre: "Smartphone",
        precio: 1800
    },
    {
        nombre: "Grafica",
        precio: 1800
    },
    {
        nombre: "Exprimidor",
        precio: 100
    },
    {
        nombre: "Tablet",
        precio: 550
    },
    {
        nombre: "Monitor",
        precio: 600
    },
]

function calcularReporte(arrVentas) {
    // T1 de 1000 a +
    // T2 de 500 a 1000
    // T3 de 0 a 500
    // Cada una necesita saber el total
    // y aparte la suma de los totales
    let T1 = 0
    let T2 = 0
    let T3 = 0

    for (let i = 0; i < arrVentas.length; i++) {
        if (arrVentas[i].precio > 1000) {
            T1 += arrVentas[i].precio
        } else if(arrVentas[i].precio > 500){
            T2 += arrVentas[i].precio
        } else{
            T3 += arrVentas[i].precio
        }
    }
    return {
        mayorAMil: T1,
        mayorA500: T2,
        menorA500: T3,
        totalGlobal: T1 + T2 + T3,
    }
}

console.table(calcularReporte(ventas))

let datos = calcularReporte(ventas)

let cuerpo = document.querySelector("body")

let p = document.createElement("p")

p.innerHTML = `El monto global es ${datos.totalGlobal}`

cuerpo.appendChild(p)