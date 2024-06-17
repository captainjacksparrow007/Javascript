//array

const myArr=[1,2,3,4,5]
const myArr2=['Jayraj','Dhanashree','Himani','Arogya']

const myArr3=new Array(1,2,3,4);
// console.log(myArr3);
// myArr3[0]=5;
// console.log(myArr3);

//array methods
// myArr.push(5);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9,10);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));

const newArr=myArr.join();
console.log(newArr);
console.log(myArr);

// slice and splice
// console.log(myArr);
const newArr2=myArr.slice(0,4);
console.log('A',newArr2);
// console.log(myArr);
const newArr3=myArr.splice(0,4);
console.log('B',newArr3);
// console.log(myArr);