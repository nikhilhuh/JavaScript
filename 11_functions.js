// function function_name(){
//     console.log("N");
//     console.log("i");
//     console.log("k");
//     console.log("h");
//     console.log("i");
//     console.log("l");
// }
// function_name() //execution of function

// function addTwoNumbers(number1 , number2) {
//     console.log(number1 + number2)
// }
// addTwoNumbers(3,5) //8

// function addTwoNumbers(number1 , number2) {
//     let result = number1+number2
//     return result
// }
// const result = addTwoNumbers(3,5)
// console.log(result) //8


// function loginuserMessage(username) {
//     return `${username} just logged in`
// }
// console.log(loginuserMessage("Nikhil")) //Nikhil just logged in
// console.log(loginuserMessage()) //undefined just logged in

// function loginuserMessage(username) {
//     if(!username){ //if(username === undefined)
//         console.log("Please enter an username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginuserMessage()); //Please enter an username



// if you dont know the number of parameters

// function calculateCartprice(num1) {
//     return num1 
// }
// console.log(calculateCartprice(300,400,500)); //300

// use rest operator (same as spread operator)
// function calculateCartprice(...num1) {
//     return num1 
// }
// console.log(calculateCartprice(300,400,500)); //[ 300, 400, 500 ] => add as many parameters as you want , it will go in an array

// **************passing objects in functions****************

// const user = {
//     username : "Nikhil",
//     price : 399
// }
// function handleObject(anyObject) {
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }
// handleObject(user) //Username is Nikhil and price is 399


// ***********passing arrays in functions********************

// const myArray = [100,200,300]

// function returnfirstvalue(getarray) {
//     return getarray[0]    
// }
// console.log(returnfirstvalue(myArray)); //100