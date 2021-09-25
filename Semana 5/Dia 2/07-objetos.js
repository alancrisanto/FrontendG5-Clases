let mascota = {
    nombre: "Brownie",
    raza: "Waymaran",
    color: "Marron",
    edad: 5,
    hobbies: ["Comer Gallinas", "Correr", "Ladrar"],
    comer: function(){
        console.log("ñam ñam ñam")
    },
    ladra: true
}

console.log(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.hobbies[1])
mascota.comer()

let albumMusical = {
    nombre: "After Hours",
    fechaLanzamiento: "20/03/2009",
    genero: ["Dream Pop", "Drum and Bass"],
    canciones: [
        {
            titulo: "Heartless",
            duracion: 3.21,
            autor: ["Abel Tesfaye", "Leland Mayne"],
        },
        {
            titulo: "Blinding Lights",
            duracion: 3.22,
            autor: ["Abel Tesfaye", "Leland Mayne", "Jason Quennevile"],
        },
    ],
};

console.log(albumMusical.canciones[1].autor[2]);