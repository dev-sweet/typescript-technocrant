// mapped types

const arrOfNums: number[] = [1, 2, 3, 4, 5, 6, 7];
const arrOfStrings: string[] = arrOfNums.map((num) => num.toString());

console.log(arrOfStrings);

type AreaNumber = {
  height: number;
  width: number;
};

// convert number to string by mapped type
type AreaString<T> = {
  [key in keyof T]: T[key];
};

// lookup type
// type Height = AreaString["height"];

const area1: AreaString<{ height: string; width: string }> = {
  height: "3453",
  width: "3844",
};
