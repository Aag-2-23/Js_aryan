const accountid = 123455;
let accountName = "Aryan"; //* use always let variable because it has a block scope.
// CONST & LET is part of New version ES6

// laws to declare a variable.
let a = "ad"
let _a = "addx"
let $a = "wdcef"
// let 33s = " sdwsd" //! is not allowed for more laws and interview Qs use hand written notes.

var accountPass = "12345"; //* don't use var variable because it has a function scope.
// part of old virsion

EnrollNo = "240170146024"; //! it's called global variable do not use this. it would not work in strict mode it will be crash our code.

// accountid = 98348; //! This is not allowed because constant value does not change !

console.log(accountid);
console.log(accountName);
console.log(accountPass);

console.table([accountid,accountName,accountPass,EnrollNo]); //* whenever we want to try print list of variables in table form then used this code.
 

//! Note : JavaScript is dynamically typed, meaning — You don’t need to specify the type — it changes automatically based on the value.