function createExponentFunction(exponent) {
  return function (val) {
    return val ** exponent;
  };
}

const square = createExponentFunction(2);
const cube = createExponentFunction(3);
const squareOfFour = square(4); // 16
const cubeOfTwo = cube(2); // 8

function uniqueIdGenerator(prefix) {
  let id = 0;
  return function () {
    id += 1;
    return `${prefix}${id}`;
  };
}

const getBookId = uniqueIdGenerator("book-");
const getUserId = uniqueIdGenerator("user_");
