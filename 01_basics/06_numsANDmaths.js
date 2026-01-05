const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // for this it will give output in decimal

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // round off in decimal part , for this eg it will give 123.8

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // give output in +ve number
console.log(Math.round(4.6)); // basically round-off
console.log(Math.ceil(4.2)); // it will give next value like 5 for this
console.log(Math.floor(4.9)); // it will give same value like 4
console.log(Math.min(4, 3, 6, 8)); //gives min value
console.log(Math.max(4, 3, 6, 8)); // gives max value

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

console.log(Math.floor(Math.random()* 10 + 1)+ min);