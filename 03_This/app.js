// Getters and setters:

// getters allows to retrieve value as an object with the logic inside of it
// it is treated as a property

// class Circle {
//   static allowedColors = new Set(["blue", "green"]); // create static reusable property

//   constructor(radius, color) {
//     this._radius = radius; // unerscore is used mostly for telling other developers to not change the porperty value. It doe snot do anything with JS
//     this.setColor(color);
//   }

//   setColor(newColor) {
//     if (Circle.allowedColors.has(newColor)) {
//       this._color = newColor;
//     } else {
//       throw new Error(`color ${newColor} is not allowed`);
//     }
//   }

//   get diameter() {
//     return this._radius * 2;
//   }

//   get radius() {
//     return this._radius;
//   }

//   // setters allows to update value like a property, but we can add logic in it

//   set radiusVal(value) {
//     if (value < 0) {
//       throw new Error("Radius cannot be negative");
//     } else {
//       this._radius = value;
//     }
//   }

//   get color() {
//     return this._color;
//   }

//   set color(newColor) {
//     this.setColor(newColor);
//   }
// }

// const circle = new Circle(2, "green");

// console.log(circle.diameter);
// console.log(circle.radius);
// circle.radius = -3;
// console.log(circle._color);
// const c = new Circle(10, "blue");
// console.log(c.color);
// c.color = "orange";
// console.log(c.color);

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    console.log(first);
    (this.firstName = first), (this.lastName = last);
  }
}

const u = new User("Laura", "Poc");
console.log(u.firstName);
console.log(u.fullName);
u.fullName = "new name";
