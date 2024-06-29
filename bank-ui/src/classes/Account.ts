abstract class Account {
  protected balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): boolean;
  getBalance(): number {
    return this.balance;
  }
}
export default Account;