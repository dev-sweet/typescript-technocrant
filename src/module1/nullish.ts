// making decision with various method

// using else if
// const realAge: number = 24;
//   if (age >= 18) {
//     console.log(`Age ${age} is adult much`);
//   }
//   if (age < 18) {
//     console.log(`Age ${age} is not adult!`);
//   }

//   using ternery operator
// const isAdult: string = realAge >= 18 ? "adult" : "not adults";
// console.log(isAdult);

// using nullish coalescing operator
const isAuthenticated: boolean = true;

const result1 = isAuthenticated ?? "Guest";
const result2 = isAuthenticated ? isAuthenticated : "Guest";

type User = {
  name: string;
  address: {
    city: string;
    road: string;
    presentAddress: string;
    permanentAddress?: string;
  };
};
