// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// to remove global scope pollution we use IIFE
// global scope pollution means if we define any variable in global scope it can be accessed from anywhere in the code which may lead to unwanted changes in the variable value
//1st() function call , 2nd() execution // ()()

// to write more than one iife we use ; to separate these iife , if we dont use it , it will throw error

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Nishant');