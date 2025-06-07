// set

// Declaracion

let mySet = new Set();

console.log(mySet);

// Inicializacion

mySet = new Set([
  "lidia",
  "vivi",
  "curry",
  29,
  true,
  "lidiagarciatorregrosa@gmail.com",
]);

console.log(mySet);

// Metodos comunes

// add y delete

mySet.add("htps://moure.dev");

console.log(mySet);

mySet.delete("htps://moure.dev");

console.log(mySet);

console.log(mySet.delete("lidia"));
console.log(mySet.delete(4));

console.log(mySet);

// has

console.log(mySet.has("lidia"));
console.log(mySet.has("vivi"));

// size
console.log(mySet.size);

// Convertir un set a array

let myArray = Array.from(mySet);
console.log(myArray);

// Convertir un array a un set

mySet = new Set(myArray);
console.log(mySet);

// No admite duplicados

mySet.add("lidiagarciatorregrosa@gmail.com");
mySet.add("lidiagarciatorregrosa@gmail.com");
mySet.add("lidiagarciatorregrosa@gmail.com");
mySet.add("LidiaGarciatorregrosa@gmail.com");
console.log(mySet);
