// loops o bucles

// 1. for

for (let i = 0; i < 5; i++) {
  console.log(`Hola ${i}`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Elemento: ${numbers[i]}`);
}

// 2. while

let i = 0;
while (i < 5) {
  console.log(`Hola ${i}`);
  i++;
}

// Bucle infinito (while (true))

while (true) {}

// 3. do while

i = 6;
do {
  console.log(`Hola ${i}`);
  i++;
} while (i < 5);

// 4. for of

myArray = [1, 2, 3, 4, 5];

mySet = new Set([
  "lidia",
  "vivi",
  "jagger",
  29,
  true,
  "lidiagarciatorregrosa@gmail.com",
]);

myMap = new Map([
  ["name", "lidia"][("email", "lidiagarciatorregrosa@gmail.com")][("age", 29)],
]);

for (let valor of myArray) {
  console.log(valor);
}
for (let valor of mySet) {
  console.log(valor);
}
for (let valor of myMap) {
  console.log(valor);
}

console.log("¡Hola desde 14-loops.js!");

console.log("✅ ¡Hola desde Code Runner!");

console.log("🔁 PRUEBA DEFINITIVA");

console.log("✅ Ahora sí Code Runner ejecuta lo que editas");

console.clear();
console.log("💥 ESTA ES LA VERSIÓN CORRECTA DE 14-LOOPS.JS");
