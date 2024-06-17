// imergency invoked function

(function chai(){
    //named iife
    console.log(`DB is connected`)
})(); // this ; should be there oterwise it will generate error if other iife is also there

((name)=>{
    console.log(`DB is Connected ${name}`);
})('Jayesh');

