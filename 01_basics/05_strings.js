const name = "Nishant"
const repoCount = 1

// console.log(name + repoCount + " Value"); - Old Style

// string interpolation
console.log(`Hello my name is ${name } and my repo count is ${repoCount}`); // New style and currently widely used

const gameName = new String('Nishant-ny-com')// new keyword is used for using objects in javascripts

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));// we will paas position
console.log(gameName.indexOf('s'));//we will paas character

const newString = gameName.substring(0, 4)// index 4 is not included
console.log(newString);

const anotherString = gameName.slice(-8, 4) // we can also give -ve index in this substring does not take
console.log(anotherString);

const newStringOne = "   Nishant    "
console.log(newStringOne);
console.log(newStringOne.trim());// trim unnecessary characters on both the ends

const url = "https://Nishant.com/Nishant%20yadav"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // checks whether the string is present or not

console.log(gameName.split('-'));