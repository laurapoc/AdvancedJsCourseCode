// This is a generator function that yields Fibonacci numbers indefinitely.

//  generators are a special type of function that can pause and resume execution,
// allowing them to produce a sequence of values over time, without storing the entire sequence in memory at once.
function* fibonacci() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
// Example usage:
const fibGen = fibonacci();
console.log(fibGen.value); // 0
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
console.log(fibGen.next().value); // 3
// ...

// It might be used in scenarions where you need to generate large amount of data/images or smth similar

// ============
// example:

const allImages = Array.from(
  { length: 1000 },
  (_, i) => `https://placeimg.com/640/480/any?image=${i}`
);

function* getBatchOfImages(images, batchSize = 10) {
  let currIndex = 0;
  while (currIndex < images.length) {
    yield images.slice(currIndex, currIndex + batchSize);
    currIndex += batchSize;
  }
}

const imageGen = getBatchOfImages(allImages);
// Example usage:
console.log(imageGen.next().value); // First batch of images
console.log(imageGen.next().value); // Second batch of images
console.log(imageGen.next().value); // Third batch of images
// ...


const arrayAtExample = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
arrayAtExample.at(-1); // "j"
arrayAtExample.at(-2); // "i"