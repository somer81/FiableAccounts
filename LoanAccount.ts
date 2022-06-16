import { Account } from "./Accounts";

export class LoanAccount extends Account{
    private _loanType:number; 
    private _loanCredit:number; 
    private _interestRate:number; 

    constructor(customerId:number,customerName:string, balance:number, loanType:number,interest_rate:number,loanCredit:number){
        super(customerId,customerName,balance); 
        this._loanType = loanType; 
        this._interestRate = interest_rate; 
        this._loanCredit = loanCredit; 
    }

    displayCustomer():void{
        console.log(this.customerId + " " + this.customerName + " Loan Type : "  + this._loanType + " Interest Rate : " + this._interestRate);
    }

}