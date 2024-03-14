//  type aliases

type User = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "", age: 21, email: "", isActive: false };
}

createUser({ name: "mahek", age: 21, email: "", isActive: false });

export {};
