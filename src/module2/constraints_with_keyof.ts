interface Vehicle {
  bike: string;
  car: string;
  ship: string;
}

type Owner = "bike" | "car" | "ship"; //manual process to union type

// using keyof operator to union type Vehicle interface
type Owner2 = keyof Vehicle;
const owner1: Owner2 = "ship";

const getProperty = <X, Y extends keyof X>(obj: X, text: Y) => {
  return obj[text];
};

const getResult = getProperty({ name: "sweet", email: "sweet" }, "email");
