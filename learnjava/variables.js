const accountId = 4674
let accountName = "hbyuybguyg"
var accountPassword = "dfg5ry4r"
let accountCity = "jalandhar"
let accountState;

// var is not prefer to use bcoz of the issue in block scope and fuction scope

//  const value cannot be changed
// other values can be changed

accountName = "bablu"
accountPassword = "asdf123"
accountCity = "amritsar"

console.log (accountId)

// to display data in tabular form

console.table([accountId, accountName, accountPassword, accountCity])