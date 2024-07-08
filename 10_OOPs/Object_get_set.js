const User={
    _email:"j@gmail.com",
    _password:"abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email=value;
    }
}

// console.log(User.email);

// factory function
const tea=Object.create(User);
console.log(tea.email);