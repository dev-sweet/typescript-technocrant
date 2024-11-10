{
  // problem 5
  // Write a generic function getProperty that takes an object and a property name as arguments and
  // returns the property value. Add a constraint to ensure the property name exists on the object.

  const getProperty = <T, K extends keyof T>(object: T, propertyName: K) => {
    return object[propertyName];
  };

  type InputType = {
    name: string;
    age: number;
    address: string;
  };
  const input: InputType = {
    name: "Sweet ali",
    age: 23,
    address: "Jadabpur,Hardi,Alamdanga, Chuadanga",
  };

  const result = getProperty(input, "address");
  console.log(result);
}
