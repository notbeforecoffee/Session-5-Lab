// This file has several modules, or a pieces of code we intend to use elsewhere. Any code that we can reuse in multiple places in our app, we want to store it in a communal file, or module, to import elsewhere in our application


// here we are 'destructuring' Math, to get only the property PI  from it.  Think of PI like a pre-supplied function, or method.  Math is a built in  object in Javascript, and has several properties we can access and use

//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const { PI } = Math;


//these separated export statements export each function individually
export const area = (r) => PI * r  * r;

export const circumference = (r) => 2 * PI * r;