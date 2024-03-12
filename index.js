// Functions
// function definition
function myFunction() {
  console.log("Hello World");
  console.log("We are learning JS :)");
}
// Function Call/Invoke
myFunction();
// Function Parameter
function myMsg(msg) {
  // Parameter -> input
  console.log(msg);
}
// myMsg(); it will print undefined because we have to write something within the brackets..
myMsg("I Love JS"); // Argument
// We can also use more than 1 parameters in functions e.g.
function myMsg(msg, n) {
  // Parameter -> input
  console.log(msg * n);
}
myMsg("I Love JS", 100); // Argument it will print NaN which means Not a Number because string can't be multiplied by a number
// Function to calculate sum of two numbers.
function sum(a, b) {
  console.log(a + b);
}
sum(1, 2);
sum(87, 45); // both of them will print the sum of two numbers because in funcions we have used console.log;
// Use of Return Statement in Above Example.
function add(x, y) {
  s = x + y;
  return s;
  // console.log("anything") we can't write any code after return it will show unreachable code detected
}
// add(3,5) it will not print anything because there is no console.log in this function
// so we have to store it in a new variable and then use that variable in console.log
let variable = add(3, 5);
console.log(variable);
// Note: Function parameters are local variables of functions and they have block scope
// Arrow Functions: Compact way of writing a function

// Addition function
function addition(a, b) {
  return a + b;
}
// Arrow Addition function
// Arrow Functions are Part of Modern JS
const arrowAdd = (a, b) => {
  console.log(a + b);
};
arrowAdd(3, 5);

function multiplication(a, b) {
  return a * b;
}
// Arrow Multiplication function
const arrowMul = (a, b) => {
  console.log(a * b);
};
arrowMul(3, 5);
// We can also print something by using arrow functions without any input or parameters.
const printHello = () => {
  console.log("hello");
};
printHello();
// Practice Question 1: Create a Function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  //   console.log(count);
  return count;
}
countVowels("abc"); // The output will be 1 because the String abc has one vowel in it
countVowels("Hamza"); // The output will be 2 because the String Hamza has two vowels in it

// Create an arrow function to perform the same task.
const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  //  console.log(count);
  return count;
};
countVow("Usman");
// Note: A Callback Function is passed as an argument to another function.
// For EachLoop in simple function form
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  // value at each index
  console.log(val);
});
// ForEach Loop in arrow function form
arr.forEach((val) => {
  console.log(val);
});
// For Each Loop takes three Parameters which are optional they are value,index and the array itself.
let cities = ["Multan", "Lahore", "Islamabad"];
cities.forEach((val, idx, cities) => {
  console.log(val.toUpperCase(), idx, cities);
});
// Note: ForEach are Higher Order Functions/Methods.
// Note: Higher Order Functions are those functions which take other functions as parameters or they return a function as their output. A Callback Function is a Higher Order Function.

// Practice Question 2: For a given array of numbers, print the square of each value using the forEach Loop.
let nums = [2, 3, 4, 5, 6];
nums.forEach((num) => {
  console.log(num * num); // num ** 2
});
// Callback example of above question
let num = [2, 3, 4, 5, 6];
let calcSquare = (num) => {
  console.log(num * num);
};
num.forEach(calcSquare); // This is how we use Callback Function.

// Some More Array Methods
// Map Method: It is quite similar to ForEach it gives a new array.
let numbers = [2, 5, 3, 4, 1];
let newArr = numbers.map((val) => {
  return val * 2;
});
console.log(newArr);

// Filter Method
let naturalArr = [1, 2, 3, 4, 5, 6, 7];
let evenArr = naturalArr.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArr);

// Reduce Method
let arr1 = [1, 2, 3, 4];
const output = arr1.reduce((prev, curr) => {
  return prev + curr;
});
console.log(output);
// One more Example to return largest number in an array.
let arr2 = [5, 6, 1, 2, 3];
const result = arr2.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(result);
// Practice Question 3: We are given array of marks of students. Filter our of the marks of students that scored 90+
let scores = [87, 93, 64, 99, 86, 92, 34];
let toppers = scores.filter((val) => {
  return val > 90;
});
console.log("The Toppers have Marks", toppers);

/* Practice Question 4: Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/
let n = prompt("Enter a Number");
let arr3 = [];
for (let i = 0; i <= n; i++) {
  arr3[i - 1] = i; // 1[0], 2[1], 3[2], 4[3]
}
console.log(arr3);

let sum1 = arr3.reduce((res, curr) => {
  return res + curr;
});
console.log("Sum ",sum1);

let factorial = arr3.reduce((res, curr) => {
  return res * curr;
});
console.log("Factorial ",factorial);

// Practice Examples.
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr4 = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16

const factoriall = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factoriall(3)); // 6

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numberss = [0, 1, 2, 5, 10];
console.log(map(cube, numberss)); // [0, 1, 8, 125, 1000]
