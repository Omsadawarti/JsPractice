// There are three types of variables in JS.
// let(local scope) , var(global scope) and const(defines a variable as constant in js)
// let and const are introduced after ES6
// we can re-declare var but not let
// for eg:
// var a = 20;
// var a = 30 // valid

// let a = 30;
// let a = 90; //invalid and throw and error
//=================================

// PRIMITIVE DATATYPES IN JS
// There are 7 primitive datatypes in js and they are:
// nn ss bb u
// 1. null
// 2. number
// 3. string
// 4. symbol
// 5. bigInt
// 6. boolean
// 7. undefined

let a = null;
let b = 123;
let c = "Hello";
let d = Symbol("This is a Special Symbol");
let e = BigInt(45) + BigInt(5); // we can directly add bigInt
let f = false;
let g = undefined;

console.log(a, b, c, d, e, f, g);
// getting the type of a perticular variable
console.log(typeof f);
console.log(typeof e);

// creating a object in js (non-primitive datatype)
const myobj = {
  name: "Om",
  age: 22,
  isMarrid: false,
  Death: undefined,
};

console.log(myobj);
console.log(myobj["age"]); // 22
// OR
console.log(myobj.age); //  also valid
console.log(myobj["isPresent"]); // undefined
// now modifying the myobj , adding a new field into into

myobj["isPresent"] = true;

// we can modify the orignal object , but now assign a new object to the same const variable.
// myobj = {
//   name: "lala",
// };
// above line will give an error
console.log(myobj);
