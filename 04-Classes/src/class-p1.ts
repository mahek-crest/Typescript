console.log("helo");
console.log("index ts file ");
class User {
  email: string;
  name: string;
  readonly city: string = "panji";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const mg = new User("m@matchMedia.com", "mg");
// mg.city = "jaipur "; -- can throw error as it is readonly
