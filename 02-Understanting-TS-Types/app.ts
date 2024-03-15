interface i2User {
  name: string;
  email: string;
  githubToken: number;
}

const newIUser: i2User = {
  name: "mahek",
  email: "m@m.com",
  githubToken: 12345,
};

// one more feature with interface is that we get inheritance with it

interface Admin extends i2User {
  role: "admin" | "ca" | "ta";
}

const newUser2: Admin = {
  role: "admin",
  name: "admin",
  email: " @.com",
  githubToken: 777,
};

// difference are
//  -- you can extend the interface but not types
//  -- and adding new element in type and interface is possible in both but has different ways
