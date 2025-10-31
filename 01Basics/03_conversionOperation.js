let score = false

// console.log(typeof score)
// console.log(score,"value")

let valueInNumber = Number(score) //! if you could use number instead of Number it would be consider as a undefined variable

//* for type conversion use first letter is in uppercase. 
// console.log(typeof valueInNumber)
// console.log(valueInNumber,"value")

//!       String to number.
// "333" --> 333
// "" empty string --> 0
// " "space string --> 0
// "33ac" --> NaN

// ! boolean to number 
//  true => 1; false => 0

// ! number to boolean
//  false --> 0 , true --> 1

// ! string to boolean
// "" empty string --> false
// "adwd" --> True

// ! number to string
// 33 --> "33"

//* ++++++++++++++++++ Operation ++++++++++++++++++++

// convert into negative value 
let val = 4
let negval = -val

console.log(negval)

// arithmatic operation

console.log(2+2) // addition 
console.log(2-2) // substraction
console.log(2*2) // multiplication
console.log(2**3) // 2 to the power 3
console.log(2 % 2) // 2 modulo 2 gives remainder 0
console.log(2/2) // 2 divide by 2

// concatination of a string 

let str1 = "Aryan"
let str2 = " Gondaliya"

let str3 = str1 + str2 

console.log(str3);

// string plus number conversion

console.log("3" + 3 + 3); //333
console.log(1 + 2 + "2"); //32
console.log(1 + 3 + "1" + 3); //413

//! note : before string solve addition and after string combine all term with string . 

console.log( 3 + 4 * 5 % 3);  // 5

let num1,num2,num3

num1 = num2 = num3 = 2+2

console.log(num1)
console.log(num2)
console.log(num3)


// * prefix and postfix operation
let count = 100
console.log(count++) 
console.log(count)

// x++ postfix operator --> use first than increment
// ++x prefix operator --> increment first than decrease


