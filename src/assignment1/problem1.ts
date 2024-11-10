// problem 1
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array
// with duplicates removed. Preserve the original order of elements.

type SumArray = (arr: number[]) => number;
const sumArray: SumArray = (arr) => {
  const sum = arr.reduce((total, item) => total + item, 0);

  return sum;
};

const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
