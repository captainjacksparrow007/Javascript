const user={
    username:"Jayesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} is here`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username="dolly";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username="Jayesh";
//     console.log(this.username);
// }
// chai();

// const chai2=function(){
//     let name="Jayesh"
//     console.log(this.name);
// }
// chai2();

// const chai=()=>{
//     let name="jayesh";
//     console.log(this.name);
// }
// chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(2,5));

// const addTwo=(num1,num2)=> num1 + num2;
// console.log(addTwo(7,8));

// const addTwo=(num1,num2)=> ( num1+num2)
// console.log(addTwo(7,8));

const addTwo=(num1,num2)=>({username:"hitesh"});
console.log(addTwo(7,8));

