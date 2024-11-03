{
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  //   intersection in type
  type UserWithRole1 = User1 & { role: number };

  //   extends interface with User2 and {role:string} object
  interface UserWithRole2 extends User2 {
    role: number;
  }

  const user: UserWithRole2 = {
    name: "Sweet",
    age: 24,
    role: 1924004,
  };

  // decleare array with interface

  // at first we decleare array with type
  type Roll1 = number[];

  // then we decleare an array with interface
  interface Roll2 {
    [index: number]: number;
  }

  // decleare a function with interface

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (numb1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => {
    return num1 + num2;
  };
}
