// const score=400
// console.log(score); //400 
//js automatically dettects it as a number

// // but to explicitly define number 
// const score=new Number(100) //becomes prototype just in case of string
// console.log(score)

// //now we get additional functionality
// console.log(score.toLocaleString())//100 as string and now we can use functionalities of string

// console.log(score.toFixed(2)) //100.00 => gives decimal precision 

// const value = 1000000
// console.log(value.toLocaleString()) // 1,000,000 => commas comes according to US style
// console.log(value.toLocaleString('en-In')) //10,00,000 => commas according to Indian style


// ************************MATHS*********************

// console.log(Math) //it has a protoype of object adn you get additional functionaloties just in case of strings and numbers
// you can easily understand it as a library which has already defined functions and values
// already included library in javascript

// console.log(Math.abs(-4)) //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.7)); //4

// console.log(Math.random()) //gives random values between 0 and 1 (0 included and 1 excluded) , everytime the function is executed

// // if you want random number between two numbers
// const min=10
// const max=20

// console.log(Math.random()*(max-min +1)+min) //generating random number between 10 and 20
// console.log(Math.floor(Math.random()*(max-min +1)+min)) //generating random number between 10 and 20 and giving it in natural number formnat