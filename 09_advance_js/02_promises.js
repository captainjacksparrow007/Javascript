const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 1 is running");
    },1000)
    resolve();
})

promiseOne.then(()=>{
    console.log("then is printing of async 1");
})

new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("Async 2 is running");
    },1000)
    resolve();
}).then(()=>{
    console.log("then is printing of async 2");
})

const promiseThree=new Promise(function(resolve,reject){
    console.log("Async 3 is running");
    resolve({user:`Jayesh`,emailId:`jayeshMalviya@mail.com`});
}).then((user)=>{
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:"Dolly",password:"jayesh"});
        }
        else{
            reject(`Error : Something is wrong `);
        }
    },1000)
})
.then((user)=>{
    console.log(user.username);
})
.catch((e=>{
    console.log(e);
}))
.finally(()=>{
    console.log(`code ends here`);
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:`Jayesh`,password:`Dolly`});
        }else{
            reject(`Error : JS not found`);
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const promise=await promiseFive;
        console.log(promise);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive();

async function getAllUsers(){
    try{
        const response=await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data=await response.json();
        console.log(data);
    }catch(error){
        console.log(`E: `,error);
    }
}

getAllUsers();

fetch(`https://jsonplaceholder.typicode.com/users`)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log(`code ends here!!!`);
})