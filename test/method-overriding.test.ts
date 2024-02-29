describe("Method Overriding", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string) {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}, I am your manager`);

      //Super Method, memanggil parent nya

      super.sayHello(name); // Result : Hello Zidni, my name is Irfan
      console.info("And, I am your manager");
    }
  }

  it("should support", () => {
    const employee = new Employee("Budi");
    employee.sayHello("Tono");

    const manager = new Manager("Irfan");
    manager.sayHello("Zidni");
  });
});
