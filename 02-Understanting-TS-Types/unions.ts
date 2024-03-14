// union in typescript

let score: number | string = 11;
score = 44;
score = "44";

type User = {
  name: string;
  id: number;
};
type Admin = {
  userName: string;
  id: number;
};

let jonas: User | Admin = {
  name: "jonasS",
  id: 223,
};
jonas = { userName: "jj", id: 223 };

// arrays
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (number | string)[] = [1, 2, "3"];
const data4: number[] | string[] = [1, 2];
// both data3  and data4 have different interpretations as data 3 says array can contain both numbers and strings in the array whereas as data4 tells that the array can either be array of number or array of strings not together

// VERY STRICT ASSIGNMENT
// literal type of assignment

let pi: 3.14 = 3.14;
// pi =3.145 ----will throw an error as we have fixed the value

//example 2
let seatAllotement: "aisle" | "middle" | "window";
// seatAllotement = "fourth"; --throws error as we have fixed the values

export {};
