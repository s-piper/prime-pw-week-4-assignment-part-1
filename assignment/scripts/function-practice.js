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


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( name ) {
  return `Hello, ${name}!`
}
console.log(helloName('Jo'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let addition = firstNumber + secondNumber;
  return addition;
}
console.log(`Should add 3+3. Answer: ${addNumbers(3, 3)}`);

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ) {
  let multiply = num1 * num2 * num3;
  return multiply;
}
console.log(`Should multiply 3*3*3. Answer: ${multiplyThree(3, 3, 3)}`);

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {

    return false;
  }
}
console.log(`Should return true. Answer: ${isPositive(1)}`);
// Call the function to test each outcome (true & false)
isPositive(1);
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
// Not sure if you mean just write another log for above and below sooooo that's what I did.
isPositive(3);
console.log(`There are eggs in the fridge. ${isPositive(3)}`);
isPositive(0);
console.log( 'isPositive - should say false', isPositive(0) );
console.log(`There are bacon strips in the fridge. ${isPositive(0)}`);
isPositive(-3);
console.log( 'isPositive - should say false', isPositive(-3) );
console.log(`There is a full 12 pack of Diet Coke. ${isPositive(-3)}`);


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.


function getLast( array ) {
  console.log('in getLast');
  array = ['pants', 'shirt', 'shoes'];
  return array[array.length-1];
}// end getLast array
console.log(getLast());
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

let arrayColor = ['red', 'blue', 'green',];
function find( value, array){
  console.log('in find');
  for ( let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false; //returns after the loop is finished
}
console.log('Finding color red, expecting true:', find('red', arrayColor));
console.log('Finding color purple, expecting false:', find('purple', arrayColor));
console.log('Finding color blue, expecting true:', find('blue', arrayColor));
console.log('Finding color green, expecting true', find('green', arrayColor));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt (0)) {
    return true;
  }
  if (letter !== string.charAt (0)) {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log('Expect to equal 6. Answer:',sumAll([1, 2, 3]));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function posOnly( array ){
  let positive = array.filter(num => num > -1);
  return positive;
}
console.log(posOnly([-5, -10, 12, 1, -3, 5]));
console.log(posOnly([-1,-2,-3,-4]));
// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Power Calculator.  It takes voltage and current to return the calculated power in watts.

// function circuitPower(voltage, current){
//   watts = voltage * current;
//   return watts
// }
// console.log(circuitPower(900, 10), 'watts');
//
