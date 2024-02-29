describe("Class", () => {
  class Customer {
    constructor() {
      console.info("Create New Customer");
    }
  }

  class Order {}
  it("should can create class", () => {
    const customer: Customer = new Customer();
    const order = new Order();
  });

  describe("should can create consstructor", () => {
    new Customer();
    new Customer();
  });
});
