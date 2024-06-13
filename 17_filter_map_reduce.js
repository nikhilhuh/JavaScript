// Maps => sort of objects but dont hold duplicate values
// const map = new Map()
// map.set('In',"India")
// map.set('USA',"United States Of America")
// map.set('Fr',"France")
// map.set('In',"India")

// console.log(map); //Map(3) {
//     'In' => 'India',
//     'USA' => 'United States Of America',
//     'Fr' => 'France'
//   }

// filter
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num)=>{
//     num > 4
// })
// console.log(newNums); //[]
// const newNums = myNums.filter( (num)=>{
//     return num > 4
// })
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]
// const newNums = myNums.map( (num)=> num+10)
// console.log(newNums); //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(myNums); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

// you can also chain maps , filters 
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const newnums = numbers.map((num)=> num*10).map((num)=> num+1).filter((num)=> num>50)
// console.log(newnums); //[ 51, 61, 71, 81, 91, 101 ]


// reduce => way to add elements of array efficiently
// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(accumulator,current_value){
//     console.log(`accumulator : ${accumulator} and current value ${current_value}`);
//     return accumulator+current_value
// },0)
// console.log(myTotal); //6

// const myTotal = myNums.reduce((accumulator,current_value)=> accumulator+current_value ,0)
// console.log(myTotal); //6

const shoppingCart = [
    {
        itemName : "Js Course",
        itemPrice : 199
    },
    {
        itemName : "Python Course",
        itemPrice : 299
    },
    {
        itemName : "C++ Course",
        itemPrice : 299
    },
    {
        itemName : "Web Dev Course",
        itemPrice : 1999
    }
]
const totalPrice = shoppingCart.reduce((accumulator,item) => accumulator + item.itemPrice,0)
console.log(totalPrice); //2796