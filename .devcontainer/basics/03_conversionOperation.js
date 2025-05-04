let score ="18"
console.log(typeof score);
console.log(typeof(score));


let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

/* 
    ...............NOTES ......................
"18"=> 18
"18abc"=> NaN {not a number}
true => 1;
false => 0;
1=> true;
0=> false;
""=> false
"Rajendra"=> true


*/

let isloggenIn="Rajendra"
let booleanIsLoggedIn= boolean(isloggenIn)
console.log(booleanIsLoggedIn);


// conversion from Number to String
let someNumber=18
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// *******************************************Operations*****************************************************


let value =3
let negValue= -value
console.log(negValue); // it convert the value in negative , output:=> -3

// some basics operations
// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);


//add two string
let str1="Hello"
let str2=" Rajendra"

let str3= str1+ str2
console.log(str3)

// Important conversion 

console.log("1"+2); // output: 12
console.log(1+"2"); //output: 12
console.log("1"+2+2); // output : 122
console.log(1+2+"2"); // output: 32

console.log(+true); // gives 1 output
console.log(+"");

// prefix and postfix conversion
let gameCounter =100
++gameCounter;
gameCounter++;
console.log(gameCounter)

// study this topic from here=> https://tc39.es/ecma262/#sec-abstract-operations