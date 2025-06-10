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

// class Cat {
//   static numOfCats = 0;
//   numLegs = 4; // public class field of the instance of the Cat. Allowes to access property  from outside of the class
//   constructor(name) {
//     this.name = name;
//     Cat.numOfCats++;
//   }
// }

class Circle {
  #radius; // private class field
  constructor(radius) {
    this.#radius = radius;
  }

  getRadius() {
    return this.#radius;
  }

  #privateMethod() {
    console.log("private method called");
  }

  publicMethod() {
    this.#privateMethod(); // calling private method from public method
  }
}

const c = new Circle(5);
console.log(c);
// console.log(c.#radius); // This will throw an error because #radius is a private field and cannot be accessed outside the class
console.log(c.getRadius()); // This will work because getRadius is a public method that accesses the private field
c.publicMethod(); // This will call the private method through a public method

// ==================
// STATIC INITIALIZATION BLOCKS

class DataBaseConnection {
  static connection;
  static {
    // runs only once when the class is loaded
    if (ProcessingInstruction.env.NODE_ENV === "production") {
      this.connection = this.loadProductionConnection();
    } else {
      this.connection = this.loadDevelopmentConnection();
    }
  }
  static loadProductionConnection() {
    console.log("loadProductionConnection");
  }

  static loadDevelopmentConnection() {
    console.log("loadDevelopmentConnection");
  }
}
