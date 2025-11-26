// importing the prompt-sync library into the program [for that , we first need to install prompt-sync]
const prompt = require("prompt-sync")();

// Ask for user input
let a = prompt("Enter the value of a: ");
a = Number.parseInt(a);
console.log(`The value of a is ${a} , and its type is: ${typeof a}`);
