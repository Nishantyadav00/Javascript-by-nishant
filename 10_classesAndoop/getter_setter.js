class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
// set me return nhi aata kabhi bhi , get me aata hai
    get password(){
        return `${this._password}Nishant`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("N@Nishant.ai", "abc")
console.log(hitesh.email);