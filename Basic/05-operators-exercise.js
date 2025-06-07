// 1. Crea una variable para cada operación aritmética
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(1 % 2);
console.log(1 ** 2);
let a = 1;
a++;
console.log(a);
let b = 2;
b--;
console.log(b);
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let myVariable = 4;
console.log(myVariable);
myVariable += 4;
console.log(myVariable);
myVariable -= 4;
myVariable *= 4;
myVariable /= 4;
myVariable %= 4;
myVariable **= 4;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(10 > 5);
console.log(7 >= 7);
console.log(3 < 9);
console.log(6 == 6);
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(10 < 5);
console.log(7 !== 7);
console.log(3 > 9);
console.log(6 != 6);
// 5. Utiliza el operador lógico and
console.log(5 > 10 && 15 > 20);
// 6. Utiliza el operador lógico or
console.log(5 > 10 || 15 > 20);
// 7. Combina ambos operadores lógicos
console.log((5 > 10 && 15 > 20) || 30 < 40);
// 8. Añade alguna negación
console.log(!5 > 10 && 15 > 20);
// 9. Utiliza el operador ternario
const isHot = true;
isHot ? console.log("hace calor") : console.log("no hace calor");
// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((10 + 5 > 12 && 8 * 2 === 16) || !(3 === 4));
// (15 > 12) => true
// (8 * 2 === 16) => true
// !(3 === 4) => true
// true && true || true => true
