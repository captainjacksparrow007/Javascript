// let score="33abc"
// let score=null
// let score=undefined
// let score=true


// why we convert things because from frontend we don't know which type it send it may be int it may be string so we have to typecaste or convert it.

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber=Number(score);

// console.log(typeof valueInNumber);

// but suppose you are giving a string 33abc and typecast it so what it gives you it gives the NaN in output bcz it can't typecase it to the number 

// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 and false=> 0
// null => 0
// undefined => NaN

// boolean
// let test2=1
// let test2=0 // it gives the false
// let test2="" // empty string gives false 
// let test2="J" // value string gives true 

// let valueInBoolean=Boolean(test2)
// console.log(valueInBoolean)

// String
let ValueforString=33
let valueInString=String(ValueforString)

console.log(valueInString)
console.log(typeof(valueInString))