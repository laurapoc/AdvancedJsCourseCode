class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }
  getRadius() {
    return this.#radius;
  }
}

const myCircle = new Circle(10);
console.log(Circle.#radius);  // This will throw an error because #radius is a private field and cannot be accessed outside the class
