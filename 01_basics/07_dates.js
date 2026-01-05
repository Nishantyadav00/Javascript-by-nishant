let myDate = new Date()
console.log(myDate); // 2026-01-05T17:38:57.557Z
console.log(myDate.toString()); // Mon Jan 05 2026 17:34:44 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Mon Jan 05 2026
console.log(myDate.toLocaleString()); // 1/5/2026, 5:34:44 PM
console.log(myDate.toISOString()); // 2026-01-05T17:34:44.013Z
console.log(myDate.toLocaleDateString()); // 1/5/2026
console.log(typeof myDate); // Object

let myCreatedDate = new Date(2023,1, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toString()); // Thu Feb 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // interview question (to convert in second)

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1 );
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})