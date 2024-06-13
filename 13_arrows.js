// const user = {
//     username : "nikhil",
//     price : 999,

//     welcomemessage: function(){
//         console.log(`${this.username} welcome to website`)
//     }
// }

// user.welcomemessage() //nikhil welcome to website
// user.username = "Nikhil Tiwari"
// user.welcomemessage() //Nikhil Tiwari welcome to website
// console.log(this) //{}

// function demo1() {
//     let username = "nikhil"
//     console.log(this.username)  //undefined
// }
// demo1()
// const demo2 =function () {
//     let username = "nikhil"
//     console.log(this.username)  //undefined        
// }
// demo2()


// ************Arrow Function****************
// const demo =  () => {
//     let username = "nikhil"
//     console.log("arrrow function");
//     console.log(this.username)  //undefined 
//     console.log(this); //{}
// }
// demo()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4)) //7

// implicit return
// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(3,4)); //7

// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(3,4)); //7

// while returning object you have to wrap it in parethesis
// const demo = ()=> ({username:"nikhil"})
// console.log(demo()) //{ username: 'nikhil' }