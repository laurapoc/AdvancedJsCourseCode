class MyClass {
  #privateMethod() {
    console.log("PRIVATE METHOD CALLED!!!");
  }

  publicMethod() {
    this.#privateMethod();
  }
}

const myClass = new MyClass();
myClass.publicMethod(); // This will call the private method
