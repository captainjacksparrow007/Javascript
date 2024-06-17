// dates
let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2024,0,23);
// let myCreatedDate=new Date(2024,0,23,5,3);
let myCreatedDate=new Date("01-14-2024");
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleDateString());

let TimeStamp=Date.now();
// console.log(TimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate);