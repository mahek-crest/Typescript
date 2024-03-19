"use strict";
var _a;
const e1 = {
    name: "josh",
    privileges: ["coffee", "screens "],
    stratDate: new Date(),
};
// -----------Type gaurds------------
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// ------ In method ------
function printEmployeeInfo(emp) {
    console.log("Name : " + emp.name);
    if ("privileges" in emp) {
        console.log("privileges are " + emp.privileges);
    }
    console.log("Start date : " + emp.stratDate);
}
printEmployeeInfo(e1);
//  -------- instance of --------
class Car {
    drive() {
        console.log("driving car");
    }
}
class Truck {
    drive() {
        console.log("driving truck");
    }
    loadCargo() {
        console.log("loading cargo");
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "Birdie":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("moving with speed : " + speed);
}
moveAnimal({ type: "Birdie", flyingSpeed: 10 });
const paragraph = document.getElementById("msg-output");
const userInputElement = (document.getElementById("user-input"));
userInputElement.value = "hello";
// Alternative to using exclamation
if (userInputElement) {
    userInputElement.value = "heloooo";
}
const errorBag = {
    email: " Not a valid email",
    username: "Username ahould start with a capital letter",
};
const fetchUserData = {
    id: "u1",
    name: "max",
    job: { title: "CEO ", desc: "owner of company" },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storeData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storeData);
