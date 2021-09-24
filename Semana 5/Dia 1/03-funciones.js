// Ambito global todo el documento

let constante = 2

function calAreaTriangulo(base, altura){
    // Ambito Scope
    // ambito local solo dentro de esta función
    let mivar = 1000;

    let area = base * altura / constante;

    console.log("mi variable", mivar)
    
    return area
}

let resultado = calAreaTriangulo(50, 15)

console.log(resultado)
