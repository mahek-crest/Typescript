// read only and optional keyowrds

const personId = 1234;

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardnumber?: number;
};

let myUser: User = {
  _id: "1234",
  name: "r",
  email: "m@m.com",
  isActive: false,
};

myUser.email = "h@h.com";
// myUser._id = "1233"; -- throws error as it is readonly property

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

//combinig the card details
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
