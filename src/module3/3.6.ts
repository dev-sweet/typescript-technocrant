{
  class BankAccount {
    name: string;
    id: number;
    _balance: number;
    constructor(name: string, id: number, balance: number) {
      this.name = name;
      this.id = id;
      this._balance = balance;
    }

    get balance() {
      return this._balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const customer1 = new BankAccount("sweet", 89, 40);
  customer1.deposit = 90;
  console.log(customer1.balance);
}
