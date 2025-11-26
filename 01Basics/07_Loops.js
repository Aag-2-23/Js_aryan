//! List of loops in javascript

//* 1. for loop

let a = 1;

// for (let i = 0 ; i < 100 ; i++) {
//     console.log(a+i);
// }

//* 2. for in loop 
// --> Used to iterate over the keys (property names) of an object (or the indexes of an array).

let Obj = {
    name : "gobaachari",
    city : "godhara",
    pincode : 389009,
    
}

// for (let key in Obj) {
//     console.log(key);
// }

//* 3. for of loop
// 🧠 What is for...of?

// for...of loop is used to iterate (loop) over iterable objects like:

// Arrays
// Strings
// Maps
// Sets

// It gives you values directly, not the indexes.

// for (let ch of "aryan gondaliya" ) {
//     console.log(ch);
// }

//* 4. while loop
let i = 0;
// while (i < 100) {
//     console.log(a + i);
//     i++;
// }

//* 5. do while loop

do {
    console.log(a+i);
} while (i < 0);
