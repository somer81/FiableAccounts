import { Account } from './Accounts'; 
import { LoanAccount } from './LoanAccount'; 
import { TravelAccount } from './TravelAccount'; 
import { SavingAccount } from './SavingAccount'; 

let account = new Account(1,"Damla Sevinc",1000)
account.displayCustomer(); 

account.addCustomer(1,"Test User", 555); 
account.displayCustomer();

let loanAccount = new LoanAccount(2,"Omer Sevinc",1000,1, 0.2,10000); 
loanAccount.displayCustomer(); 

let savingAccount = new SavingAccount(3,"Amar Reddy",2300,3); 
savingAccount.displayCustomer(); 

let travelAccount = new TravelAccount(4,"Pamir Sevinc",3000,1); 
travelAccount.displayCustomer(); 