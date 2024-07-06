class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`User : ${this.username}`);
    }

    static createId(){ //when you declare static the user not get access of it until you give the permission.
        const id=Math.round(Math.random()*100+1);
        return `AB23${id}`;
    }
}

const jayesh=new User();
// console.log(jayesh.createId());

class teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const here=new teacher('chaiFirSe','Chai@gmail.com');
console.log(here);
here.logMe();
// console.log(here.createId());