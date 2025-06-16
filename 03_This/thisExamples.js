const person = {
  name: "conan",
  city: "Tokyo",

  sing: function (punctuation) {
    return `${this.name} is singing in ${this.city}${punctuation}`;
  },
};

class Kitty {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  dance(style = "tango") {
    return `${this.name} is dancing ${style} in the city of ${this.city}`;
  }
}

const cc = new Kitty("Kitty", "Kaunas");
console.log(cc.dance()); // Kitty is dancing tango
const kittyDance = cc.dance;

console.log(kittyDance.call(cc, "salsa")); // Kitty is dancing salsa
console.log(cc.dance.call(person, "salsa"));
console.log(person.sing.call(cc, "!")); // conan is singing in Kaunas!

const fDance = cc.dance.bind(c);
console.log(fDance()); // Kitty is dancing tango

const whatIsThis = function () {
  console.log("THIS IS: ", this);
  return this;
};

const obj = {
  color: "green",
  whatIsThis: whatIsThis,
};

const nums = [1, 2, 3, 4, 5];
console.log(Math.max(...nums)); // 5

// ================
// apply method
console.log(Math.max.apply(null, nums)); // 5
console.log(cc.dance.apply(person, ["salsa"])); // conan is dancing salsa . In this case second argument should be an array

function maximum() {
  console.log(arguments); // Arguments is an array-like object
  return Math.max.apply(null, arguments); // First argument is used to set the value of this within the context
}

console.log(maximum(7, 8, 5, 2)); // 8

// ================
// bind method

const fluffy = { name: "Fluffy", city: "London" };
const fluffyDance2 = cc.dance.bind(fluffy); // bind creates a new function that, when called, has its this keyword set to the provided value
console.log(fluffyDance2()); // Fluffy is dancing tango in the city of Kaunas

// ================
//  binding arguments
const p = person.sing.bind(person);
console.log(p(".")); // conan is singing in Tokyo.

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // bind the first argument to 2, so double will multiply any number by 2. It's a coppy of a multiply function, which has backed in arguments
const tripple = multiply.bind(null, 3); // bind the first argument to 3, so tripple will multiply any number by 3
const allwaysNine = multiply.bind(null, 3, 3); // bind the first argument to 9, so allwaysNine will always return 9

console.log(double(5)); // 10
console.log(tripple(5)); // 15
console.log(allwaysNine()); // 9
