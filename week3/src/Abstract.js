"use strict";
exports.__esModule = true;
exports.ExpenseAbstract = void 0;
//// Abstract classes for expense manager
var ExpenseAbstract = /** @class */ (function () {
    function ExpenseAbstract() {
    }
    ExpenseAbstract.prototype.message = function (msg) {
        console.log("Expenses ".concat(msg, " successfully...."));
        console.log();
    };
    return ExpenseAbstract;
}());
exports.ExpenseAbstract = ExpenseAbstract;
