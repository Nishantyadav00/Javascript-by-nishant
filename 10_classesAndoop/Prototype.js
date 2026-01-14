// let myName = "Nishant     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Nishant = function(){
    console.log(`Nishant is present in all objects`);
}

Array.prototype.heyNishant = function(){
    console.log(`Nishant says hello`);
}

// heroPower.Nishant()
// myHeros.Nishant()
// myHeros.heyNishant()
// heroPower.heyNishant()