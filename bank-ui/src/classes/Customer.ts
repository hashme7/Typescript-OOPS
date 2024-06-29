import Account from "./Account";

class Customer {
  private name: string;
  private accounts: Account[];

  constructor(name: string) {
    this.name = name;
    this.accounts = [];
  }

  addAccount(account: Account): void {
    this.accounts.push(account);
  }
  getAccountBalance(accountNumber: number): number {
    const account = this.accounts.find(
      (account) =>
        account instanceof Account && account.getBalance() === accountNumber
    );
    return account ? account.getBalance() : 0;
  }
}

export default Customer;
