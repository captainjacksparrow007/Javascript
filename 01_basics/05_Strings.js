// Datatypes in memory kept it in two types
// Primitive and Non-primitive
// Primitive data are call by value data types it means it gives the copy of the data not the actual data
// Non Primitive data are call by reference data types it means it gives the actual data reference 

// primitive data type : string,number(float,int,double),null(empty),undefiend(declare memory space we give result as undefined define it later),symbol(It defines the component as unique),bigInt(used in large number of data)

// non - primitive data type : Arrays,objects,functions
const score=100
let num=100.2
let temp=null
let userEmail

const id=Symbol('123')
const Did=Symbol('123')
const id2="123"
const did2="123"
console.log(id2==did2)
console.log(id==Did)
console.log(id===Did)

let bigNumber=343456678896
console.log(bigNumber)
