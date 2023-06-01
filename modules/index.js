import todaysDate from "./date.js" //this is how we import a module that has been exported as a whole file
import { area, circumference } from "./circle.js" //this is how we import elements of a module, that have been exported individually

console.log(`today's date is: ${todaysDate}` )

console.log(`The area of a circle of radius 4 is ${area(4)}`)

console.log(`The circumference of a circle of radius 4 is ${circumference(4)}`)