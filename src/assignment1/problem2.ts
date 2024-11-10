{
  // problem 2
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new
  // array with duplicates removed. Preserve the original order of elements.

  type RemoveDuplicates = (arr: number[]) => number[];
  const removeDuplicates: RemoveDuplicates = (arr) => {
    const result: number[] = arr.filter((item, i) => arr.indexOf(item) === i);
    return result;
  };

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(result);
}
