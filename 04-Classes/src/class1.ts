console.log("index ts file ");
class User {
  // email: string;
  // private name: string;
  // readonly city: string = "panji";

  protected _courseCount = 1;

  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }

  private deleteToken() {
    console.log("token deleted");
  }

  get getAppleEmail(): string {
    return `apple email : apple${this.email}`;
  }

  get getCourseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNumber: number) {
    if (courseNumber < 0) {
      throw new Error("please enter valid course number ");
    }
    this._courseCount = courseNumber;
  }
}

const mg = new User("m@m.com", "mg");
// mg.city = "jaipur "; -- can throw error as it is readonly
// mg.deleteToken() -- connot be accessed as it is private member

// -------------protected------------
class SubUser extends User {
  isFamily: boolean = true;

  changeCourseCount() {
    this._courseCount = 4;
  }
}
