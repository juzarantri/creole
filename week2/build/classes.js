"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// Typescript classes
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    getBrand() {
        return this.brand;
    }
}
const car = new Car("Ferrari");
console.log(car.getBrand());
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(5, 4);
console.log("Area is ", rectangle.getArea());
/*
Inheritance: Extends
Classes can extend each other through the extends keyword. A class can only extends one other class.
*/
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}
const square = new Square(5);
console.log("Area of square is ", square.getArea());
