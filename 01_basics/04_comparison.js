console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // comparison and equality works differently , comparison will convert null to a number treating it as 0 that's why null >= 0 is true and first is false

// but undefined will always give false

console.log("2" === 2);// this will give false because it will also check datatype of both the numbers