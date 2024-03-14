// tuples in typescript

//special type of an array with some restrictions

// const user: (string | number)[] = ["mg"];
// above thing is possible but it doesnt have specified type and order for the same

// tuples are all about restricting so it has have spcific type in specific order also

type tUser = [string, number];

let rgb: [number, number, number, number?] = [233, 444, 33];

// weird behavior of tuples that thought you have specified the types still you can use array methods

const newUser: tUser = ["mg", 12];
newUser.push("rb"); // -- this violates the tuple rule of fixxed order and types of elements inside it
