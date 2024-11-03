const searching = (value: string | null) => {
  if (value) {
    console.log("Name is searching!");
  } else {
    console.log("There is nothing to search");
  }
};

searching("");

// unknown type
const getSpeedPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed: number = value * 1000;
    return convertedSpeed;
  }
};

getSpeedPerSecond(1087);

// never type
const throwNewError = (errMessage: string): never => {
  throw new Error(errMessage);
};

console.log("Something went wrong!");
