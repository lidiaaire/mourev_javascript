// 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "elefante", "tigre", "jirafa"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final
let animales2 = ["perro", "gato", "elefante", "tigre", "jirafa"];

animales2.unshift("oso");
animales2.push("leon");
console.log(animales2);

// 3. Elimina el que se encuentra en tercera posición
let animales3 = ["perro", "gato", "elefante", "tigre", "jirafa"];

animales3.splice(2, 1);
console.log(animales3);

// 4. Crea un set que almacene cinco libros
let libros = new Set([
  "Cien años de soledad",
  "1984",
  "El principito",
  "Don Quijote",
  "Harry Potter",
]);
console.log(libros);

// 5. Añade dos más. Uno de ellos repetido

libros.add("Cronicas de una muerte anunciada");
libros.add("1984");
console.log(libros);

// 6. Elimina uno concreto a tu elección
libros.delete("El principito");

console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);

console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (meses.has(5)) {
  console.log(`El mes 5 es ${meses.get(5)}]`);
} else {
  console.log("El mes numero 5 no existe en el mapa");
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["Junio", "Julio", "Agosto"]);

console.log(meses.get("verano"));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let frutas = ["manzana", "pera", "plátano", "manzana", "kiwi"];

frutasSet = new Set(frutas);

myMap = new Map();
myMap.set("frutas", frutasSet);

console.log(myMap.get("frutas"));
