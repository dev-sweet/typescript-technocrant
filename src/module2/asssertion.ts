let anything: any;

anything = "My name";
anything = 3894;

anything as number;

// create a function that convert kg to grams

const kgToGm = (value: number | string): number | string | undefined => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value) * 1000;
    return `The expected output is : ${convertedValue}`;
  } else if (typeof value === "number") {
    return value * 1000;
  }
};

const result3 = kgToGm("45") as number;
console.log(result3);

// decleare error type
type CustomError = {
  message: string;
  status: number;
};
try {
} catch (error) {
  // handle error type by using assertion
  console.log((error as CustomError).message);
}
