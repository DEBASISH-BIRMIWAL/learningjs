const accountId = 144553
let accountEmail = "debasish@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // its a var
let accountState

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

// accountId = 2 not allowed const doesnot change
accountEmail = "deb@google.com"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])