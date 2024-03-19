type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  stratDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "josh",
  privileges: ["coffee", "screens "],
  stratDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // here the type of univeral in number as it is the only intersection

// -----------Type gaurds------------
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type unknownEmployee = Employee & Admin;

// ------ In method ------

function printEmployeeInfo(emp: unknownEmployee) {
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

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}
useVehicle(v1);
useVehicle(v2);

// ------ discriminated union -----
interface Bird {
  type: "Birdie";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")
);

userInputElement.value = "hello";

// Alternative to using exclamation
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "heloooo";
}

// ------- indexed types ------

//  kind of more flexible objects
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: " Not a valid email",
  username: "Username ahould start with a capital letter",
};

const fetchUserData = {
  id: "u1",
  name: "max",
  job: { title: "CEO ", desc: "owner of company" },
};

console.log(fetchUserData?.job?.title);

const userInput = null;
const storeData = userInput ?? "DEFAULT";

console.log(storeData);
