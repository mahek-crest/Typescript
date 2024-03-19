// function printValue<T>(data: T) {
//   console.log("Printed data : " + data);
// }

// console.log(printValue(""));

// const names = ["Max", "Josh"];
// const arr: Array<number> = [];
// console.log(names[0].split(" "));

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is done");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// -------------

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { hobbies: ["hobbies"] });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDesc<T extends Lengthy>(element: T) {
  let desc = "Got not value";
  if (element.length === 1) {
    desc = `got element : 1`;
  } else if (element.length > 1) {
    desc = `got multiple texts`;
  }
  return [element, desc];
}

console.log(countAndDesc(""));
