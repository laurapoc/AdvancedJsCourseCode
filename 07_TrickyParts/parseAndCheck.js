const numbers = ["1", "2", "3", "4", "6", ];

function parseAndCheck(arr) {
  return Array.from(arr, (item) => {
    if (isNaN(parseFloat(item))) {
      throw new Error("Invalid Number");
    }
    return parseFloat(item);
  });
}

// Example usage:
