/**
 * Ejercicio
 * 
 * 02 tipos de hamburguesas, simple y doble
 * 
 * crear un algoritmo para pedir cualquier tipo de hamburguesa y despues mostrar el total
 * 
 * Hamburguesa Simple 5 soles
 * Hamburguesa doble 9 soles
 * 
 * A.- Qué datos necesito
 * Canitdad de simples
 * cantidad de dobles
 * precio de simples
 * precio de dobles
 * variable para finalizar el pedido
 * B.- Dónde obtengo esos datos
 * precio en variables xq ya lo tenemos
 * cantidad de dobles y simples, preguntamos al usuario
 * C.- Esos están en la forma que necesito
 * cantidades tienen que ser numérico
 */

let precioSimple = 5;
let precioDoble = 9;

let cantidadSimples = 0;
let cantidadDobles = 0;

// si es true, finaliza el pedido
let finalizar = false;

do{
    // código
    let eleccion = +prompt("Ingrese 1. para una simple, 2. para una doble y 3. para finalizar pedido")

    switch (eleccion){
        case 1:
            console.log("Una simple!!!")
            cantidadSimples ++;
            break;
        case 2:
            console.log("Una  doble!!!")
            cantidadDobles ++;
            break;
        case 3:
            finalizar = true;
            break;
        default:
            console.log("Opción incorrecta")
    }
} while(finalizar == false);

let total = precioSimple * cantidadSimples + precioDoble * cantidadDobles

console.log(`El total a pagar será de: ${total} por ${cantidadSimples} hamburguesas simples y ${cantidadDobles} por hamburguesas dobles `)

