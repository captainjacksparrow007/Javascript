// for-each
const myArr=['Flash','Shaktiman',5,7,true];

// myArr.forEach(function(item){
//     console.log(item);
// })

// myArr.forEach((val)=>{
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// myArr.forEach(printMe);

myArr.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const arrObj=[
    {
        languageName:"javascript",
        shortcut:"js"
    },
    {
        languageName:"c++",
        shortcut:"cpp"
    },
    {
        languageName:"java",
        shortcut:"java"
    }
]

arrObj.forEach((item,index,arr)=>{
    // console.log(item.languageName);
    // console.log(item,index,arr);
    console.log(item);
})