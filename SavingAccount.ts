import { Account } from './Accounts'; 

export class SavingAccount extends Account{

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


