{
  // polymorphism
  class Person {
    getSleep() {
      console.log(`I'm sleeping for 8 hours a day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I'm sleeping for 7 hours a day`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`I'm sleeping for 6 hours a day`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };
  const person = new Person();
  const student = new Student();
  const developer = new Developer();

  getSleepingHours(person);
  getSleepingHours(student);
  getSleepingHours(developer);

  //   polymorphism example 2
  class Shape {
    getArea() {
      return 0;
    }
  }

  class Cirlce extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea() {
      return Math.floor(Math.PI * this.radius * this.radius);
    }
  }

  class Rentangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea() {
      return this.height * this.width;
    }
  }

  const shape = new Shape();
  const circle = new Cirlce(34);
  const rectangle = new Rentangle(24, 24);
  console.log(rectangle.getArea());
}
