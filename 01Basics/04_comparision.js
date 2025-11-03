console.log(2 == 2)
console.log(2 < 1)
console.log(2 <= 1)
console.log(2 > 1)
console.log(2 >= 1)
console.log(" ")

console.log(null > 0)  
console.log(null <= 0)
console.log(null == 0) 
//! Note : in == null considered as a empty value and in < > <= >= null is coverts into a number 0 and than compared

console.log(" ")

console.log(undefined > 0)
console.log(undefined >= 0) 
console.log(undefined == 0)
// undefine is becomes NaN and NaN is never compared with number that's why it will give false always. 

// ! == equal operator and === strict equal operator 
//   == operator --> same datatype true/false. and different datatype convert datatype into another datatype and than compare.
// * === strictly checks first is both datatype is same ? after checks if both dataype isn't same then return false otherwise compare and give true/false.

/* 
 ___________________________________________________________________________
| Operator | Description                            | Example     | Result  |
| -------- | -------------------------------------- | ----------- | ------- |
| `==`     | Equal to (checks value only)           | `5 == "5"`  | `true`  |
| `===`    | Strict equal (checks value + type)     | `5 === "5"` | `false` |
| `!=`     | Not equal (checks value only)          | `5 != "5"`  | `false` |
| `!==`    | Strict not equal (checks value + type) | `5 !== "5"` | `true`  |
| `>`      | Greater than                           | `8 > 5`     | `true`  |
| `<`      | Less than                              | `8 < 5`     | `false` |
| `>=`     | Greater than or equal to               | `8 >= 8`    | `true`  |
| `<=`     | Less than or equal to                  | `5 <= 8`    | `true`  |

*/
