describe("Relationship", () => {
  class Person {
    constructor(public name: string) {}
  }

  class Customer {
    constructor(public name: string) {}
  }

  it("should supoprt in typescript", () => {
    const person: Person = new Customer("Irfan");
    console.info(person.name);
  });
});
