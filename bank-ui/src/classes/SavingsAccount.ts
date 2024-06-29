import Account from "./Account";

class SavingsAccount extends Account {
  private interestRate: number;

  constructor(initialBalance: number, interestRate: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount > this.balance) {
      return false;
    }
    this.balance -= amount;
    return true;
  }

  addInterest(): void {
    this.balance += this.balance * this.interestRate;
  }
}

export default SavingsAccount;
