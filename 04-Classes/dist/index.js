"use strict";
console.log("helo");
console.log("index ts file ");
class User {
    constructor(email, name) {
        this.city = "panji";
        this.email = email;
        this.name = name;
    }
}
const mg = new User("m@matchMedia.com", "mg");
// mg.city = "jaipur "; -- can throw error as it is readonly
