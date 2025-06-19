// function createCounter() {
//   let count = 0;
//   return {
//     increment: function () {
//       return count++;
//     },
//     decrement: function () {
//       return count--;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// }

// immediately invoked function expression (IIFE) to create a closure
const counter = (function () {
  let count = 0;
  return {
    increment: function () {
      return count++;
    },
    decrement: function () {
      return count--;
    },
    getCount: function () {
      return count;
    },
  };
})();
