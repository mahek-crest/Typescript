interface iUser {
  readonly _id: number;
  email: string;
  userId: number;
  googleId?: string;
  // there are 2 ways one can declare method as shown in below2 functions
  startTrial: () => string;
  startSub(): string;
  getCoupon(couponName: string): number;
}

const user1: iUser = {
  _id: 222,
  email: "m@m.com",
  userId: 123,
  startTrial: () => {
    return "hel";
  },
  startSub: () => {
    return "helo2";
  },
  getCoupon: (couponName: "MG") => {
    return 10;
  },
  githubToke: "github",
};

//changing the value -- readonly cannot be changed
user1.email = "mg@m.com";

// interface are more like a class but loosely typed

// Interface vs Type

// you can add things to the interface anywhere else also -- this is helpful in the case of very large project
// you can directly redeclare it and add new things -- used with terms as reopening of the interface
// assuming our iUser interface is in some other file/folder and everthing works all well but reqires a github login also so we can add the login directly as shown below
// this makes user we have the existing elements even after adding this --which states that it is not a type of redeclaration

interface iUser {
  githubToke: string;
}
