const accountId=12345;
let accountEmail="Jayesh@google.com" 
var accountPassword="1234567"
accountCity="Dhar"
let accountState

// accountId=14432 // it is not allowed const value never change
console.log(accountId);
accountEmail="J@gmail.com"
accountPassword="7654321"
accountCity="Indore"

/*
Prefer not to use var
because of the issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState])