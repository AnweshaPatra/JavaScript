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


console.log(1 + '1')
console.log(1 - '1')