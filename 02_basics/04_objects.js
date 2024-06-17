// const tinderUser=new Object(); //singelton
// tinderUser.id=101;
// tinderUser.name="Jayesh";
// console.log(tinderUser);

const tinder={}

tinder.id=123;
tinder.userName="Jayesh";
tinder.email="jayesh@google.com";
tinder.isLoggedin=false;

// console.log(tinder);

const regularUser={
    email:"jayesh@gmail.com",
    userName:{
        fullName:{
            firstName:"Jayesh",
            middleName:"Kumar",
            lastName:"Malviya"
        }
    }
}

// console.log(regularUser.userName.fullName.firstName);
let obj1={1:"a",2:"b"};
let obj2={3:"a",4:"b"};
// console.log(Object.assign({},obj1,obj2));
// this empty set is used because it will be target and the rest will be source all object will store in {}

// using spread operator
// syntax : {...obj1 , ...obj2 , ...obj3 , ...objN};
// console.log({...obj1,...obj2});

const users=[
    {
        id:101,
        name:"jayesh",
        email:"jayesh@gmail.com",
    },
    {
        id:102,
        name:"Dolly",
        email:"dolly@gmail.com"
    }
]

// console.log(users[1].email);
// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder)); // key value pair in form of arrays
// console.log(tinder.hasOwnProperty('isLoggedin'));

const course={
    courseName:"javascript",
    price:999,
    Courseinstructor:"jayesh"
}
// destructre of object
console.log(course.Courseinstructor);
const {Courseinstructor:instructor}=course; // this will help to give alias and help to not use everytime course.courseInstructor
console.log(instructor);

// this is the format of json while calling api the api will be in json format of object
// {
//     "name":"Jayesh",
//     "course":"free",
//     "platform":"Youtube"
// }

//sometime the api are also in array format
// [
//     {},
//     {},
//     {},
// ]