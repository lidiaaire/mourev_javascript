// 1. Escribe un comentario en una línea
// Hello World

const { getRandomValues } = require("crypto")

// 2. Escribe un comentario en varias líneas

// Hello
// World
// en 
// varias
// lineas

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

//String

let name = "lidi"

// Number 

let age = 29

// Boolean 

let IsHeroe = true
let IsVillano = false

// Undefined 

let undefinedValue
console.log(undefinedValue)

// Null

let nullValue
console.log(nullValue)

// BigInt

let myBigInt = 111654654654864894646516546546546
let myBigInt2 = 111654654654864894646516546546546n

// Symbol 

let mySymbol = "ok"
console.log(mySymbol)

// 4. Imprime por consola el valor de todas las variables
console.log(name)
console.log(age)
console.log(IsHeroe)
console.log(IsVillano)
console.log(undefinedValue)
console.log(nullValue)
console.log(myBigInt)
console.log(myBigInt2)
console.log(mySymbol)
// 5. Imprime por consola el tipo de todas las variables
console.log (typeof name)
console.log(typeof age)
console.log(typeof IsHeroe)
console.log(typeof IsVillano)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)
console.log(mySymbol)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

let name2 = "Curry"

let age2 = 2

let isStudent = false

let undefinedValue2 
console.log (undefinedValue2)

let nullValue2
console.log(nullValue2)

let myBigIntCurry = 5464651561654545465454

let mySymbolCurry = "currillo"
console.log("currrillo")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

let name3 = 20

let age3 = "Treinta"

let isStudentNow = null

let undefinedValue3 = ("MyName: Lidi")
console.log(undefinedValue3)

let myBigInt3 = "muygrande"
console.log(myBigInt3)

let mySymbol2 = 1234
console.log (mySymbol2)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
// String
const NOMBRE = "Lidia";

// Number
const EDAD = 30;

// Boolean
const ES_PROGRAMADORA = true;

// Undefined (no se recomienda con const, pero se puede simular)
const DIRECCION = undefined;

// Null
const PAREJA = null;

// BigInt
const NUMERO_GRANDE = 1234567890123456789012345678901234567890n;

// Symbol
const IDENTIFICADOR = Symbol("id");

// 9. A continuación, modifica los valores de las constantes

const nname = "Cheeto"

const aage = "uno"

const IsOrange= true

const parejass = {
    namess: "ViviyJagger"
}

const bignumber = 55646468486767897646n 

const Ident = Symbol ("jaja")

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse