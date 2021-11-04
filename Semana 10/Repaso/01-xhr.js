let hacerPeticion = (tareaFinal) => {
    let asistente = new XMLHttpRequest();

    // Solo estamos escuchando al evento, no estamos ejecutando nada
    // Asistente instrucciones de lo que tiene que hacer
    asistente.addEventListener("readystatechange", () => {
        switch(asistente.readyState){
            case 1:
                console.log("open", asistente.readyState);
                break;
            case 2:
                console.log("send", asistente.readyState);
                break;
            case 3:
                console.log("recepcion", asistente.readyState)
                break;
            case 4:
                console.log("respuesta del server", asistente.readyState)
                // me avisas cuando el destinatario responda
                console.log("estatus", asistente.status)
                console.log("respuesta", asistente.responseText)

                tareaFinal(asistente.responseText)
                break;
            default:
                console.log("Algo pasó")
        }
    });
    asistente.open("GET", "https://swapi.dev/api/people/1"); //pon el dest y la forma de envio
    asistente.send(); // envía la carta
}

const convertirJs = (rptaJson) => {
    console.log(JSON.parse(rptaJson))
}

hacerPeticion(convertirJs);