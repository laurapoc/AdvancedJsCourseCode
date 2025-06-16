function decrementArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = --arr[i];
  }
  return arr;
}

const numbers = [1, 2, 3, 4];

function* rangeGenerator(start, end) {
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  } else {
    for (let i = start; i >= end; i--) {
      yield i;
    }
  }
}
