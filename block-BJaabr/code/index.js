// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne (number) {
  return number + 1;
}

// - Write a Function Expression
let addOne = function (number) {
  return number + 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let addOne = (number) => number + 1;

// - Write an Arrow Function with curly brackets
let addOne = (number) => {
  return number + 1;
}

// - Execute the function
addOne (7);

// - Execute the function and store the return value in a variable.
let returnValue = addOne (7);

// - What is the typeof returnValue
"number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(number) {
  return number - 1;
}

// - Write a Function Expression
let substractOne = function (number) {
  return number - 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (number) => number - 1;

// - Write an Arrow Function with curly brackets
let substractOne = (number) => {
  return number - 1;
}

// - Execute the function
substractOne(7);

// - Execute the function and store the return value in a variable.
let returnValue = substractOne(7);

// - What is the typeof returnValue
"number"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(a, b) {
  return a + b;
}

// - Write a Function Expression
let sum = function (a. b) {
  return a + b;
}


// - Write an Arrow Function without curly brackets(if possible)
let sum = (a, b) => a + b;

// - Write an Arrow Function with curly brackets
let sum = (a, b) => {
  return a + b;
}

// - Execute the function
sum (4,5);

// - Execute the function and store the return value in a variable
let returnValue = sum (4,5);

// - What is the typeof returnValue
'number'

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square (num) {
  return num * num;
}

// - Write a Function Expression
let square = function (num) {
  return num * num;
}

// - Write an Arrow Function without curly brackets(if possible)
let square = (num) => num * num;

// - Write an Arrow Function with curly brackets
let square = (num) => {
  return num * num;
}

// - Execute the function
square(5);

// - Execute the function and store the return value in a variable
let returnValue = square(5);

// - What is the typeof returnValue
"number"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater (a, b) {
  if (a < b) {
    return "False"
  } else {
    return "True"
  }
}

// - Write a Function Expression
let isGreater = function (a, b) {
  if (a < b) {
    return "False"
  } else {
    return "True"
  }
}

// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (a, b) => {
  if (a < b) {
    return "False"
  } else {
    return "True"
  }
}

// - Write an Arrow Function with curly brackets
let isGreater = (a, b) => {
  if (a < b) {
    return "False"
  } else {
    return "True"
  }
}

// - Execute the function
isGreater (4,5);

// - Execute the function and store the return value in a variable
let returnValue = isGreater (4,5);

// - What is the typeof returnValue
"string"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven (num) {
  if (num % 2 == 0) {
    return "Number is even";
  } else {
    return "Number is odd"
  }
}

// - Write an anonymous Function Expression
let oddOrEve = function (num) {
  if (num % 2 == 0) {
    return "Number is even";
  } else {
    return "Number is odd"
  }
}

// - Write an named Function Expression
let oddOrEve = function oddOrEven (num) {
  if (num % 2 == 0) {
    return "Number is even";
  } else {
    return "Number is odd"
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEve = function oddOrEven (num) {
  if (num % 2 == 0) {
    return "Number is even";
  } else {
    return "Number is odd"
  }
}

// - Write an Arrow Function with curly brackets
let oddOrEve = function oddOrEven (num) {
  if (num % 2 == 0) {
    return "Number is even";
  } else {
    return "Number is odd"
  }
}

// - Execute the function
oddOrEve (5);

// - Execute the function and store the return value in a variable
let returnValue = oddOrEve(5)

// - What is the typeof returnValue
'string'