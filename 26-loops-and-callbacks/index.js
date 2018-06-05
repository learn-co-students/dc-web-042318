// print out each pokemon
// console.log(pokemon);

// forEach is for the side effects
// pokemon.forEach(function(item) {
// console.log(item);
// });

// possibilities
// - a new array
// - undefined
// - last pokemon
// - same array

// console.log("what is a?", a);

// print out pokemon names

function printName(poke) {
  console.log(poke.name);
}

// same thing as the other
// something else

function myForEach(list, func) {
  for (item of list) {
    func(item);
  }
}

// myForEach(pokemon, printName);
// pokemon.forEach(printName);

function getName(item) {
  return item.name;
}

// get a list of names
let listOfNames = pokemon.map(getName);

// find all the grass type pokemon

const detectGrassType = poke => poke.types.includes("grass");

// let grassPokemon = pokemon.filter(detectGrassType);
// should see some number of elements (hopefully > 0, < full length)

function detectOfType(arr, type) {
  function typeDetector(poke) {
    return poke.types.includes(type);
  }
  // return pokemon.filter(typeDetector);
  return pokemon.filter(poke => poke.types.includes(type));
}
