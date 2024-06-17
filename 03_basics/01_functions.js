function sayMyName(){
    console.log("jayesh");
}
// sayMyName //reference
// sayMyName() //execute

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
// addTwoNumbers(5,7);

// function addTwonumbers(number1 , number2){
//     result=number1+number2;
//     return result;
// }

function addTwonumbers(number1 , number2){
    return number1+number2
}
// console.log(addTwonumbers(5,7));

function loginUserMessage(username){
    return `${username} welcomes to my world`;
}

// console.log(loginUserMessage());
// if a user forget to give the argument then what will do bcz it will not print anything it will print undefined so we will do
function loginUserMessage2(username){
    if(username===undefined){ // or !username
        console.log("please enter the name");
        return 
    }
    return `${username} , welcome to my world`;
}
// console.log(loginUserMessage2());
function loginUserMessage3(username="Dolly"){
    return `${username} welcome to my world`;
}
// if you give default value then the default name will be used 
// console.log(loginUserMessage3());

function addtocart(value1,value2,...num1){ //here ... it is used as rest operators it means all the rest values
    return num1;
}

console.log(addtocart(400,500,600,700));

const user={
    name1:"tv",
    price:999
}

function handleObject(anyObject){
    return `Name of the item ${anyObject.name1} and the ${anyObject.price}`;
}

console.log(handleObject(user));
// handleObject({
//     name1:"Tv",
//     price:999
// })

const myArr=[100,200,300,400];
function handleArray(GetArr){
    return GetArr[1];
}

console.log(handleArray(myArr));