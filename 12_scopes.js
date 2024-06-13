// Global and local scopes are just like any other programming languages

// anything within curly braces (except object) is a block scope

// if (true) {
//     let a=10
//     const b=20
//     var c=30
// }//scope

// console.log(a); //not available outside the scope
// console.log(b); //not available outside the scope
// console.log(c); //30 => problem with var, its scope is throughout the program , not just in block code


// function one(){
//     const username = "nikhil"

//     function two(){
//         const website = "url"
//         console.log(username);
//     }
//     // console.log(website); //website cannot be accessed out of two scope
//     two() //two is called
// }

// one() //nikhil


