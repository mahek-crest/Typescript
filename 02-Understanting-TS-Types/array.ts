// arrays in typescript

const supPower: readonly number[] = [];

// method 2 of defining arrays
// const supHero: string[] = [];
const supHero: Array<string> = [];

supHero.push("spiderman");

type User = {
  name: string;
  isActive: boolean;
};

const allUser: User[] = [];

// allUser.push({}); -- can not accept empty object --part of the protocol

allUser.push({
  name: "m",
  isActive: false,
});
console.log(allUser);
