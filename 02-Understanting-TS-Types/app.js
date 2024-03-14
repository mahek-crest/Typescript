// tuples in typescript
var rgb = [233, 444, 33];
// weird behavior of tuples that thought you have specified the types still you can use array methods
var newUser = ["mg", 12];
newUser.push("rb"); // -- this violates the tuple rule of fixxed order and types of elements inside it
