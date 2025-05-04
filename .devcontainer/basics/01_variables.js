const accountId = 128
let accountEmail ="Hello@gmail.com"
var accountPassword ="12547" // var is old , try not to use var in your program , only use const and let.
accountCity="cpr"

// account id = 2  //not allowed because const can't be updated .
// {} -> this is scope .
let accountDetail; // it shows undefined , when we print this

accountEmail="hcgf@google.com"
accountPassword="8975"
accountCity="meerut"

console.log (accountId); // used to print single data 

console.table([accountEmail,accountId,accountPassword,accountCity]) // This is used to get the multiple data in tabular form

/*  
SUMMARY of variables in java-script

* javascript has 3 type of variables- 
1) let= it can be updated
2) var= old and it has scope problem , please dont use it in your program
3) const= it can't be updated 

let accountDetail; -> it shows undefined , when we print this

  ..........variable end.........................................................

*/