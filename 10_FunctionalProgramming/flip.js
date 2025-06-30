// Flip Exercise
// Write a function called flip, that takes a function as an argument and returns a new function that, when invoked, calls the original function passed to flip with its arguments reversed.

// For example, if we have a simple function subtract that takes two arguments, a and b, and subtracts b from a, flipping it should reverse the arguments such that it subtracts a from b.

// function subtract(a, b) {
//   return a - b;
// }

// const flippedSubtract = flip(subtract);

// console.log(flippedSubtract(3, 10)); // Should return 7, because it's actually doing 10 - 3
// console.log(flippedSubtract(3, 10)); // Should return 7, because it's actually doing 10 - 3

const flip =
  (f) =>
  (...args) => {
    return f(...args.reverse());
  };

function subtract(a, b) {
  return a - b;
}

const flippedSubtract = flip(subtract);

console.log(flippedSubtract(3, 10));