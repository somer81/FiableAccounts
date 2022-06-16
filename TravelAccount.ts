import { Account }  from "./Accounts";

export class TravelAccount extends Account{
    private _travelType:number; 

    constructor(customerId:number,customerName:string, balance:number, travelType:number){
        super(customerId,customerName,balance); 
        this._travelType = travelType; 
    }

    displayCustomer():void{
        console.log(this.customerId + " " + this.customerName + " Travel Type : "  + this._travelType);
    }
}