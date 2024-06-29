import React, { useRef, useState } from "react";
import Customer from "./classes/Customer.ts";
import CheckingAccount from "./classes/CheckingAccount.ts";
import SavingsAccount from "./classes/SavingsAccount.ts";
import Account from "./classes/Account.ts";

function App() {
  const [customer, setCustomer] = useState(new Customer("John Doe"));
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [withdraw, setWithdraw] = useState<Boolean>(false);
  const [depit, setdepit] = useState<Boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddAccount = (account: Account) => {
    customer.addAccount(account);
    setAccounts([...accounts, account]);
  };

  const addMoney = (accountNumber: number) => {
    let inputValue = inputRef.current?.value;
    if (inputValue !== undefined) {
      const amount: number = parseInt(inputValue, 10);
      if (!isNaN(amount) && amount > 0) {
        const account = accounts.find(
          (account, index) => index + 1 === accountNumber
        );
        if (account)  {
          account.deposit(amount);
          setAccounts([...accounts]);
        }
      }
    }
  };

  return (
    <div>
      <h1>Bank Application</h1>
      <button onClick={() => handleAddAccount(new CheckingAccount(0, 500))}>
        Add Checking Account
      </button>
      <button onClick={() => handleAddAccount(new SavingsAccount(1000, 0.05))}>
        Add Savings Account
      </button>
      <ul>
        {accounts.map((account, index) => (
          <li className="py-2" key={index}>
            Account {index + 1} balance:{account.getBalance()}
            <div className="flex ">
              {depit && (
                <div className="px-5">
                  <input type="number" ref={inputRef} />
                  <button onClick={() => addMoney(index + 1)}>add Money</button>
                </div>
              )}
              {withdraw && (
                <div>
                  <input type="number" />
                  <button>withdraw</button>
                </div>
              )}
            </div>
            <div>
              <button onClick={() => setdepit(!depit)}>Depit</button>
              <button onClick={() => setWithdraw(!withdraw)}>Withdraw</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
