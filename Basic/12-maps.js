// Map

// Declaracion

let myMap = new Map();

console.log(myMap);

// Inicializacion

myMap = new Map([
  ["name", "lidia"],
  ["email", "lidiagarciatorregrosa.com"],
  ["age", "29"],
]);

console.log(myMap);

// Metodos y propiedades

// set

myMap.set("alias", "lidiaaire"); // si la clave existe se añade
myMap.set("name", "lidia"); // en clave no hay repetido si hay en mapa
console.log(myMap);

// get

console.log(myMap.get("name"));
console.log(myMap.get("subname"));

// has = para ver si existe

console.log(myMap.has("subname"));
console.log(myMap.has("age"));

// delete

myMap.delete("email");
console.log(myMap);

// keys, values y entries

console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

// size

console.log(myMap.size);

// clear

myMap.clear();
console.log(myMap);
