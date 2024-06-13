// for loop => same as normal for loop
// for (let index = 0; index < 10; index++) {
//     console.log(index)   
// }

// break and continue statements => same as normal break and continue statements

// while loop => same as normal while loop
// while (condition) {
// }

// do-while loop => same as normal do-while loop
// do {
// } while (condition);


// for of
// const arr = [1,2,3,4,5]
// for (const index of arr) {
//     console.log(index)
// }
// const greetings = "Namaste"
// for (const i of greetings) {
//     console.log(i)
// }

// for (const key of map) {
    // console.log(key); //[ 'In', 'India' ]
    // [ 'USA', 'United States Of America' ]
    // [ 'Fr', 'France' ]
// }
// for (const [key,value] of map) {
    // console.log(key , ':-' , value); //In :- India
    // USA :- United States Of America
    // Fr :- France
// }
// for of doesn't work for objects

// for in => works on objects

// const myobj = {
//     cpp : "C++",
//     swift : "swift by apple",
//     rb : "ruby",
//     js : "javascript"
// }
// for (const key in myobj) {
    // console.log(`${key} shortcut is for ${myobj[key]}`);  //cpp shortcut is for C++
    // swift shortcut is for swift by apple
    // rb shortcut is for ruby
    // js shortcut is for javascript        
// }

// const programming = ["js","cpp","rb","swift"]
// for (const key in programming) {
    // console.log(key); //0
    // 1
    // 2
    // 3
    // console.log(`${programming[key]} is at ${key} position`); //js is at 0 position
    // cpp is at 1 position
    // rb is at 2 position
    // swift is at 3 position
// }

// you can not iterate on maps

// for each
// const programming = ["js","cpp","rb","swift"]
// programming.forEach( function (element) {
    // console.log(element); //js
    // cpp
    // rb
    // swift
// });
// programming.forEach( (element)=> {
    // console.log(element); //js
    // cpp
    // rb
    // swift
// });
// function printing_elements(elements) {
//     console.log(elements);
// }
// programming.forEach(printing_elements) //js
// cpp
// rb
// swift

// programming.forEach((element,index,arr)=>{
    // console.log(element,index,arr); //js 0 [ 'js', 'cpp', 'rb', 'swift' ]
    // cpp 1 [ 'js', 'cpp', 'rb', 'swift' ]
    // rb 2 [ 'js', 'cpp', 'rb', 'swift' ]
    // swift 3 [ 'js', 'cpp', 'rb', 'swift' ]
// })

// const myCoding = [
//     {
//         languageName : "javascript",
//         languageFileName : "js"
//     },
//     {
//         languageName : "c++",
//         languageFileName : "cpp"
//     },
//     {
//         languageName : "python",
//         languageFileName : "py"
//     },
//     {
//         languageName : "c",
//         languageFileName : "c"
//     }
// ]
// myCoding.forEach( (item) => {
    // console.log(item.languageName); //javascript
    // c++
    // python
    // c
// });

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []
// myNums.forEach( (num)=> {
//     if(num >4){
//         newNums.push(num)
//     }
// })
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

// const newNums = []
// myNums.forEach((num)=> {
//     let val = num+10
//     newNums.push(val)
// })
// console.log(newNums); //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

