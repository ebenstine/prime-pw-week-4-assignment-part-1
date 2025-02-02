console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}


// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  console.log('Hello, ' + name + '!');
  return true;
}
// Remember to call the function to test
helloName('Eben');
//added my name to personalize the greeting

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
//Testing the addNumbers function
console.log('First Number + Second Number', addNumbers(5, 7));
console.log('First Number + Second Number', addNumbers(21405, 10054));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  let answer = firstNumber * secondNumber * thirdNumber;
  return answer;
}
//Testing the multiplyThree function, should return 60.
console.log('First Number * Second Number * Third Number', multiplyThree(3, 4, 5));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else if (number <= 0)
    return false;
}

//Completed conditional to include else statement accurately.
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.


let array = ['John', 'Paul', 'George', 'Ringo'];

function getLast(array) {
  if (array.length > 0) {
    return array[array.length - 1];
  } else {
    return 'undefined';
  }
}
//Testing getLast function; should return Ringo.
//Also ran a test with empty array to log undefined.
console.log('Last item should be Ringo:', getLast(array));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  let i = 0
  for (i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  if (value !== array[i]) {
    return false;
  }
}
//Testing for loop to find value in the array.
console.log(find(12, [12, 22, 32, 42, 52]));
console.log(find(62, [12, 22, 32, 42, 52]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

//Creating a conditional to check the value of the first letter
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  } else {
    return false;
  }
}
//Testing isFirstLetter function
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array

let numberArray = [500, 600, 20000, 10300, 59]

function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  //Making a for loop to loop to find the sum of all the numbers
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum;
}
//Testing the sumAll function; should log as the first few digits of pi
console.log('Sum should be pi', sumAll([numberArray]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
//Testing the function
console.log('Should return pi in separated integers', positiveArray([31, 45, 9, 26, 59, -6, -6]));
console.log('Should return empty', positiveArray([-30, -15, 0, -15, -30]));
//11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Creating a function to convert hours into seconds.
//We declare the variable seconds equal to the right math, and log the function to test.
function howManySeconds(hours) {
  let seconds = (hours * 60) * 60;
  return seconds
}
//Test should show 7200
console.log(howManySeconds(2));
