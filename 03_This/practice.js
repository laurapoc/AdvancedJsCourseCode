class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}, age: ${this.age}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.firstName = first;
    this.lastName = last;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = newAge;
  }
}

const u = new User("Laura", "Poc", 18);
console.log(u.firstName);
console.log(u.fullName);
u.fullName = "new name";
