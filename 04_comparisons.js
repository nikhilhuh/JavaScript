// answer in true/false
// console.log(2==2);
// console.log(2>1);
// console.log(2<1);
// console.log(2!=1);
// console.log(2>=1);
// console.log(2<=1);

// when comparing two different data types , unpredictable results 
// avoid using these
// console.log("2">1); //comparing string with number , js first converts string into number and then compare 
// console.log("02">1); //comparing string with number , js first converts string into number and then compare 

// console.log(null==0); //false
// console.log(null>0); //false
// console.log(null<0); //false
// console.log(null>=0); //true

// console.log(undefined==0); //false
// console.log(undefined>0); //false
// console.log(undefined<0); //false
// console.log(undefined>=0); //false


// ***************strict check(===)********************
// checks for value equality as well as data type equality
// unpredictable results are subsided

// console.log("2" ==2); // true
// console.log("2" ===2); //strict check => false