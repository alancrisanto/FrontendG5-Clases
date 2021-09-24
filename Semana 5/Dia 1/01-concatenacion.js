let a = 1;
let b = "4";

let c = a + b;

console.log(typeof c);

let nombre = "Alan";

let apellido = "Crisanto";

let nombreCompleto =  nombre + " " + apellido;

console.log(nombreCompleto)

// Template String / Template Literal

let edad = 31

let texto = `Hola Soy ${nombre} ${apellido} y soy de Piura,
tengo ${edad} años`
// `` Respeta el espacio 

console.log(texto)

// Prompt, captura datos del usuario

let cantidadMascotas = prompt(`Hola ${nombre} Cuántas mascotas tines?`);

console.log(`Mascotas: ${cantidadMascotas}`);

console.log(typeof cantidadMascotas);

let convertido = +cantidadMascotas;

console.log(typeof convertido);

let convert = parseInt(cantidadMascotas);
// parseFloat para decimales

console.log(typeof convert);

console.log(typeof convertido, convertido, "Papa")







