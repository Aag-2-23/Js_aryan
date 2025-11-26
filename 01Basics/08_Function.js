// ! Type 1 

function sum1 (a , b) {
    console.log(a , " + " , b , " = " , a+b );
}

let a = 9 , b = a + 4;

sum1(a,b); // ? --> Function invocation / function call 

// ! Type 2

function sum2 (a , b) {
    return a + b;
}

let s = sum2(a,b);

console.log("sum = ",s);

// ! Arrow function (we will study about it in detail)

const sum3 = (a , b) => {
    console.log(a + b);
}

sum3(5,60);


