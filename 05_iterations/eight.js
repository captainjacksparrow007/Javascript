//reduce

let myArr=[1,3,4,5]

let myAcc=myArr.reduce((acc,curr)=>{
    // console.log(acc,curr);
    return acc+curr;
},0);
console.log(myAcc);

let myAccount=myArr.reduce((acc,curr)=>acc+curr,0);
console.log(myAccount);

let shoppingCart=[
    {
        itemName:"RedTape Shoes",
        price:1770
    },
    {
        itemName:"Sony Bravo",
        price:177070
    },
    {
        itemName:"Shirt",
        price:770
    },
]

const myCart=shoppingCart.reduce((acc,item)=> acc+item.price,0);
console.log(myCart);