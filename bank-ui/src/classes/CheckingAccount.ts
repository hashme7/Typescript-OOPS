import Account from "./Account";

class CheckingAccount extends Account {
  private overdraftLimit: number;

  constructor(initialBalance: number, overdraftLimit: number) {
    super(initialBalance);
    this.overdraftLimit = overdraftLimit;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): boolean {
    if (amount > this.balance + this.overdraftLimit) {
      return false;
    }
    this.balance -= amount;
    return true;
  }
}
export default CheckingAccount;
