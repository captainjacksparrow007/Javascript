const myheroes=['thor','spiderman'];

const heroPower={
    thor:'hammer',
    spiderman:'sling',
    power:function(){
        console.log(`power of spidy is ${this.spiderman}`);
    }
}

Object.prototype.jayesh=function(){
    console.log(`hello i am here`);
}

Array.prototype.heyJayesh=()=>{
    console.log(`Hello again we are here`);
}

function helloh(){
    console.log(`function`);
}
myheroes.jayesh();
heroPower.jayesh();
myheroes.heyJayesh();
// heroPower.heyJayesh()
// so we can't make the array prototype used by the upper layer object but the object prototype can be used by the array 
helloh();

Function.prototype.hellohi=()=>{
    console.log(`you re in the function`);
}
// myheroes.hellohi();
helloh.hellohi();

//inheritence
const user={
    username:'dolly',
    password:'jayesh'
}
const teacher={
    makeVideo:true
}

const teacherAssistant={
    isAvailable:false
}

const TAsupport={
    makeAssignments:'js Assignments',
    fullTime:true,
    __proto__:teacherAssistant //__proto__ is  used to give the properties of other objects to it
}

// you can write it in multiple ways,
teacher.__proto__=user;

// console.log(teacherAssistant.username);
//modern syntax of __proto__
Object.setPrototypeOf(teacherAssistant,teacher);

console.log(teacherAssistant.username);

let anotherUser="Jayesh       ";
String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.username}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUser.trueLength();
"jayesh".trueLength();
"dolly".trueLength();
"anupa".trueLength();