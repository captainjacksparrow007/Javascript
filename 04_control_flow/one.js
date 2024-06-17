//if 
const isUserLoggedIn=true;
const temperature=41;

// > , < , == , != , !== , ===
// if(2===2){
//     console.log(true);
// }

// if(2!==3){
//     console.log(true);
// }
// if(2!=="2"){
//     console.log(true);
// }

if(temperature<50){
    console.log("tempreature is less than 50");
}
else{
    console.log("Not less than 50");
}

const score=200;

if(score>100){
    let power="fly";
    console.log(`Power : ${power}`);
}
// it will give error bcz the scope of power variable is only in the if block and if the power is declare with var then it can access
// console.log(`Power : ${power}`);

let balance=1000;
//implicit function single line
if(balance>500) console.log("test");
//you can use multiple lines just use the comma to seperate the code but it is not good practice;
// if(balance>500) console.log("test"),console.log("test2");

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750 but greater than 500");
// }else if(balance<900){
//     console.log("less than 900 and greater than 750");
// }else{
//     console.log("less than 1200 and greater than 900");
// }

const userLoggedIn=true;
const debitCard=true;
const googleLoggedIn=false;
const emailLoggedIn=true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy");
}
if(googleLoggedIn || emailLoggedIn){
    console.log("allow access");
}