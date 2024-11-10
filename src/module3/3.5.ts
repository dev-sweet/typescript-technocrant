class BankAccount {
  public name: string;
  public readonly id: number;
  private _balance: number;

  constructor(name: string, id: number, balance: number) {
    this.name = name;
    this.id = id;
    this._balance = balance;
  }
  addMoney(amount: number) {
    this._balance = this._balance + amount;
  }
}

const goriberAccount = new BankAccount("Sweet", 4343, 20);

goriberAccount.addMoney(89);
console.log(goriberAccount);
