class Animal {
  //   public name: string;
  //   public species: string;
  //   public sound: string;

  //   parameter property
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shephard", "dog", "Ghew Ghew");
const cat = new Animal("Persian Vai", "cat", "Mew Mew");

cat.makeSound();
