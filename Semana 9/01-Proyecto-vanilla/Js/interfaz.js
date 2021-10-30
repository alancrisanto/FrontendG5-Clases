/**
 * Dibujar contenido
 */
const divProductos = document.getElementById("productos")

const imprimirProductos = (arregloProductos) => {

    let cardsProductos = "" // html en forma de string

    arregloProductos.forEach(({nombre, descripcion, precio, imagen, id}) => {
        let cardProd = `<div class="col-6 col-lg-3 mb-2">
                            <div class ="card">
                                <img src="${imagen}" class="img-top" alt="img">
                                <div class="card-body">
                                    <h4 class="card-title">
                                        ${nombre}
                                    </h4>
                                    <p class="card-text">
                                        ${descripcion}
                                    </p>
                                </div>    
                            </div>
                        </div>`

        cardsProductos = cardsProductos + cardProd // concatenando una y otra vez en forma de HTML String
    });

    divProductos.innerHTML = cardsProductos // el contenido HTML de divProductos 
}

export {imprimirProductos}