const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6) // insert at back
myArr.push(7)
myArr.pop() // delete last element

myArr.unshift(9) // insert at front
myArr.shift() // delete at front

console.log(myArr.includes(9));
console.log(myArr.indexOf(3)); // if element do not exist then it will give output as -1

const newArr = myArr.join() // changes type of array to string

console.log(myArr);
console.log(newArr);


// slice, splice

console.log("A :", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B :", myArr); // slice do not change the original array

const myn2 = myArr.splice(1, 3) // splice also manipulate the original array and it take out the portion which is being manipulated
console.log("C :", myArr);
console.log(myn2);

console.log("D :", myArr);