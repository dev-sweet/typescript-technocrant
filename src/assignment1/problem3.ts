{
  // problem 3
  //Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word
  // (string). The function should return the number of times the word appears in the sentence, ignoring
  //case. Use the simple sentence without punctuation as input.

  type CountWordOccurrences = (sentence: string, word: string) => number;

  const countWordOccurrences: CountWordOccurrences = (sentence, word) => {
    // using forEach method
    return sentence
      .toLowerCase()
      .split(" ")
      .filter((w) => w === word.toLowerCase()).length;
  };

  const result = countWordOccurrences(
    "I love typescript Typescript typescript",
    "typescript"
  );
  console.log(result);
}
