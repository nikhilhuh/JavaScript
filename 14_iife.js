// Immediately Invoked Function Expressions
// why iife=>Global scope ke variable se problems hoti hai toh Global scope ke poluution ko hatane ke liye
// (function_definition)(function_execution)

(function demo(){
    // named iife
    console.log(`DB Connected One`); //DB Connected One
})() ; //iife ko end krne ke liye semicolon lagana zaruri hai

( ()=> {
    // unnamed iife
    console.log(`DB Connected Two`); //DB Connected Two
})();

// passing parameters
( (name)=> {
    console.log(`DB Connected ${name}`); //DB Connected Nikhil
})("Nikhil");