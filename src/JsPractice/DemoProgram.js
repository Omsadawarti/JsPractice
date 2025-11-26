// importing the prompt-sync library into the program [for that , we first need to install prompt-sync]
const prompt = require("prompt-sync")();
let num = prompt("Enter a number: ");
console.log(
  num % 2 === 0 ? "Number is divisible by 2" : "Number is divisible by 3"
);
