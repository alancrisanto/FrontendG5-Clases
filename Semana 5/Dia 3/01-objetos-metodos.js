let restaurante = {
    nombre: "Alechita Kitchen Warrior ",
    platillos: [
        {
            id: 1,
            nombrePlatillo: "Alitas BBQ",
            precio: 15,
        },
        {
            id: 2,
            nombrePlatillo : "Hamburguesa",
            precio: 18,
        },
        {
            id: 3,
            nombrePlatillo: "Pizza",
            precio: 40,
        },
    ],
    mostrarPlatillos: function (){
        // Método, función asiganada a un objeto
        console.log(restaurante.platillos)
    },
};

restaurante.mostrarPlatillos();

let jugador = {
    nombre: "Dybala",
    nacionalidad: "Argentino",
    posicion: "Volante, Delantero",
    estatura: 1.85,
    correr: function(){ //método
        console.log("Corre corre correee")
    },
    patear: function(){ // método
        console.log("pateaaaaa")
    },
}

jugador.correr();