interface iGato {
    nombre:string,
    color:string,
    raza:string,
    edad:number,
    personalidad:Array<string>,
    antipatico:boolean,
    tamaño:number,
    peludo:string,
}

// objeto

let gatita: iGato = {
    nombre: "Gatita",
    color: "Cafe con negro",
    raza: "Siames",
    edad: 6,
    personalidad: ["Amigable", "Seria"],
    antipatico: false,
    tamaño: 5,
    peludo: "bastante",
}

