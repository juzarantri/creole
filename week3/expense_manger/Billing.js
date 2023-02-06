"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billing = exports.Currencies = void 0;
const Expense_1 = require("./Expense");
var Currencies;
(function (Currencies) {
    Currencies[Currencies["INR"] = 1] = "INR";
    Currencies[Currencies["USD"] = 80] = "USD";
    Currencies[Currencies["EUR"] = 76] = "EUR";
    Currencies[Currencies["RUB"] = 25] = "RUB";
    Currencies[Currencies["AED"] = 23.53] = "AED";
})(Currencies = exports.Currencies || (exports.Currencies = {}));
var months;
(function (months) {
    months[months["JAN"] = 0] = "JAN";
    months[months["FEB"] = 1] = "FEB";
    months[months["MAR"] = 2] = "MAR";
    months[months["APR"] = 3] = "APR";
    months[months["MAY"] = 4] = "MAY";
    months[months["JUN"] = 5] = "JUN";
    months[months["JUL"] = 6] = "JUL";
    months[months["AUG"] = 7] = "AUG";
    months[months["SEP"] = 8] = "SEP";
    months[months["OCT"] = 9] = "OCT";
    months[months["NOV"] = 10] = "NOV";
    months[months["DEC"] = 11] = "DEC";
})(months || (months = {}));
class Billing extends Expense_1.Expense {
    //// Bill printing
    printBill() {
        console.log("No.\t\t|Expense\t\t\t|Month\t\t|Amount in " + Billing.currency);
        let count = 0, total = 0;
        this.expenses.forEach((element) => {
            console.log(`${++count}.\t\t|${element.expense}\t\t\t|${months[element.month - 1]}\t\t|${element.price}`);
            total += (element.price * Billing.currencyPrice);
        });
        console.log("Total expense amount in " + Billing.currency + " is " + total);
        console.log();
    }
}
exports.Billing = Billing;
Billing.currency = Currencies[1];
Billing.currencyPrice = Currencies["INR"];
Billing.currencyTypes = ["INR", "USD", "EUR", "RUB", "AED"];
