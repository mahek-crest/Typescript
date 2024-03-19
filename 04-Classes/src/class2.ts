class Department {
  name: string;
  private employee: string[] = [];

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log(`department : ${this.name}`);
  }

  addEmployee(empName: string) {
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
  constructor(private id: string, public admins: string[]) {
    super(id);
  }
}

const it = new ITDept("12as", ["senior"]);
console.log(ITDept);
