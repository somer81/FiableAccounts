export class Account{
    
      customerId:number;
      customerName:string;
      balance:number;  

    constructor(customerId:number,customerName:string,balance:number=0){
        this.customerId = customerId; 
        this.customerName = customerName; 
        this.balance = balance; 
    }

    //  get CustomerName():string{
    //     return this.customerName; 
    // }
    //  set CustomerName(value:string){
    //     this.customerName = value; 
    // }

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








