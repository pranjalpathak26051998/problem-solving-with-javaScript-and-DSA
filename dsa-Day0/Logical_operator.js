let a =8
let b = 10
sum = a+b
if(sum<=20 || sum>=10){
    console.log("True")
}
else {
    console.log("False")
}
//=========================================//=========================================
let k =22
let j = 25
let sum1;
if(j>=20 && k<=30){
    sum1 = j+k
    console.log(sum1)
}
else{
    console.log("false")
}
//=========================================//=========================================
console.log(undefined || null || 1 || 0);   //ouptut :- 1
console.log(undefined || null || 0);   //ouptut :- 0 //all falsy, returns the last value)
console.log(undefined || null );   //ouptut :- null // all falsy, returns the last value)
//=========================================//=========================================
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder
console.log( firstName || lastName || "Anonymous"); // Anonymous
//=========================================//=========================================
var a1 = 0;
var b2 = 10;
var c3 = 2;

var result = a1 && b2 && c3;  // Evaluates to 2

console.log(result);  // Output: 2
//OR finds first truthy value ------ // AND finds first falsy value
//=========================================//=========================================
console.log( !true ); // false
console.log( !0 ); // true
console.log(!undefined)
//=========================================//=========================================

console.log( null || 2 || undefined );
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

let kas = 23
if(kas>=14 && kas<=90){
    console.log("true")
}
else{
    console.log("false")
}



