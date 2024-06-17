let email="jayesh@gmail.com" //true
// let email="" //false 
// let email={} //true
// let email=[] //true 
// let email=function(){} //true 

if(email){
    console.log("Got the email");
}else{
    console.log("don't get the email");
}

// flasy values 
// false 0, -0, BigInt 0n, "", null , undefined, NaN

// truthy values
// true , "0",'false'," ",[],{},function(){}

const userEmail=[];
if(userEmail.length===0){
    console.log("Array is empty");
}
const userEmail2={};
if(Object.keys(userEmail2).length===0){
    console.log("Empty object");
}

if(false=='') console.log("true");
if(false==0) console.log("true");
if(0=='') console.log(true);

// null coalescing operator ?? null or undefined
let val1;
// val1=10 ?? 20;
// val1=null ?? 20;
// val1=undefined ?? 20;
val1=undefined ?? null ?? 20;
console.log(val1);

// terniary operator
// condtion ? true : false
const teaPrice=100;
teaPrice>=80 ? console.log("Greater than 80") : console.log("less than 80");