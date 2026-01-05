const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // add 2nd array as an element

console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // this ... is used to represent spread same as concat

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // it will return a new array and output will be in 1D array 
console.log(real_another_array);

console.log(Array.isArray("Nishant")) // false
console.log(Array.from("Nishant")) // it will convert anything to array
console.log(Array.from({name: "Nishant"})) // interesting
//will return an empty array array because it gets confuse between whom to choose as array (key or value) 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // add all the arrays
