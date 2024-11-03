{
  // generic type

  type genericArr<T> = Array<T>;
  //   const roll: number[] = [12, 21, 42];
  const roll: genericArr<number> = [12, 21, 42];

  //   const tutors: string[] = ["sweet", "mamun", "ashik"];
  const tutors: genericArr<string> = ["sweet", "mamun", "ashik"];

  //   const bools: boolean[] = [true, false, true];
  const bools: genericArr<boolean> = [true, false, true];

  //   Define object with generic type
  const user: genericArr<{ name: string; age: number }> = [
    {
      name: "Sweet",
      age: 21,
    },
    {
      name: "Abdullah",
      age: 24,
    },
  ];

  //   Generic with tuple

  type genericTuple<X, Y> = [X, Y];

  const manush: genericTuple<string, string> = ["sweet", "adsf"];
  const userWithId: genericTuple<number, { name: string; email: string }> = [
    1812829,
    {
      name: "sweet",
      email: "sweetali0520@gmail.com",
    },
  ];
}
