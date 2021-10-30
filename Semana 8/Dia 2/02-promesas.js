const hornearTorta = () => {
    // no sabemos como va el horneado de nuestra torta
    // y que eso demora en saber

    return new Promise((resolve, reject) => {
        setTimeout (() => {
            let estado = true
            if(estado == true){
                resolve("La torta esta Ready!")
            } else{
                reject("Pos se quemó la torta")
            }
        }, 5000)
    })
}

hornearTorta().then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.log(error)
})





