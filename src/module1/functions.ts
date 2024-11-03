// javascript traditional function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// javascript ES6 function
const addNumbers = (num1: number, num2: number): number => num1 + num2;

// function as a method in a Object
const user: { name: string; age: number; balance: number; addBalance: any } = {
  name: "Sweet",
  age: 24,
  balance: 0,

  addBalance(bal: number): number {
    return (this.balance = this.balance + bal);
  },
};
