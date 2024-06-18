let myObject={
    js:"javascript",
    cpp:"C++",
    java:"java",
    swift:"swift",
    rb:"ruby"
}

for(let key in myObject){
    console.log(`${key} is shortcut of ${myObject[key]}`);
}

for(let [key,value] of Object.entries(myObject)){
    console.log(`${key} is shortcut of ${value}`)
}

// for of basically iterable over value of objects like array map set string
// for in basically iterable over keys of objects like objects

// let myArr=[1,2,4,5,6]
// for (const key in myArr) {
//     console.log(key)
// }
// so we don't use for in for the array 

let map=new Map();
map.set("IN","India");
map.set("US","United States of America");
map.set("Fr","France");

// for(let [key,value] of map){
//     console.log(key,value);
// }
// for(let [key,value] in map){
//     console.log(key,value);
// }
// so for in is not for the map also
