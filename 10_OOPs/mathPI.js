const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor);

// so you can see that using this you will get the writable,enumerable,configurable all false that the value should'nt be change not because it is const because it property of writable and enumerable is false

const Chai={
    name:"chai aur code",
    playlist:"react.js",
    getGreetings:function(){
        console.log(`welcome to ${this.name}`);
    },
}

const propertyNormal=Object.defineProperty(Chai,"name",{
    writable:false,
    enumerable:false
})
// console.log(propertyNormal);
// Chai.getGreetings();
// for (const [key,value] of Object.entries(Chai)) {
// if(key!=function()){    
// console.log(`${key} :${value}`);} //the name key and its value can't be shown while iterating
// }
console.log(Chai.name);
Chai.name="Jayesh anupa is here"; // it can't be change because we change the property here of name by using the defineProperty method;
console.log(Chai.name);