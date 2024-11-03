interface Developer<T, Z = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseDate: string;
  };
  smartWatch: T;
  bike?: Z;
}
type SmartWatch = {
  brand: string;
  model: string;
  display: string;
};
const poorDeveloper: Developer<SmartWatch> = {
  name: "Sweet Ali",
  computer: {
    brand: "ASUS",
    model: "X543U",
    releaseDate: "12/12/2022",
  },
  smartWatch: {
    brand: "Samsung",
    model: "WX723",
    display: "OLED",
  },
};

interface RichWatch {
  brand: string;
  model: string;
  display: string;
  heartTrack: boolean;
  sleepTrack: boolean;
  stepTrack: boolean;
}
const richDeveloper: Developer<
  RichWatch,
  { name: string; model: string; price: number }
> = {
  name: "Abdullah",
  computer: {
    brand: "Apple",
    model: "mackbook pr",
    releaseDate: "12/12/2022",
  },
  smartWatch: {
    brand: "Apple",
    model: "SM62",
    display: "LED",
    heartTrack: true,
    sleepTrack: true,
    stepTrack: true,
  },
  bike: {
    name: "Honda",
    model: "CB Shine",
    price: 73500,
  },
};
