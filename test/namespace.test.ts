import { MathUtils } from "../src/math-utils";

describe("Namespace", () => {
  it("should support", () => {
    console.info(MathUtils.PI);
    console.info(MathUtils.sum(1, 2, 3, 4, 5));
  });
});
