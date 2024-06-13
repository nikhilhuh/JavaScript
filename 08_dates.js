// dates

// let myDate=new Date() //creates new Date prototype
// console.log(myDate)  //2024-06-12T09:03:20.446Z
// console.log(myDate.toISOString()) //2024-06-12T09:03:20.446Z

// console.log(myDate.toString()) //Wed Jun 12 2024 14:34:24 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()); //Wed, 12 Jun 2024 09:05:45 GMT
// console.log(myDate.toDateString()) //Wed Jun 12 2024
// console.log(myDate.toLocaleString()) //12/6/2024, 2:36:53 pm
// console.log(myDate.toLocaleDateString()) //12/6/2024
// console.log(myDate.toTimeString()) //14:37:44 GMT+0530 (India Standard Time)
// and so on....

// to create your own date and time
// let mycreatedDate = new Date(2023,0,13)
// console.log(mycreatedDate.toDateString()); //Fri Jan 13 2023


// mycreatedDate = new Date(2023,0,13,5,3,12)
// console.log(mycreatedDate.toLocaleString()); //13/1/2023, 5:03:12 am


// mycreatedDate = new Date("2023-1-12")
// console.log(mycreatedDate.toDateString()); //Thu Jan 12 2023

// let mytimestamp = Date.now();
// console.log(mytimestamp); //1718184593550 => gives exact time in miliseconds
// console.log(mycreatedDate.getTime()) // //1718184593550 => gives date time in miliseconds