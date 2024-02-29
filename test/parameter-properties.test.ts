describe("Parameter Properties", () => {
  class Person {
    constructor(public name: string) {}
  }

  it("should support in typescript", () => {
    const person = new Person("Irfan");
    console.log(person.name);

    person.name = "Zidni";
    console.log(person.name);
  });
});
