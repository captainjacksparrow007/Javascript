class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addcourse(){
        console.log(`A course is added by the ${this.username}`);
    }
}

const chai=new teacher("chai","chai@gmail.com",123);
// console.log(chai);
chai.addcourse();
const masalaChai=new user('masalachai');
// masalaChai.addcourse(); // it can't access the child methods.
masalaChai.logMe();
chai.logMe();
console.log(masalaChai==chai);
console.log(masalaChai===chai);

console.log(chai instanceof teacher);
// console.log(chai instanceof masalaChai);
console.log(masalaChai instanceof user);