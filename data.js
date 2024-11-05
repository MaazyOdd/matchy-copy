/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}
animal.species = 'Boa Constrictor';
animal['name'] = 'Bowey';
animal.noises = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []
noises[0] = 'rattle'
noises[1] = 'sss'
noises.push('hiss')
noises.unshift('buzz')
noises.unshift('shriek')
console.log(noises.length)
console.log(noises.length-1)
console.log(noises)


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises
console.log(animal)
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *    Dot notation and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *    Bracket notation and array methods
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []
animals.push(animal)
console.log(animals)
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
animals.push(duck)
console.log(animals)
var wolf = { species: 'wolf', name: 'Jimmy', noises: ['woof', 'bark', 'grrr', 'yarl'] }
var cat = { species: 'cat', name: 'Catricia', noises: ['meow', 'hisss', 'prrr', 'maooo'] }
animals.push(wolf)
animals.push(cat)
console.log(animals)
console.log(animals.length)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []
// I chose an array for the data structure because it's a list of names, which also means it's a collection of strings

//Write a function called `getRandom` that takes our `animals` array 
//and returns  a random `index` of the input array, using `Math.random`

function getRandom(Array){
output = Math.floor(Math.random()) * Array.length;
return output
}

console.log(getRandom(animals))
console.log(friends)

//Using **bracket notation**, add the `friends` list as a **property** 
//also named `friends` on one of the animals in the `animals` array



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}