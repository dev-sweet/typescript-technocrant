{
  // abstraction   1.interface 2.abstract

  //   abstraction using interface
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements Vehicle {
    startEngine() {
      console.log("I am starting the car engine");
    }

    stopEngine() {
      console.log("I am stop the car engine");
    }

    move() {
      console.log("I am moving the car");
    }

    test() {
      console.log("I am testing the car");
    }
  }

  //   abstract class
  abstract class Car2 {
    abstract startEngine(): void;

    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("I am testing the car");
    }
  }
  const toyota = new Car();
  //   toyota.startEngine();

  class Hondacar extends Car2 {
    startEngine(): void {
      console.log("Start engine");
    }

    stopEngine(): void {
      console.log("stop engine");
    }
    move(): void {
      console.log("Move the car");
    }
  }

  const hondaCar = new Hondacar();
  hondaCar.startEngine();
  hondaCar.move();
}
