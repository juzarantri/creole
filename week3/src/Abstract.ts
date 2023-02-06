//// Abstract classes for expense manager
export abstract class ExpenseAbstract{
    public abstract addExpense(expense : string, price : number, month : number ) : void;
    public abstract removeExpense(position : number ) : void;

    public message  (msg : string){
        console.log(`Expenses ${msg} successfully....`);
        console.log();
    }
 
}

