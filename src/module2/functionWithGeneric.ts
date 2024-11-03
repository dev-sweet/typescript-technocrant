{
  // create a function with generic

  //   normal function
  const createArr = (param: string): [string] => {
    return [param];
  };

  //   generic function
  const createArrWithGeneric = <T>(param: T): [T] => {
    return [param];
  };

  //   generic with tuple
  const createArrWithTuple = <T, X>(param1: T, param2: X): [T, X] => {
    return [param1, param2];
  };
  const result11 = createArrWithTuple<string, number>("Hello world!", 3834935);
  const result1 = createArr("Hsdf");
  const result2 = createArrWithGeneric<number>(67);
}
