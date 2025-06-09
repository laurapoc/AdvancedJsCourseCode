const key = "species";

const pet = {
  species: "Dog",
  name: "Elton",
  age: 1,
};

pet[1] = "cat"; //all keys in thebrackets are strigified
pet["1"] = "not cat";

pet.sayHi = function () {
  return `Hi, I am ${this.name}, the ${this.species}`;
};

pet.bark = function () {
  return "Woof!";
};

function getTrianleArea(base, height) {
  return (base * height) / 2;
}

function getTriangleHypotenuse(base, height) {
  return Math.sqrt(base ** 2 + height ** 2);
}

let MyTri = {
  base: 3,
  height: 4,
  getArea: function () {
    return (this.base * this.height) / 2;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.base ** 2 + this.height ** 2);
  },
};

// "this" refers to the instance of the class
// for example, in the getArea method, "this" refers to the MyTri object

class Triangle {
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

let myTri2 = new Triangle();
myTri2.a = 3;
myTri2.b = 4;

console.log(myTri2.getArea());
console.log(myTri2.getHypotenuse());

// ================

class TriangeWithConstructor {
  // constructor is automatically called when an instance of the class is created
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

const myTri3 = new TriangeWithConstructor(3, 4);
console.log(myTri3.getArea());

class TriangeWithValidation {
  // constructor functions always just return undefined. It is automaticaly called when
  //    an instance of the class is created
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);

    if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}
const myTri4 = new TriangeWithValidation(2, 4);
console.log(myTri4.getArea());

class BankAccount {
  constructor(accountHolder, accountNumber, balance = 0) {
    if (!accountHolder || typeof accountHolder !== "string") {
      throw new Error("Invalid account holder name");
    }

    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  // funcitons, placed in a class, are methods(formally, instance methods).
  // they have access to the instance of the class through "this" prefix
  // they take arguments and can return values like any oter function
  deposit(amt) {
    this.balance += amt;
    return amt > 0
      ? `Deposited ${amt} to account ${this.accountNumber}. New balance: ${this.balance}`
      : `Invalid deposit amount: ${amt}`;
  }
  withdraw(amt) {
    this.balance -= amt;
    return `Withdrew ${amt} from account ${this.accountNumber}. New balance: ${this.balance}`;
  }
}

const myAccount = new BankAccount("John Doe", "123456789", 87587);

class ShyTriangle extends TriangeWithValidation {
  // don't repeat if not different:
  // will "inherit" from parent

  describe() {
    return "(runs and hides)";
  }
}

const myShyTri = new ShyTriangle(4, 6);

class Colortriangle extends TriangeWithValidation {
  constructor(a, b, color) {
    super(a, b); // call the parent constructor to be able to use the parent class methods and add new instance properties
    this.color = color;
  }

  describe() {
    return `This triangle is ${this.color}`;
  }
}

const colorTri = new Colortriangle(3, 4, "red");

class ColorMoodTriangle extends Colortriangle {
  constructor(a, b, color, mood) {
    super(a, b, color); // call the parent constructor to be able to use the parent class methods and add new instance properties
    this.mood = mood;
  }

  describe() {
    return `This triangle is ${this.color} and feels ${this.mood}`;
  }
}

const colorMoodTri = new ColorMoodTriangle(3, 4, "red", "happy");

// ===============
// STATIC PROPERTIES

class Cat {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }

  // Static method
  static meow() {
    return `${this.species} says Meow!`; // "this" refers to the class, not the instance
  }

  static species = "Cat"; // static property, not instance property, but class property
}

const firstCat = new Cat("Whiskers", "Siamese", 2);

console.log(firstCat.name); // "Whiskers", instance property
console.log(firstCat.species); // undefined
console.log(Cat.species); // "Cat", static property can be accessed through the class itself
console.log(firstCat.breed); // "Siamese",  instance property

// ================
// STATIC METHODS

// JS gives "static" methods, where the method is called on a Class, not an object - therefore it cannot access individual Object attributes

console.log(Cat.meow()); // "Meow!", static method called on the class

class MyMath {
  static add(a, b) {
    return a + b;
  }
  static multiply(a, b) {
    return a * b;
  }
}

console.log(MyMath.add(5, 3)); // 8
console.log(MyMath.multiply(5, 3)); // 15

class Cat2 {
  constructor(catName, breed, age) {
    this.name = catName;
    this.breed = breed;
    this.age = age;
  }

  static registerStray() {
    const names = ["Whiskers", "Mittens", "Shadow", "Simba"];

    const name = choiceCat(names); // returns a random cat name from the array

    return new Cat2(name, "Unknown Breed", 0); // creates a new Cat2 instance with the random name
  }

  meow() {
    return `${this.name} says Meow!`;
  }
}

function choiceCat(arr) {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

console.log(Cat2.registerStray()); // creates a new Cat2 instance with a random name from the array
