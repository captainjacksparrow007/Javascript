//<<<-------- Object Literals -------->>>
const user={
    username:"Jayesh",
    loginCount:8,
    signIn:true,
    getUserDetails:function(){ // if you use the this keyword inside the arrow function it can't reference to the user object because it can't understand this you can use getUserDetails() this is also the correct syntax but when you give the arrow function it will not get the object...
        console.log(`Got user details from database`);
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

//<<<-------- constructors -------->>>
// const promise=new Promise((resolve,reject)=>{});
const date=new Date();
// so this the new keyword is the example of the constructor function

function userCount(username,userLoggedCount,userLoggedIn){
    this.username=username;
    this.userLoggedCount=userLoggedCount;
    this.userLoggedIn=userLoggedIn;

    this.greetings=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

// const userOne=userCount('Dolly',12,true);
// const userTwo=userCount('Jayesh',11,true);
// console.log(userOne); //so this will overwrite the values of the userCount object either you call the userTwo or not it will overWrite it.
// for resolve this we will use the new keyword

const userOne= new userCount('Dolly',12,true);
const userTwo= new userCount('Jayesh',11,true);
console.log(userOne);
console.log(userTwo);
console.log(userCount.constructor);
