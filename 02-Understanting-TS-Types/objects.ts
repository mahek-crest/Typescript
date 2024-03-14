//   objects

const user = {
  name: "mahek",
  id: 123,
  email: "mahek@test.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "mahekl", isPaid: true, email: "test@test.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "react", price: 599 };
}

export {};
