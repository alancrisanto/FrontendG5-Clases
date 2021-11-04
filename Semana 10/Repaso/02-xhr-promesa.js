// En este caso no va a recibir ningun parámetro
let hacerPeticion = () => {
    return new Promise((resolve, reject) => {

        let asistente = new XMLHttpRequest();

        asistente.addEventListener("readystatechange", () =>{

            if (asistente.readyState === 4) {  // ya tengo la respuesta
                resolve(asistente.responseText);
            }
        });

        asistente.open("GET", "https://swapi.dev/api/people/1"); // Pon el Destinatario y la forma de rpta
        asistente.send(); // envía la carta
    });
}

hacerPeticion().then((rptaTexto) =>{
    console.log("rptaTexto", rptaTexto);
    console.log("Covertido", JSON.parse(rptaTexto))
})

const perdirData = async() => {
    try {
        let rpta = await hacerPeticion();
        console.log(JSON.parse(rpta))
    } catch (error) {
        console.log(error)
    }
}

perdirData();