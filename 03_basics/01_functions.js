function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}
sayMyName()// sayMyName is for reference , sayMyName() is for execution

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
// Note : after return we cant fetch anything 
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Nishant"))


// ... is also called rest operator on the basis of use it is determined that whether it is spread or rest
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Nishant",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));