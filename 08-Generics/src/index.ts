const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<T>(val: T): T {
  return val;
}

identityThree("3");

function getSearchResults<T>(products: T[]): T {
  return products[3];
}
