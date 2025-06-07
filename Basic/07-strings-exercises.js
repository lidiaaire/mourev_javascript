// 1. Concatena dos cadenas de texto
let myName = "vivi";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// 2. Muestra la longitud de una cadena de texto
console.log(greeting.length);

// 3. Muestra el primer y último carácter de un string
console.log(greeting[0]);
console.log(greeting[10]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
// 5. Crea una cadena de texto en varias líneas
let message = `Hola esta
es 
mi
primera cadena
de texto`;
console.log(message);

// 6. Interpola el valor de una variable en un string
let nombre = "Lidia";
let saludo = `Hola, ${nombre}!`;
console.log(saludo);
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let texto = "Hola mundo";
let resultado = texto.replace(/ /g, "-");
console.log(resultado);
// 8. Comprueba si una cadena de texto contiene una palabra concreta
let frase = "Hola Mundo, estoy practicando";
let contiene = frase.includes("estoy");
console.log(contiene);
// 9. Comprueba si dos strings son iguales
let a = "hola";
let b = "hola";
console.log(a === b);
// 10. Comprueba si dos strings tienen la misma longitud
let a2 = "hello";
let b2 = "world";
console.log(a2.length === b2.length);
