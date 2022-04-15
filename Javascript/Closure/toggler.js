const toggler = (...args) => {
    let arr = args;
    let i = 0;
    return () => {
        if(i === arr.length ){
            i=0;
        }
        console.log(arr[i++])
    }
}
let a = toggler(1,2,3)
a();
a();
a();
a();
a();
a();
a();

// what is iife?
// ans -is a JavaScript function that runs as soon as it is defined
// reason -Avoid polluting the global namespace

// What is currying?
// Answe - Currying is a technique of evaluating function with multiple
//           arguments, into sequence of functions with single argument.In other
//           words, when a function, instead of taking all arguments at one time,
//           takes the first one and return a new function that takes the second
//           one and returns a new function which takes the third one, and so
//           forth, until all arguments have been fulfilled.
// example in react - middleware