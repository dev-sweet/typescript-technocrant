{
  // problem 8
  //Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of
  //keys keys. The function should return true if all of the specified keys exist in the object; otherwise,
  // it should return false.

  const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
    const result = keys.every((key) => key in obj);
    return result;
  };

  console.log(
    validateKeys<{ name: string; age: number; address: string }>(
      {
        name: "sweet",
        age: 23,
        address: "ase kono ak jaiga",
      },
      ["name"]
    )
  );
}
