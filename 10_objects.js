// constructore s ejab obejcts banega toh singleton banega
// literals se jo objects banega toh wo singleton nhi hoga

// objects literals
// you can access anything in objects using its key or using its vale
// const user = {
//     name: "Nikhil", //name is key and Nikhil is value
//     "full name" : "Nikhil Tiwari",
//     "full" : "Demo",
//     age: 20,
//     1: "just to discuss that key is also a data-type",
//     location: "Kanpur",
//     email: "nikhil@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Tuesday","Wednesday"]
// } //object

// accessing members of object
// console.log(user.name) //Nikhil
// another way
// console.log((user["name"])); //Nikhil => here we have to enclose name within double quotes bcoz it is a string (only talking about key)
// console.log(user[1]); //just to discuss that key is also a data-type

// console.log(user["full name"]) //only way to access full name as it is explicitly declared as string
// console.log(user.full) //Demo

// we can also change the value of members of objects
// user.age = 21;
// // console.log(user.age); //21
// user["age"] = 21;
// console.log(user["age"]); //21

// we can also freeze the values of objects
// Object.freeze(user)
// user.age = 21;
// console.log(user.age) //20 => bcoz values cannot be changed after applying freeze

// declaring symbol
// const mysymbol1 = Symbol("key1")
// const mysymbol2 = Symbol("key1")

// const demo1 ={
//     mysymbol1 : "mykey1"
// }
//this does access the symbol but this symbol is not of type symbol
// console.log(demo1.mysymbol1) //mykey1
// console.log(typeof demo1.mysymbol1) //string

// const demo2 ={
//     [mysymbol2] : "mykey1"
// }
// //this does declare as symbol
// console.log(demo2.mysymbol2) //undefined =>cannot access symbol
// console.log(demo2[mysymbol2]) //mykey1


// ***************Functions********************
// const user = {
//     name: "Nikhil",
//     age: 20,
//     location: "Kanpur",
//     email: "nikhil@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Tuesday","Wednesday"]
// } //object

// user.greetingOne = function() {
//     console.log("Hello User");
// }
// console.log(user.greetingOne) //[Function (anonymous)]
// console.log(user.greetingOne()) //Hello User

// user.greetingTwo = function() {
//     console.log(`Hello ${this.name}`) //to reference same object we use this
// }
// console.log(user.greetingTwo()) //Hello Nikhil




// *********************Objects Using Constructor*****************

// const user = new Object() //singleton object
// console.log(user) //{}

// user.name = "Nikhil" 
// user.isLoggedIn = false
// user.age = 20
// console.log(user); //{ name: 'Nikhil', isLoggedIn: false, age: 20 }

// const regularUser = {
//     email: "nikhil@gmail.com",
//     fullname: { //nesting of objects is also allowed
//         firstname: "Nikhil",
//         lastname: "Tiwari"
//     }
// }

// console.log(regularUser.fullname.firstname); //Nikhil

// combining two objects
// const obj1 = { 1: "a" , 2: "b"}
// const obj2 = { 3: "c" , 4: "d"}

//not the efficient way as objects inside object is possible
// const obj3 = { obj1 , obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// the correct way is same as array
// const obj3 = {...obj1,...obj2}
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj5 = {...obj1,...obj2,...obj3,...obj4}
// console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } => bcoz values of obj3 and obj4 are same to obj1+obj2



// ********************Array of Objects***********************

// const users = [
//     {
//         id: 1,
//         email : "@gmail.com"
//     },
//     {
//         id: 1,
//         email : "@gmail.com"
//     },
//     {
//         id: 1,
//         email : "@gmail.com"
//     },
    
// ]

// accessing values of array of objets
// users[1].email



// Accessing every keys and values of an object
// const user = {
//     key1: "hello",
//     key2: "world",
//     key3: "demo"
// }
// console.log(Object.keys(user)); //[ 'key1', 'key2', 'key3' ]
// console.log(Object.values(user)); //[ 'hello', 'world', 'demo' ]
// console.log(Object.entries(user)); //[ [ 'key1', 'hello' ], [ 'key2', 'world' ], [ 'key3', 'demo' ] ]
// console.log(user.hasOwnProperty('key1')); //true
// console.log(user.hasOwnProperty('key5')); //false



// ***********************Objects Destructuring**************************
// const course = {
//     coursename : "JavaScript",
//     courseprice : "999",
//     courseteacher : "Nikhil"
// }
// console.log(course.coursename); //JavaScript
// const {coursename} = course
// console.log(coursename) //JavaScript

// destructuring
// console.log(course.courseteacher); //Nikhil
// const {courseteacher : instructor} = course //giving courseteacher new name as instructor => destructuring
// console.log(instructor) //Nikhil




// ***********************JSON API*********************
// almost same as objects but in cse of JSON API keys are also string

// {
//     "name" : "Nikhil",
//     "id" : 121 ,
//     "age" : 20
// } //json api 