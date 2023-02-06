"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseAbstract = void 0;
//// Abstract classes for expense manager
class ExpenseAbstract {
    message(msg) {
        console.log(`Expenses ${msg} successfully....`);
        console.log();
    }
}
exports.ExpenseAbstract = ExpenseAbstract;
