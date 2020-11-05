console.log('hello');

//alert('Hey')

// How to write a comment inline


// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
//console.log(someNumber);

// Manipulate DOM with JavaScript
/* ... It's just a fancy way of saying
change HTML with JavaScript */

//var age = prompt("What is your age?");

//document.getElementById('someText').innerHTML = age;


// Numbers in JavaScript
var num1 = 10;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply, remainder
console.log(num1 % 6)
//console.log(num1 / 6);

// Increment/decrement by 20
num1 += 20;
console.log(num1)


/* Functions
1. Create a function
2. Call the function
*/

// Create the function
function fun() {
    console.log("This is a function")
}

// Call the function
fun();

/* Create a function that takes in a name
and says hello followed by your name
*/

//var name = prompt("What's your name?");

function greeting(yourName) {
    var result = "Hello " + yourName;
    console.log(result);
}

//greeting(name);

// How do arguments work in functions?
// How do we add 2 numvers together in a function

function sumNumbers(a, b) {
    var result = a + b;
    console.log(result);
}

sumNumbers(1, 3);


/* While loops

var num = 0;

while (num < 100) {
    num++;
    console.log(num);
}
*/


// For loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}


// Data Types
let yourAge = 13; // Number
let yourName = 'Srikar'; // String
let name = { first: 'Srikar', last: 'Kusumanchi' }; // Object
let truth = false; // Boolean
let groceries = ['apple', 'banana', 'oranges']; // Array
let random; // Undefined
let nothing = null; // Null


// Strings in JavaScript (Common Methods)
let fruit = 'banana,apple,orange,blackberry';
let moreFruits = 'banana\napple';  // New line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6)); // 0-indexed    string.slice(inclusive, exclusive)
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // Split by a comma
console.log(fruit.split('')); // Split by characters


// Arrays
let fruits = ['banana', 'apple', 'orange', 'pineapples'];

fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[1]); // Access value at index 1

fruits[0] = 'strawberry';
console.log(fruits);

for (let i = 0; i < fruit.length; i++) {
    console.log(fruits[i]);
}


// Array Common Methods
console.log('To string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits, fruits.pop(), fruits); // Removes the last item
console.log(fruits.push('mango'), fruits); // Appends to the end of the array
console.log(fruits[4]);
fruits[fruits.length] = 'pear'; // Alternate to the push method
console.log(fruits)
fruits.shift(); // Removes the first element from a array
console.log(fruits);
fruits.unshift('blueberries') // Appends to the beginning of an array
console.log(fruits)

let vegetables = ['tomato', 'spinach', 'bell pepper', 'carrot', 'okra'];
let veggiesAndFruits = fruits.concat(vegetables) // Combines two arrays
console.log(veggiesAndFruits)
console.log(veggiesAndFruits.slice(1, 4));
console.log(veggiesAndFruits.reverse());
console.log(veggiesAndFruits.sort());

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 255, 69, 420];
console.log(numbers.sort(function (a, b) { return a - b })); // Sorts the array in ascending order
console.log(numbers.sort(function (a, b) { return b - a })); // Sorts the array in descending order

let blank = new Array();
for (let i = 0; i <= 10; i++) {
    blank.push(i);
}
console.log(blank);


// Objects in JS (Dictionaries in Python)

// studentInfo is OOP in JS
// "this" is equivalent to "self" in Python

let student = {
    first: 'Srikar',
    last: ' Kusumanchi',
    age: 20,
    height: "5 feet 10",
    studentInfo: function () {
        return 'Name: ' + this.first + this.last + '\n' + 'His age is ' + this.age + '\n' + 'His height is ' + this.height;
    }
};
//console.log(student.first);
// console.log(student[first]); => Can't do this, it will cause an error
//console.log(student.last);
student.first = 'Abhi'; // Modifying a value
//console.log(student.first);
//console.log(student.age);
//console.log(student.height);
student.age++;
console.log(student.age);

console.log(student.studentInfo());


// Conditionals, Control Flows (if, else)
// && AND
// || OR
//var age = prompt("What's your age?");
/*
if ( (age >= 18) && (age <= 35) ) {
    ageStatus = 'Your age is between 18 and 35';
    document.write(ageStatus);
} else {
    ageStatus = "Your age isn't  between 18 and 35";
    document.write(ageStatus);
}
*/


// Switch Statements
// 0 = Sunday 
// 6 = Saturday
// Differentiates between Weekday and Weekend
switch (6) {
    case 0:
        text = 'Weekend';
        break;
    case 5:
        text = 'Weekend';
        break;
    case 6:
        text = 'Weekend';
        break;

    default:
        text = 'Weekday'
}

console.log(text);