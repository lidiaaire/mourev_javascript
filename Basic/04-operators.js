// Operadores

// 1. Operadores Aritmetricos

let a = 5;
let b = 10;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicacion

console.log(a % b); // Modulo
console.log(a ** b); // Exponente

a++; // Incremento
console.log(a);

b--; // Decremento
console.log(b);

// 2. Operadores de asignacion

let myVariable = 2;
console.log(myVariable);
myVariable += 2;
console.log(myVariable);

myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;

// 2. Operadores de comparacion

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a == b);
console.log(a == 6); // Igualdad por valor
console.log(a == "6"); // Igualdad por valor
console.log(a == a);
console.log(a === a); // Igualdad por identidad (por tipo y valor)
console.log(a === 6);
console.log(a === "6"); //false no es el mismo esta en cadena de texto
console.log(a != 6); // Te da el booleano contrario
console.log(a !== "6");
console.log(0 == false);
console.log(1 == false);
console.log(2 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == "Hola");
console.log(0 === "");
console.log(undefined == null);
console.log(undefined === null);

// Truthy valures (valores verdaderos)

// Todos los numeros positivos y negativos menos cero
// Todas las cadenas de texto menos las vacias
// El boolean true

// Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// Nan
// El boolean true
// Cadenas de texto vacias.

// 3. Operadores logicos

// and (&&)
console.log(5 > 10 && 15 > 20); // todo false
console.log(5 < 10 && 15 < 20); // todo true
console.log(5 < 10 && 15 > 20); // Si una no se cumple = false
console.log(5 > 10 && 15 > 20 && 30 > 40);

// or (||)
console.log(5 > 10 || 15 > 20); // todo false
console.log(5 < 10 || 15 < 20); // Si se cumple uno, sera verdadero
console.log(5 < 10 || 15 > 20); // Si se cumple uno, sera verdadero
console.log(5 > 10 || 15 > 20 || 30 > 40);
console.log((5 > 10 && 15 > 20) || 30 < 40);

// not (!)
console.log(!true);
console.log(!false);
console.log(!5 > 10 && 15 > 20); // negamos su valor, obtengo lo contrario
console.log(!(5 > 10 || 15 > 20));

// 4. Operadores ternarios

const isRaining = false;
// Si ponemos true, pone que esta lloviendo y si ponemos false pone que no lo esta
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo");
