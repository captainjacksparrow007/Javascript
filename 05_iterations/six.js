// const coding=['js','cpp','rb','java','css'];

// let values=coding.forEach( (item)=>{
//     // console.log(item);
//     return item;
// })
//forEach can't return anything
// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10];

// let values2=myNums.filter((items)=> items>4);
// console.log(values2);

// you can also done this operation by using the forEach operation
// let newNums=[];
// myNums.forEach((item)=>{
//     if(item>4){
//         newNums.push(item);
//     }
// })
// console.log(newNums);

// you can use both the filter and the forEach method to give the conditions.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let details=books.filter( (bk) => bk.genre==='History');
details=books.filter((bk)=>bk.publish>2000 && bk.genre==='Science');
console.log(details);
