class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Ebook extends Book {
  constructor(title, author, year, fileSize) {
    super(title, author, year); // call the parent constructor to initialize title, author, and year
    this.fileSize = fileSize; // additional property for Ebook
  }

  download() {
    return `Book "${this.title}", size of ${this.fileSize} MB`;
  }
}

const myEbook = new Ebook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 1.5);

console.log(myEbook.download());

class ArrayUtils {
  constructor() {
    throw new Error("ArrayUtils cannot be instantiated."); // Prevent instantiation
  }

  static average(array) {
    if (array.length === 0) {
      throw new Error("Array cannot be empty."); // Throw an error if the array is empty
    }

    return array.reduce((sum, value) => sum + value, 0) / array.length; // Calculate the average of the array
  }

  static max(array) {
    return array.reduce((max, value) => (value > max ? value : max), array[0]); // Find the maximum value in the array
  }
}
