{
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(hours: number) {
      console.log(`${this.name} is sleeping for ${hours} hours`);
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(hours: number) {
      console.log(`Teacher ${this.name} is taking class for ${hours} hours`);
    }
  }
  const student = new Student("Sweet", 23, "Bangladesh");
  const teacher = new Teacher("Mamun", 24, "Dhaka", "professor");
  teacher.takeClass(6);
}
