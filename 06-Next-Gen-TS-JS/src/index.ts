// Next Gen TS js

// let , const variables
// arrow functions
// spread operator
// destructuring

const add = (n1: number, n2: number = 5) => {
  return n1 + n2;
};

console.log(add(2, 3));
console.log(add(3));

// Note -
// -- while assinging a default argument make sure it is last in the list

const hobbies = ["hike", "cook", "books"];
const activeHobbies = ["swim"];

hobbies.push(...activeHobbies);
console.log(hobbies);

const person = {
  firstName: "jonas",
  age: 12,
};

const copiedPerson = person; // this doesnt really creat a copy but a refernce to the same memory
// to create copy we can
const copiedPerson2 = { ...person };
console.log(copiedPerson);

// -----------------Destructuring---------------------

const [hobby1, hobby2] = hobbies;

const { firstName: userName, age } = person; // renaming firstName to userName
console.log(userName, age);
