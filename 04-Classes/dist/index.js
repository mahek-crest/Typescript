"use strict";
class Department {
    constructor(n) {
        this.employee = [];
        this.name = n;
    }
    describe() {
        console.log(`department : ${this.name}`);
    }
    addEmployee(empName) {
        this.employee.push(empName);
    }
    printEmpInfo() {
        console.log(this.employee);
    }
}
const dmartDept = new Department("accounting");
console.log(dmartDept);
dmartDept.describe();
dmartDept.addEmployee("mg");
dmartDept.printEmpInfo();
class ITDept extends Department {
    constructor(id, admins) {
        super(id);
        this.admins = admins;
    }
}
