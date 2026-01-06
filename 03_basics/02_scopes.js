//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);    
}
console.log(a);
console.log(b);
console.log(c);

// Note : console scope and node scope is different (interview question)

function one(){
    const username = "Nishant"
    function two(){
        const website = "google"
        console.log(username);
    }
    // console.log(website); // error
    two()
}
one()

if (true) {
    const username = "Nishant"
    if (username === "Nishant") {
        const website = "Google"
        console.log(username + website);
    }
    // console.log(website); // error
}
// console.log(username); // error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // this will not give error in output
function addone(num){
    return num + 1
}


addTwo(5)// this will give error in output because of the declaration rule (hoisting)
const addTwo = function(num){
    return num + 2
}