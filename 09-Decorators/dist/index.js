"use strict";
// decorator -- simply a function you apply to class (generally start with capital letter not compalsory)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger() {
    return function (target) {
        console.log("Logging...");
        console.log(target);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        console.log("withTemplate decorator ...");
        const hookEle = document.getElementById(hookId);
        const p = new constructor();
        if (hookEle) {
            hookEle.innerHTML = template;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "sam";
        console.log("person object executed");
    }
};
Person = __decorate([
    Logger(),
    WithTemplate("<h2>Person object </h2>", "app")
], Person);
const person = new Person();
console.log(person);
// --------------------------------------------
function Log(target, propertyName) {
    console.log("property decorator");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("accessor decorator");
    console.log(target);
    console.log(name);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price ");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
