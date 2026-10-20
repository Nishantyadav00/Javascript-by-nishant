// singleton - happens when you create object while using object.create
// Object.create

// object literals - multiple instance

const mySym = Symbol("key1")
const JsUser = {
    name: "Nishant",
    "full name": "Nishant Yadav",
    [mySym]: "mykey1",// if we do like mySym : "mykey1" type will be string , output will be same
    age: 18,
    location: "Chennai",
    email: "Nishant@google.com",
    isLoggedIn: false,
}

console.log(JsUser.email) // to access object
console.log(JsUser["email"]) // another way of accessing
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym]) // to access symbol in objects

JsUser.email = "Nishant@chatgpt.com"
// Object.freeze(JsUser) // we cant change this further
JsUser.email = "Nishant@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this to access any element in object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());