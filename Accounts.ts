class Account{
    
     protected customerId:number;
     protected customerName:string;
     protected balance:number;  

    constructor(customerId:number,customerName:string,balance:number=0){
        this.customerId = customerId; 
        this.customerName = customerName; 
        this.balance = balance; 
    }

    get CustomerName(){
        return this.CustomerName; 
    }
    set CustomerName(value:string){
        this.customerName = value; 
    }

    addCustomer(customerId:number,customerName:string,balance:number):void{
        this.customerId = customerId; 
        this.customerName = customerName; 
        this.balance = balance
        console.log(this.customerId + " " + this.customerName + " is added");
    }

    displayCustomer():void{
        console.log(this.customerId + " " + this.customerName);
    }

}

class SavingAccount extends Account{

    private _savingTimeMonth; 
    constructor(customerId:number,customerName:string, balance:number, savingPeriodMonth:number){
        super(customerId,customerName,balance); 
        this._savingTimeMonth = savingPeriodMonth; 
    }

    displayCustomer():void{
        console.log(this.customerId + " " + this.customerName + " Saving Months : "  + this._savingTimeMonth);
    }

    addCustomer(customerId:number,customerName:string,balance:number):void{
        super.addCustomer(customerId,customerName,balance);
    }
}

class TravelAccount extends Account{
    private _travelType:number; 

    constructor(customerId:number,customerName:string, balance:number, travelType:number){
        super(customerId,customerName,balance); 
        this._travelType = travelType; 
    }

    displayCustomer():void{
        console.log(this.customerId + " " + this.customerName + " Travel Type : "  + this._travelType);
    }
}

class LoanAccount extends Account{
    private _loanType:number; 
    private _loanAccount:number; 
    private _interestRate:number; 

    constructor(customerId:number,customerName:string, balance:number, loanType:number,interest_rate){
        super(customerId,customerName,balance); 
        this._loanType = loanType; 
        this._interestRate = interest_rate; 
    }

    displayCustomer():void{
        console.log(this.customerId + " " + this.customerName + " Loan Type : "  + this._loanType + " Interest Rate : " + this._interestRate);
    }

}

let account = new Account(1,"Damla Sevinc",1000)
account.displayCustomer(); 

account.addCustomer(1,"Test User", 555); 
account.displayCustomer();

let loanAccount = new LoanAccount(2,"Omer Sevinc",1000,1, 0.2); 
loanAccount.displayCustomer(); 

let savingAccount = new SavingAccount(3,"Amar Reddy",2300,3); 
savingAccount.displayCustomer(); 

let travelAccount = new TravelAccount(4,"Pamir Sevinc",3000,1); 
travelAccount.displayCustomer(); 

