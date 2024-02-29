export namespace MathUtils {
  export const PI: number = 3.14;

  export function sum(...values: number[]) {
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  }
}

export namespace Irfan {}

export namespace Zidni {}
