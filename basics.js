var flag = 10; // Declare a variable named 'flag' and assign it the value 10.
var flag = 20; // This reassigns the same 'flag' variable with the value 20.

let temp = 10; // Declare a variable named 'flag' and assign it the value 10.
//let temp = 20; // This will result in a SyntaxError: Identifier 'flag' has already been declared.

const val = 10; // Declare a constant variable named 'flag' and assign it the value 10.
//const flag = 20; // This will result in a SyntaxError: Identifier 'flag' has already been declared.
//flag = 20; // This will result in a TypeError: Assignment to constant variable.
console.log(flag, temp, val)