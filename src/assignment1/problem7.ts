{
  // problem 8
  //Create a TypeScript class Car with properties make, model, and year. Include a method
  //  getCarAge that returns the car's age based on the current year.

  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      (this.make = make), (this.model = model), (this.year = year);
    }

    getCarAge(): number {
      // multiline
      const date = new Date();
      const currentYear = date.getFullYear();
      return currentYear - this.year;

      // single line
      // return new Date().getFullYear() - this.year;
    }
  }

  const hondaCar = new Car("Honda", "Civic", 2018);
  console.log(hondaCar.getCarAge());
}
