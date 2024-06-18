// for of : mainly operate on objects and array 
// [" ",1,1.2,true] array
// [{},{},{}] objects of array

// let myArr=[5,"Jayesh",7,"Dolly",true];
// for(let i of myArr){
//     console.log(i);
// }
// console.log(myArr.join());

// you can also do this on the string 
// let str="Jayesh Kumar Malviya";
// for (const iterator of str) {
//     if(iterator==" "){
//         continue;
//     }
//     console.log(`the letter ${iterator}`);
//}

// let obj={
//     1:"a",
//     2:"jayesh"
// }

// for(const [iterator,i] of Object.entries(obj)){
//     console.log(`the values ${iterator},${i}`);
// }

// Map
// it is an object which takes the unique value in order

const map=new Map();
map.set('In',"India");
map.set("USA","United States of America");
map.set("Fr","France");

// console.log(map);
// for(let m of map){
//     console.log(m);
// }

for(let [key,value] of map){
    console.log(`${key} :- ${value}`);
}

let obj={
    game1:"NFS",
    game2:"GTA"
}

for(let [key,value] of Object.entries(obj)){
    console.log(`${key} :- ${value}`);
}

// console.log(typeof obj.game1);

