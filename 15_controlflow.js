// simple if
// if (condition) {
         // statements
// }

// if-else
// if (condition) {
        // statements
// } else {
         // statements
// }

// switch statement
// switch (key) {
//     case value:
        // statements
//         break;

//     default:
//         break;
// }

// ternary operator
// condition ? true : false


// falsy values =>
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// rest all are truthy values =>
//"0" , 'false' , " " , [] , {} , function (){}


//  Nullish Coalescing operator (??) : null , undefined
// let val1 = 5 ?? 10
// val1 = null ?? 10 //if value comes as null the other value is assigned
// console.log(val1); //10
// let val2 = 5 ?? 10
// val2 = undefined ?? 10 //if value comes as undefined the other value is assigned
// console.log(val2); //10