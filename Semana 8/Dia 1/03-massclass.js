class Animal{

    constructor(nombre, tamaño, velocidad){
        this.Nombre = nombre
        this.Tamaño = tamaño
        this.Velocidad = velocidad
    }
    correr(){
        console.log(`${this.Nombre} corre a ${this.Velocidad} m/s`)
    }
    
}

let Panda = new Animal("Panda", "Grande", 15)
console.log(Panda);

class Roedor extends Animal{
    constructor(nombre, tamaño, velocidad, saltar, roer){
        // al constructor padre
        super(nombre, tamaño, velocidad)
        this.Saltar = saltar
        this.Roer = roer
    }

    esconder(){
        console.log(`${this.Nombre} saltar a ${this.Saltar} cm de altura`)
    }
}

let Raton = new Roedor("Mickey", "Pequeño", 30, 50, "mucho")

console.log(Raton)
console.log(Raton.esconder())
console.log(Raton.correr())

