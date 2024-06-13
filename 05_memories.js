// Stack=> Primitve, Heap => Non-Primitve

// Primitve Data Types => Stack
// let myName="Nikhil"
// let anotherName=myName
// console.log(anotherName) //Nikhil
// anotherName="Koi or naam"
// console.log(anotherName) //Koi or naam
// console.log(myName) //Nikhil , bcoz value was given as copy

// Non-Primitive Data Types
let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
}
console.log(userOne.email) //user@gmail.com
console.log(userOne.upi) //user@ybl

let userTwo=userOne
userTwo.email="nikhil@gmail.com"
console.log(userOne.email) //nikhil@gmail.com , bcoz the vlaue was shared as reference
console.log(userOne.upi) //user@ybl

