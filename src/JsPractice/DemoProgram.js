const verifyInput = (input) => {
  if (!isNaN(input)) {
    return true;
  }
  return false;
};

const prompt = require("prompt-sync")();
while (true) {
  let input = prompt("Enter a number: ");
  if (verifyInput(input)) {
    console.log("You entered: " + input);
    break;
  }
  console.log("Invalid Number! Please try again.");
}
