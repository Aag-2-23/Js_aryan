let marks = 23;

// conditional statement 

//! 1. If statement 

if (marks >= 74) {
    console.log("pass With Distinction");
}

// * 2. if else statement

if (marks < 70) {
    console.log("pass with first class");
} 
else {
    console.log("pass With Distinction");
}

// ! 3. if - else if - else  ladder 

if (marks < 33) {
    console.log("fail !");
} else if (marks > 33 && marks < 70) {
    console.log("pass with first class ");
} else {
    console.log("pass with distinction!");
}

// ! This is called raple in node js.

// PS C:\Users\Aryan\OneDrive\Documents\Coding zone\web dev\Javascript> node 
// Welcome to Node.js v22.19.0.
// Type ".help" for more information.
// > a = 9 
// 9
// > b = 11 
// 11
// > c = a > b ? a - b : b - a; 

//! Ternory operatoe in java script.
/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}
    use ternory instead of this
*/ 

