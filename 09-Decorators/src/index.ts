// decorator -- simply a function you apply to class (generally start with capital letter not compalsory)

function Logger() {
  return function (target: Function) {
    console.log("Logging...");
    console.log(target);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("withTemplate decorator ...");
    const hookEle = document.getElementById(hookId);
    const p = new constructor();

    if (hookEle) {
      hookEle.innerHTML = template;
    }
  };
}

@Logger()
@WithTemplate("<h2>Person object </h2>", "app")
class Person {
  name = "sam";

  constructor() {
    console.log("person object executed");
  }
}

const person = new Person();
console.log(person);

// --------------------------------------------

function Log(target: any, propertyName: string | symbol) {
  console.log("property decorator");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("accessor decorator");
  console.log(target);
  console.log(name);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price ");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
