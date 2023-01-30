/// Typescript classes
class Car {
    private brand: string;

    public constructor(brand: string){
        this.brand = brand;
    }

    public getBrand(): string {
        return this.brand;
    }
}

const car = new Car("Ferrari");
console.log(car.getBrand());

/* 
Inheritance: implements
Interfaces can be used to define the type a class must follow through the implements keyword.
*/
interface Shape {
    getArea : () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number){}
    public getArea(): number{
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(5,4);
console.log("Area is ",rectangle.getArea());

/* 
Inheritance: Extends
Classes can extend each other through the extends keyword. A class can only extends one other class.
*/

class Square extends Rectangle {
    public constructor(width : number){
        super(width,width);
    }
}

const square = new Square(5);
console.log("Area of square is ",square.getArea());

/* 
Abstract Classes
Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.

Example
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
*/
export {};