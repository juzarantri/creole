import { Expense } from "./Expense";

export enum Currencies {
    INR = 1,
    USD = 80,
    EUR = 76,
    RUB = 25,
    AED = 23.53
}
enum months {
    JAN,
    FEB,
    MAR,
    APR,
    MAY,
    JUN,
    JUL,
    AUG,
    SEP,
    OCT,
    NOV,
    DEC
}

export class Billing extends Expense {
    public static currency : string = Currencies[1];
    public static currencyPrice : any = Currencies["INR"];
    public static currencyTypes = ["INR","USD","EUR","RUB","AED"]

    //// Bill printing
    public printBill() : void {
        let count : number = 0, total : number = 0;
        
        console.table(this.expenses,["id","expense","price","month"]);
        this.expenses.forEach((element) => {
            total += (element.price * Billing.currencyPrice);
        });
        console.log("Total expense amount in " + Billing.currency + " is " + total);
        console.log();

    }
}