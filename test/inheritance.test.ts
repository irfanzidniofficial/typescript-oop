describe("Inheritance", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("should support", () => {
    const employee = new Employee("Budi");
    console.info(employee.name);

    const manager = new Employee("Zidni");
    console.info(manager.name);

    const director = new Director("Irfan");
    console.info(director.name);
  });
});
