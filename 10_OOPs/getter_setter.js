class User{    
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get password(){
        // return `${this._password.toUpperCase()}Jayesh`;
        return `${this._password.toUpperCase()}jayesh`;
    }

    // set password(value){ // when you give exact same variable in different methods then it would be confusion between the construtor and the method it ran into the race condition.
        // this.password=`${value}Jayesh`;
        // this._password=`${value}`;
    // }

    set password(value){
        this._password=value;
    }

    get email(){
        return `${this._email.toUpperCase()}Yahoo`;
    }

    set email(value){
        this._email=value;
    }
}

const newUser=new User("j@gmail.com","abc");
console.log(newUser.password);
console.log(newUser.email);