// Array

// Declaracion

let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

// Inicializacion

myArray = [3];
myArray2 = new Array(3);

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4);

console.log(myArray);
console.log(myArray2);

myArray = ["lidia", "vivi", "curry", 29, true];
myArray2 = new Array("lidia", "vivi", "curry", 29, true);

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3);
myArray2[2] = "lidia";
// myArray2[0] = "vivi";
myArray2[1] = "curry";
myArray2[4] = "curry";

console.log(myArray2);

myArray = [];
myArray[2] = "lidia";
// myArray[0] = "vivi";
myArray[1] = "curry";

console.log(myArray);

// Metodos comunes

myArray = [];

// push y pop

myArray.push("lidia"); // Agrega elemento
myArray.push("garcia");
myArray.push("Torregrosa");
myArray.push("29");

console.log(myArray);

myArray.pop(); //elimina el ultimo de push

console.log(myArray);

console.log(myArray.pop()); //Elimina el ultimo y lo devuelve
myArray.pop();

console.log(myArray);

// shift y unshift

console.log(myArray.shift());
console.log(myArray);

myArray.unshift("lidia", "Torregrosa");
console.log(myArray);

// lenght

console.log(myArray.length);

// clear

myArray = [];
console.log(myArray);

// slice

myArray = ["lidia", "vivi", "curry", 29, true];

let myNewArray = myArray.slice(1, 3);

console.log(myArray);
console.log(myNewArray);

// splice

myArray.splice(1, 3);
console.log(myArray);

myArray = ["lidia", "vivi", "curry", 29, true];

myArray.splice(1, 2, "Nueva entrada");
console.log(myArray);
