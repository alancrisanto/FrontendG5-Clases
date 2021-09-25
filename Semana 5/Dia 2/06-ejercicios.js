// Inventarios

/**
 * Una bodega quiere hacer un inenario de sus productos
 * Actualmente vende 3 productos, gaseosa, leche, galleta
 * Queremos saber por cada tipo de producto, cuántos tiene en existencia
 * Eso si, sabemos el total de productos pero no su cantidad correspondiente a cada tipo
 */

/**
 * Descomposición
 * Manejamos 03 productos
 * Dice que sabemos el total de todo pero no por tipo 
 * tendremos que preguntar producto por producto
 * 
 * A- Que datos necesito
 * total de galletas + leche + galletas
 * Contar por tipo
 * 
 * B- De dónde obtengo la información
 * Se lo pregunto al usuario
 * 
 * C- Estan en la forma que necesito
 * 
 * Necesito contar 1 x 1, number
 */

let CantProductos = +prompt("Cuántos productos en total tienes")

let gaseosa = 0;
let leche = 0;
let galletas = 0;

// Voy a preguntar una y otra vez

for (let i = 0; i < CantProductos; i++){
    let producto = +prompt("Ingrese 1.Gaseosa, 2.Leche, 3. Galleta")

    switch (producto){
        case 1:
            gaseosa = gaseosa +1
            break;
        case 2:
            leche++
            break;
        case 3:
            galletas++
            break;
        default:
            alert("Número erróneo")
            i--
            // i-- => i = i - 1
    }
}

console.log(`En total hay:
                Gaseosas: ${gaseosa}
                Leche: ${leche}
                Galletas: ${galletas}`)