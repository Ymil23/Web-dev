
// var generateName = require('sillyname');
import generateName from "sillyName";

var sillyName = generateName();

console.log(`My Name is ${sillyName}.`);


import superheroes, { randomSuperhero } from "superheroes";

var superHero = randomSuperhero();
console.log(`I AM ${superHero}`);
