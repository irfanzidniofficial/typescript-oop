describe("Super", () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
  }

  describe("support", () => {
    const employee = new Employee("Irfan", "Tech");

    console.info(employee.name);
    console.info(employee.department);
  });
});
