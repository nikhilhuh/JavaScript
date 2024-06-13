// array
// just like normal programming arrays

// const myArr = [0,1,2,3,4,5]
// const heroes = ["shaktimaan","naagraj"]

// console.log(myArr[2]); //2
// console.log(heroes[0]); //shaktimaan

// creating protoypes of arrays for additional functionalities , just in case of strings , numbers and etc.
// const myArr2 = new Array(0,1,2,3,4,5)
// console.log(myArr2[2]); //2
// console.log(myArr2.length); //6


// ***********Array Methods*****************

// push , pop
// const arr = [0,1,2,3,4]
// arr.push(5) //it adds the given to last of array 
// console.log(arr); //[ 0, 1, 2, 3, 4, 5 ]
// arr.push(6) 
// console.log(arr); //[ 0, 1, 2, 3, 4, 5, 6 ]
// arr.pop() //it removes the last element of array
// console.log(arr) //[ 0, 1, 2, 3, 4, 5 ]

// unshift , shift
// const arr = [0,1,2,3,4]
// arr.unshift(6) //it adds the given element to first index of array and shifts the rest elements by 1 index
// console.log(arr); //[ 6, 0, 1, 2, 3, 4 ]
// arr.shift() //it removes the first index element of array and shifts the rest elements by -1 index
// console.log(arr) //[ 0, 1, 2, 3, 4 ]

// console.log(arr.includes(4)) //true =>gives answer in true or false
// console.log(arr.indexOf(3)) //3 

// const newArr = arr.join(); //converts the given array in string type
// console.log(newArr); //0,1,2,3,4
// console.log(typeof newArr) //string


// slice , splice
// const arr = [1,2,3,4,5]
// console.log("Original Array ",arr); //Original Array  [ 1, 2, 3, 4, 5 ]

// const arr1 = arr.slice(1,4) //it does not includes the last index
// console.log(arr1); //[ 2, 3, 4 ]

// const arr2 = arr.splice(1,4) //it includes the last index + this operation manipulates the original array
// console.log(arr2) //[ 2, 3, 4, 5 ]
// console.log(arr); //[ 1 ] => the splice elements get removed from original array

// to add two arrys together
// const marvel_heroes = ["thor" , "ironman" , "spiderman"]
// const dc_heroes = ["batman" , "superman" , "flash"]
// marvel_heroes.push(dc_heroes) //this gives array inside array
// console.log(marvel_heroes) //[ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

// let all_heroes = marvel_heroes.concat(dc_heroes) //it can only add two arrays together
// console.log(all_heroes); //[ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]

// all_heroes = dc_heroes.concat(marvel_heroes)
// console.log(all_heroes); //[ 'batman', 'superman', 'flash', 'thor', 'ironman', 'spiderman' ]

// adding two arrays using spread operator(...) => best way
// it can add two or more arrays together
// how it works=>it breaks each element of array into individual array and then merges them in one array
// const spreadarr = [...marvel_heroes,...dc_heroes]
// console.log(spreadarr) //[ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]



// To convert other datav types in array
// const name = "Nikhil"
// console.log(Array.from(name)) //[ 'N', 'i', 'k', 'h', 'i', 'l' ]
// const array_Name = Array.from(name)
// console.log(array_Name) //[ 'N', 'i', 'k', 'h', 'i', 'l' ]

// let score1 = 100
// let score2 = 200
// let score3 = 300
// let array_scores = Array.of(score1,score2,score3)
// console.log(array_scores) //[ 100, 200, 300 ]