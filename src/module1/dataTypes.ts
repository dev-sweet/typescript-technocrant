// Data types in javascript

// string data types
const fName: string = "Abdullah Al Mamun Sweet";
// number data types
const age: number = 24;
// boolean data types
const isMarried: boolean = false;
// undefined data types
const wife: undefined = undefined;
// null data types
const salary: null = null;

// Not a Number but it's data type number!
const isNan = NaN;

// Array

// array of string
const students: string[] = ["Shahid", "Kaisar", "Zillu"];
// array of number
const rollList: number[] = [32, 23];

// tuple
const nameAndAge: [string, number] = ["23,", 3];

// Reference types --> Object

const user: {
  firstName: string;
  lastName: string;
  salary: number;
  isMarried: boolean;
  readonly company: string;
} = {
  firstName: "Abdullah",
  lastName: "Sweet",
  salary: 12200,
  isMarried: false,
  company: "Bekar Bangladesh ",
};
