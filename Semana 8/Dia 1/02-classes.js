//Class => molde, plano, fábrica
class Pokemon {
    // Caracteristicas que tiene este plano
    // Nombre;
    // Tipo;
    // Ataque;
    // Defensa;
    // PuntosDeVida;

    // Toda clase va a tener un metodo constructor
    // Este constructor se ejecuta automáticamente al momento de llamar a la clase
    constructor(nombre, tipo, ataque, defensa, puntosvida){
    // Se va a encargar de construir el objeto
    // this hace referencia a si mismo
        this.Nombre = nombre
        this.Tipo = tipo
        this.Ataque = ataque
        this.Defensa = defensa
        this.PuntosDeVida = puntosvida

        this.aparecer()
    }

    aparecer(){
        console.log(`Un ${this.Nombre} salvaje apareció`)
    }
        

    atacar(){
        console.log(`${this.Nombre} ataca con ${this.Ataque}`)
    }

}

let pokemon1 = new Pokemon("Pikachu", "Eléctrico", 30, 20, 60)

let pokemon2 = new Pokemon("Dragonite", "Dragon", 70, 80, 120)

console.log(pokemon1.Tipo)
console.log(pokemon2.atacar())
