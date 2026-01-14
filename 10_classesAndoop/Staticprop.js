class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const Nishant = new User("Nishant")
// console.log(Nishant.createId()) // Error : createId is not a function 

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const Mobile = new Teacher("Mobile", "My@phone.com")
console.log(Mobile.createId()); // Error : createId is not a function