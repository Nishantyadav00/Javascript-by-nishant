// this keyword is used for current context
const user = {
    username: "Nishant",
    price: 999,
    welcomeMessage() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); // it will give empty object for node but in browser it will give window as it is a global value like using window

function chai(){
    let username = "Nishant"
    console.log(this.username);
}
chai()

const chai = function () {
    let username = "Nishant"
    console.log(this.username);
}

// arrow function
const chai = () => {
    let username = "Nishant"
    console.log(this);
}
chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) // we will use this in react jsx

// const addTwo = (num1, num2) => ({username: "Nishant"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()