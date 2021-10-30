let hornearTorta = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("torta ready!")
            } else{
                reject("Se quemó")
            }
        }, 5000)
    })
}

let prepararGlaseado = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Glaseado listo")
            // reject("Se quemó el microondas")
        }, 3000)
    })
}

let cubrirTorta = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // resolve("Torta decorada")
            reject("Pide rappi no mas")
        }, 4000)
    })
}

hornearTorta()
.then((tortaHorneada)=>{
    console.log(tortaHorneada)
    // tuvimos exito con la torta, entonces vamos por lo sgte
    
    // retornar otra promesa
    return prepararGlaseado()
})
.then((glaseadoListo)=>{ //este then es de glaseado
    console.log(glaseadoListo)
    return cubrirTorta()
})
.then((tortaDecorada)=>{ // este then es de cubirTorta
    console.log(tortaDecorada)
})
.catch((tortaMala)=>{ // funciona para todas las promesas que estén detrás
    // cuando detecta un reject en cualquiera de las promesas se corta el proceso
    console.log(tortaMala)
})