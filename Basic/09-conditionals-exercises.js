// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Lidia";
if (myName === "Lidia") {
  console.log("Lidia");
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "admin";
let password = "1234";
if (user === "admin" && password === "1234") {
  console.log("Acceso condecido");
} else {
  console.log("Acceso denegado");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = -5;

if (number > 0) {
  console.log("El numero es positivo");
} else if (number < 0) {
  console.log("El numero es negativo");
} else {
  console.log("El numero es cero");
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 29;

if (age >= 29) {
  console.log("Puedes votar");
} else {
  let faltan = 18 - age;
  console.log(`No puedes votar. Te faltan ${faltan} age`);
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let age2 = 29;
let tipo = age2 >= 18 ? "adulto" : "menor";
console.log(tipo);
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = 6;
let estacion;

if (month >= 3 && month <= 5) {
  estacion = "Primavera";
} else if (month >= 6 && month <= 8) {
  estacion = "Verano";
} else {
  estacion = "Invierno";
}

console.log(`Estamos en ${estacion}`);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let month2 = 6;
let days;

if ([1, 3, 5, 7, 8, 10, 12].includes(month2)) {
  days = 31;
} else if ([4, 6, 9, 11].includes(month2)) {
  days = 30;
} else if (month2 === 2) {
  days = 28;
} else {
  days = "Mes invalido";
}

console.log(`El mes ${month2} tiene ${days} días `);

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "es";

switch (idioma) {
  case "es":
    console.log("¡Hola!");
    break;
  case "en":
    console.log("Hello");
    break;
  case "fr":
    console.log("Bonjour!");
    break;
  case "de":
    console.log("Hallo!");
    break;
  default:
    console.log("Idioma no reconocido");
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes = 6;
let station;

switch (mes) {
  case 3:
  case 4:
  case 5:
    station = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    station = "Verano";
    break;
  case 9:
  case 10:
  case 11:
    station = "Otoño";
    break;
  case 12:
  case 1:
  case 2:
    station = "Invierno";
    break;
  default:
    estacion = "Mes invalido";
}

console.log(`Estamos en ${station}`);

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let month3 = 6;
let days2;

switch (month3) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days2 = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days2 = 30;
    break;
  case 2:
    days2 = 28;
    break;
  default:
    days2 = "Mes invalido";
}

console.log(`El mes ${month3}  tiene ${days2}`);
