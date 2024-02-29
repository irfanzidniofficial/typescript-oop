describe("Polymorphism", () => {
  // Polymorphism : objek dapat memiliki banyak bentuk sesuai turunannya /  memiliki perilaku yang berbeda
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    // console.info(`Hello ${employee.name}`);

    // yang di cek terlabih dahulu posisinya yang ujung=> VicePresedent

    // pengecekan makin ke bawah makin ke parent nya

    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello vp ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello manager ${manager.name}`);
    } else {
      // parent yang paling tinggi
      console.info(`Hello employee ${employee.name}`);
    }
  }

  // Contoh yang salah

  function sayHelloWrong(employee: Employee): void {
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello manager ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello vp ${vp.name}`);
    } else {
      // parent yang paling tinggi
      console.info(`Hello employee ${employee.name}`);
    }
  }

  it("should support in typescript", () => {
    let employee: Employee = new Employee("Irfan");

    console.info(employee);

    employee = new Manager("Irfan");

    console.info(employee);

    employee = new VicePresident("irfan");
    console.info(employee);
  });

  it("should support method parameter polymorphism", () => {
    sayHello(new Employee("Budi"));
    sayHello(new Manager("Zidni"));
    sayHello(new VicePresident("Irfan"));
  });

  it("should support method parameter polymorphism wrong", () => {
    sayHelloWrong(new Employee("Budi"));
    sayHelloWrong(new Manager("Zidni"));
    sayHelloWrong(new VicePresident("Irfan"));
  });
});
