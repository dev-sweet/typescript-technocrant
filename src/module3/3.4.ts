{
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`I'm sounding !`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`I am ${this.name} and I make Barking`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeo() {
      console.log(`I'm ${this.name} and I make Mewing`);
    }
  }

  //   function getAnima(animal: Animal) {
  //     if (animal instanceof Dog) {
  //       animal.makeBark();
  //     } else if (animal instanceof Cat) {
  //       animal.makeMeo();
  //     } else {
  //       animal.makeSound();
  //     }
  //   }

  // smart way

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };
  function getAnima(animal: Animal) {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeo();
    } else {
      animal.makeSound();
    }
  }
  const animal = new Animal("Ashraful Makhlukat", "Human");
  const dog1 = new Dog("Kutta", "dog");
  const cat1 = new Cat("Jojo", "cat");
  getAnima(animal);
  getAnima(dog1);
  getAnima(cat1);
}
