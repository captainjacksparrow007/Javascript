const name1="Jayesh";
const repoCount=50;

console.log(name1 + repoCount + "values");
console.log(`Hello my name is ${name1} and my repocount is ${repoCount}`);

const gameName=new String("Jayesh-DJ-57");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.length);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

let newString=gameName.substring(0,4)
console.log(newString);

let anotherString=gameName.slice(4,-4);
console.log(anotherString);

let newStringOne="  Jayesh  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="www.jayesh.com";
// console.log(url.replace('s','-'));
console.log(url.includes("jay"));
console.log(gameName.split('-'));