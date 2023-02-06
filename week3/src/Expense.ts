import { ExpenseAbstract } from "./Abstract";
//// extending ExpenseAbstract
export class Expense extends ExpenseAbstract{
    expenses : Array<any> = [];
    public constructor(){
        super();
        //// making some default entries
        this.expenses.push({id:`${"Mobile Accessories".toLowerCase()}_756_1`,expense:"Mobile Accessories",price:756,month:1});
        this.expenses.push({id:`${"Household".toLowerCase()}_600_7`,expense:"Household",price:600,month:7});
        this.expenses.push({id:`${"Amul milk".toLowerCase()}_30_2`,expense:"Amul milk",price:30,month:2});
    }

    //// adding an expense
    public addExpense(expense: string, price: number, month: number): void {
        this.expenses.push({id:`${expense.toLowerCase()}_${price}_${month}`,expense:expense,price:price,month:month});
        this.message("added");
    }
    /// removing an expense by its index
    public removeExpense(postion: number): void {
        this.expenses.splice(postion-1,1);
        this.message("removed");
    }

}