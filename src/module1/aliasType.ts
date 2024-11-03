type Student = {
  name: string;
  address: string;
  age: number;
  phone: string;
};

const student1: Student = {
  name: "Sweet",
  address: "Chuadanga",
  age: 24,
  phone: "01727724844",
};

// type alias for decleare a variable
type FirstName = string;
type LastName = string;

const firstName: FirstName = "Sweet";
const lastName: string = "Ali";

// type alias for a function

type Add = (num1: number, num2: number) => number;

const add2: Add = (num1, num2) => num1 + num2;
