const accountId = 14453
let accountEmail = "nishant@gmail.com"
var accountPassword = "123456"
accountCity = "Chennai"
let accountState; // undefined

//dont use var because of block space and functional space issue - basically var doesnt know scope so if you change in one block then it will be changed for other aswell

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])