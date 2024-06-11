//1. Variables (let, const)
let age = 15
const birthYear = 2008

console.log(`${age}ans, née en ${birthYear}`)

//2. Types de données (Number, String, Boolean, Null, Undefined, Object)
//String
let prenom = "Steve"
const bonjour = `Bonjour ${prenom}!`
console.log(bonjour)

//Number
let number = 8 
console.log(`Nombre:${number}`)

//Boolean
let majeur = false
console.log(`Majeur ?:${majeur}`)

//Null 
let adresse = null
console.log(`adresse:${adresse}`)

//Undefined
let taille;
console.log(taille);

//Object
let user = {
    name: "Steve",
    lastname: "Dubois",
    age: 15,
    majeur: false,
    adresse: null,
    taille: undefined,
    couleur: [bleu, rouge]
} 
console.log(user);

//3. Opérations arithmétiques de base (+, -)
let num1 = 450
let num2 = 250
console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 - num2);

console.log("-------------------");

//4. Opérateurs de comparaison (==, ===, !=, !==, <, >, <=, >=)
console.log(num1 == num2); //false
console.log(num1 === num2); //false
console.log(num1 != num2); //true 
console.log(num1 !== num2); //true
console.log(num1 < num2); //false
console.log(num1 > num2); //true
console.log(num1 <= num2); //false
console.log(num1 >= num2); //true

//5. Instructions conditionnelles (if, else, else if, switch)
if (num1 > num2) {
    console.log(`${num1} est plus grand que ${num2}`)
} else {
    console.log(`${num1} est plus petit que ${num2}`)
}

//6. Boucles (for, while, do while)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('------------');

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//7. Fonctions
function sum(a, b) {
    const test = a-b;
    return test;
}

function setage(a) {
     a.age++
     return a;
}

const logsum = sum(12,45);
console.log(user)
console.log(setage(user))
console.log(logsum); // 15

//8. Tableaux (Arrays)
let fruits = ["Pomme", "Orange", "Kiwi"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); 

//9. Objets (Objects)
let person = {
    firstName: "Elsa",
    lastName: "Petit",
    age: 21,
    city: "Lyon"
};
console.log(person.firstName)
person.age = 50

//10. Méthodes d'objet et de tableau (push, pop, shift, unshift, indexOf, etc.)
fruits.push("Ananas");
console.log(fruits[fruits.length - 1]); 
fruits.pop();
console.log(fruits[fruits.length - 1]); 
let indexof= fruits.indexOf("Orange");
console.log(indexof); 