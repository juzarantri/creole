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
        console.log("No.\t\t|Expense\t\t\t|Month\t\t|Amount in " + Billing.currency);
        let count : number = 0, total : number = 0;
        
        this.expenses.forEach((element) => {
            console.log(`${++count}.\t\t|${element.expense }\t\t\t|${months[element.month-1]}\t\t|${element.price}`);
            total += (element.price * Billing.currencyPrice);
        });
        console.log("Total expense amount in " + Billing.currency + " is " + total);
        console.log();

    }
}