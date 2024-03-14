function addTwo(num: number): number {
  return num + 2;
}
addTwo(3);

function getUpper(val: string) {
  return val.toUpperCase();
}
console.log(getUpper("hello"));

function signUp(name: string, email: string, isPaid: boolean) {}
let login = (name: string, email: string, isPaid: boolean = false) => {};

signUp("test", "test@test.com", true);
login("tes2", "test2@test.com ");

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  } else {
    return "200 OK";
  }
}

const heros = [" ironman", "spiderman"];
const numArr = [1, 3, 4];

heros.map((hero) => {
  return `hero is ${hero}`;
});

function consolError(errMsg: string): void {
  console.log(errMsg);
  // return 1; -- throws error as we have defined it as void
}

const handleError = (): never => {
  throw new Error();
};
