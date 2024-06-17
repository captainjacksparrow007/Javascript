//sigelton
// object.create

//object literals

const mysym = Symbol("key1");

let JsUser={
    name:"Jayesh",
    "full name":"Jayesh Kumar Malviya",
    course:"MCA",
    email:"jayesh@goldman.com",
    age:21,
    [mysym]:"key value1",
    location:"Indore",
    isLoggedin:false,
    lastLogin:['Monday','saturday']
}

// console.log(JsUser);
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.full name); // it is illegal it gives error

// console.log(JsUser[mysym]);
// console.log(typeof JsUser.mysym);
// console.log(typeof JsUser[mysym]);
// console.log(JsUser);

JsUser.email="jayesh@microsoft.com";
// console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.email="jayesh@linkedin.com";
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello from community");
}

JsUser.greetingTwo=function(){
    console.log(`Hello ${this.name}`);
}

// console.log(JsUser.greeting)
// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())