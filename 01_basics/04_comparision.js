// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==2);
// console.log("2"==2);

// console.log("2">1);
// console.log("02"=="2");

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// the reason is that the an equality check == and comparision >,<,<=,>= works differently.Comparision convert null to a number,treating as 0.That's why (3) Null >= 0 is true and (1) null > 0 false 

// console.log(undefined == 0);
// console.log(undefined != 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined <=0);

// strict check ===
console.log("2" === 2);