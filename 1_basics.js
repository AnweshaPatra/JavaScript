var flag = 10; // Declare a variable named 'flag' and assign it the value 10.
var flag = 20; // This reassigns the same 'flag' variable with the value 20.

let temp = 10; // Declare a variable named 'flag' and assign it the value 10.
//let temp = 20; // This will result in a SyntaxError: Identifier 'flag' has already been declared.

const val = 10; // Declare a constant variable named 'flag' and assign it the value 10.
//const flag = 20; // This will result in a SyntaxError: Identifier 'flag' has already been declared.
//flag = 20; // This will result in a TypeError: Assignment to constant variable.
console.log(flag, temp, val)

// Object cration 
var obj = {
    'a': 1,
    10: "bird",
    "details": function() {
        var name = "John Doe";
        var age = 35;
        return [name, age];
    }
};

console.log(obj[10], obj.a);
console.log(obj["details"]()); // This will now return an array with the values.

// Deleting 
// delete obj.objectName ; OR delete obj["objectName"] ;

// Implicit Type Coercion: Implicit type coercion in javascript is the automaticconversion of value from one data type to another. It takes place when the operands of an expression are of different data types.
// JavaScript evaluates data from left to the right.
console.log(1 + '1')
console.log(1 - '1')
let x1 = 5 + 4 + "Birds"
console.log(x1)
let x2 = "Birds" + 5 + 4 
console.log(x2)

// Automatic Type Conversion : While doing operations on two Strings, sometimes it automatically converts them to Number for the desired output.
let x = "10"; let y = "2"; let z = x / y ; console.log(z);

// Block vs Function Scope
{
    var i = "Bird"
}

function fun() {
    var i = "Cow"
    console.log(i) // Prints Cow upon function call
}
fun()
console.log(i) // Prints Bird
