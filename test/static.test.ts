describe("Static", () => {
  class Configuration {
    static NAME: string = "Belajar Typescript OOP";
    static VERSION: number = 1.0;
    static AUTHOR: string = "Irfan Zidni";
  }

  class MathUtil {
    static sum(...values: number[]) {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
  }

  describe("should support static method", () => {
    console.info(MathUtil.sum(1, 2, 3, 4, 5));
  });

  it("should support", () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });
});
