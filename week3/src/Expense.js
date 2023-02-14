"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Expense = void 0;
var Abstract_1 = require("./Abstract");
//// extending ExpenseAbstract
var Expense = /** @class */ (function (_super) {
    __extends(Expense, _super);
    function Expense() {
        var _this = _super.call(this) || this;
        _this.expenses = [];
        //// making some default entries
        _this.expenses.push({ id: "".concat("Mobile Accessories".toLowerCase(), "_756_1"), expense: "Mobile Accessories", price: 756, month: 1 });
        _this.expenses.push({ id: "".concat("Household".toLowerCase(), "_600_7"), expense: "Household", price: 600, month: 7 });
        _this.expenses.push({ id: "".concat("Amul milk".toLowerCase(), "_30_2"), expense: "Amul milk", price: 30, month: 2 });
        return _this;
    }
    //// adding an expense
    Expense.prototype.addExpense = function (expense, price, month) {
        this.expenses.push({ id: "".concat(expense.toLowerCase(), "_").concat(price, "_").concat(month), expense: expense, price: price, month: month });
        this.message("added");
    };
    /// removing an expense by its index
    Expense.prototype.removeExpense = function (postion) {
        this.expenses.splice(postion - 1, 1);
        this.message("removed");
    };
    return Expense;
}(Abstract_1.ExpenseAbstract));
exports.Expense = Expense;
