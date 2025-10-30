"use strict" //* treat all JS code as newer version ES6 
//! note : you can not use don't use strict anywhere in code after declare this.

// alert(3+3) //* do not use this when you use node js ES6 virsion it's give an error , because it is applicable for only on browser.

/*

console.log( 3
+
   3 ) //don't use bcz, we must be maintains code redability.
   note : code redability should be high.
*/ 
                    //  List of Data type  //
// let name = aryan ;//here aryan is considered as a variable.
let name = "aryan" // string datatype
let age = 18 // number datatype
let temp = null // null datatype 
let marks; // undefined datatype

// ! Primitive Data type
// number => 2 to power 53,int,float,double
// bigint => use in multiuser website like facebook , insta;
// string => "xyzadwd"
// boolean => true/false
// null => standalone value
// undefined => value is not assigned yet.
// symbol => use to show unique (we will use this in React.)

//! Non-Primitive Datatype
// object

//! Tricky Question .
console.log(typeof undefined); // undefined 
console.log(typeof null); // Note : object (we will be discuss about it.)