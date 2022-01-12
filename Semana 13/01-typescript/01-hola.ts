let saludo = "Hola Mundo";

console.log(saludo);

// tipado

let texto:string = "Chifa con wantan";

let cantidad:number = 19;

let teQuiere:boolean = false;

let regalos:Array<string> = ["Flores", "Chocolates", "Peluches", "PSP"];
let random:any = undefined; // basicamente cualquier cosa

let random2:unknown = {nombre:"Backus"} //acepta cualquier cosa menos null o undefined

let sumar = (num1:number, num2:number):number => {
    return num1 + num2
}

console.log(sumar(10, 200))