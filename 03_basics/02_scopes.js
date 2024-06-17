var c=300;
function hello(){
    let a = 10;
    const b = 20;
    var c = 30; 
    console.log("inner : ",a);
}

if(true){
    let a =10;
    const b=30;
    var c=20;
}
// console.log(a);
// console.log(b);
console.log(c);
hello();

function one(){
    const username="Jayesh";
    function two(){
        const website='Youtube'
        console.log(username+" "+website);
    }
    // console.log(website);
    two();
}
// console.log(username);
one();

if(true){
    const name="dolly";
    if(true){
        const website="youtube";
        console.log(name+" "+website);
    }
    // console.log(website);
}
// console.log(name);

//++++++++intresting++++++++++
console.log(AddOne(5));
function AddOne(num){
    return num+1;
}

console.log(Addtwo(7));
function Addtwo(num2){
    return num2+2;
}


// but if you declare the function with the help of expression then you can't call before the declaration

// console.log(Addthree(4));
// const Addthree=function(num){
//     return num+3
// }