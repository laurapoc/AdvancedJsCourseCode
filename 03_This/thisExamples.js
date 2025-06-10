const person = {
  name: "conan",
  city: "Tokyo",
  sing: function () {
    return `${this.name} is singing in ${this.city}`;
  },
};

class Kitty {
  constructor(firstName) {
    this.firstName = firstName;
  }

  dance(style = "tango") {
    return `${this.firstName} is dancing ${style}`;
  }
}

const c = new Kitty("Kitty");
console.log(c.dance()); // Kitty is dancing tango
const kittyDance = c.dance;

console.log(kittyDance.call(c, "salsa")); // Kitty is dancing salsa

const fDance = c.dance.bind(c);
console.log(fDance()); // Kitty is dancing tango
const p = person.sing.bind(person);
console.log(p()); // conan is singing in Tokyo

const whatIsThis = function () {
  console.log("THIS IS: ", this);
  return this;
};

const obj = {
  color: "green",
  whatIsThis: whatIsThis,
};
