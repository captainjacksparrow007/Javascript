// while
// let score=1;
// while(score<11){
//     console.log(score);
//     score+=2;
// }

let myArray=["flash",1,2.345,'c',true,{1:'a',2:'b'}];
let i=0;
while(i<myArray.length){
    console.log(myArray[i]);
    i++;
}
console.log(myArray.join());

let score=11;
do{
    console.log(score);
    score++;
}while(score<10);
