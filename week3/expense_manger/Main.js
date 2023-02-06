"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Billing_1 = require("./Billing");
/// initial 
let system = new Billing_1.Billing();
const prompt = require("prompt-sync")({ sigint: true });
do {
    //// Menu 
    console.log();
    console.log("Please select any one from below");
    console.log("1.Add expense");
    console.log("2.Delete expense");
    console.log("3.Print Bill");
    console.log("4.Change currency " + Billing_1.Billing.currency);
    let choice;
    var x = prompt();
    choice = parseInt(x, 10);
    /// selection
    switch (choice) {
        case 1:
            console.log("Enter the expense");
            let name = prompt();
            console.log("Enter the price");
            let price = prompt();
            console.log("Enter the month in digit");
            let month = prompt();
            system.addExpense(name, price, month);
            break;
        case 2:
            console.log("Enter the position to delete");
            let position = prompt();
            system.removeExpense(position);
            break;
        case 3:
            system.printBill();
            break;
        case 4:
            console.log("Enter the curreny from below ");
            for (let i of Billing_1.Billing.currencyTypes) {
                process.stdout.write(i + " | ");
            }
            console.log();
            let currency = prompt();
            Billing_1.Billing.currency = currency;
            Billing_1.Billing.currencyPrice = Billing_1.Currencies[currency];
            break;
        default:
            console.log("Provide valid input");
    }
    /// repeat until user press Q
    console.log("Please select any one from below");
    console.log("1.Add expense");
    console.log("2.Delete expense");
    console.log("3.Print Bill");
    console.log("4.Change currency " + Billing_1.Billing.currency);
    console.log("Press Q to quit or any key to continue.....");
    x = prompt();
} while ((x === null || x === void 0 ? void 0 : x.toLowerCase()) != 'q');
