// static in ts

class Counter {
  static count: number = 0;
  increment() {
    return (Counter.count = Counter.count + 1);
  }
  decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

const counter1 = new Counter();
const counter2 = new Counter();
console.log(counter1.increment());

console.log(counter2.increment());
console.log(counter2.increment());
