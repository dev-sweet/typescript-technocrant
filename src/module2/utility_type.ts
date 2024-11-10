// utility type
// pick
type Person = {
  name: string;
  age: number;
  email?: string;
  phone: string;
};

type Name = Person["age"];
// using pick
// pick specific property
type Name2 = Pick<Person, "name">;

// pick multiple property using union
type NameAndAge = Pick<Person, "name" | "age">;

// use omit to remove property
type ContactInfo = Omit<Person, "name" | "age">;

// Required
type PersonRequired = Required<Person>;

// partial
type PersonOptional = Partial<PersonRequired>;

// readonly
type PersonReadonly = Readonly<Person>;
const person: PersonReadonly = { name: "sweet", age: 23, phone: "012727e" };

person.name = "abdullah";

type ObjType = Record<string, string>;

const obj1: ObjType = {
  name: "ajdf",
  age: "sfd",
  ade: "",
};
