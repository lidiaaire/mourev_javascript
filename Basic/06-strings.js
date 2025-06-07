// Strings

// 1. Concatenación

let myName = "lidia";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// 2. Longitud
console.log(greeting.length); //te dice el tamaño de la cadena de texto

// 3. Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[11]);

// 4. Metodos comunes
console.log(greeting.toUpperCase()); //todo a mayusculas
console.log(greeting.toLowerCase()); //todo a minusculas
console.log(greeting.indexOf("Hola")); //Indica en que momento esta el termino
console.log(greeting.indexOf("lidia")); //Indica en que momento esta el termino
console.log(greeting.indexOf("MoureDev")); //No sale.. Indica en que momento esta el termino
console.log(greeting.includes("Hola")); // comprueba si existe
console.log(greeting.includes("lidia"));
console.log(greeting.includes("MoureDev"));
console.log(greeting.slice(0, 10)); // Te imprime unicamente los caracteres que le indicas
console.log(greeting.replace("lidia", "Brais")); // Busca y sustituye

// 5. Template literals (plantillas literales)

let message = `Hola este
es 
mi
curso de Javascript`; // Si se usa con comillas invertidas, se puede poner en varias lineas

console.log(message);

let email = "lidiagarciatorregrosa@gmail.com";

console.log(`Hola, ${myName} Tu email es ${email}`);
