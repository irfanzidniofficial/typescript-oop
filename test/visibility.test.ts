describe("Visibility", () => {
  class Counter {
    // Private: hanya bisa diakses di dalam kelasnya
    // private counter: number = 0; // <= Example

    // Protected: bisa diakses oleh kelas turunannya
    protected counter: number = 0; // <=Example

    public increment(): void {
      this.counter++;
    }

    public getCounter() {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {
    public increment(): void {
      this.counter += 2;
    }
  }

  it("should support private", () => {
    const counter = new Counter();

    counter.increment();
    counter.increment();
    console.info(counter.getCounter());
  });

  it("should support protected", () => {
    const counter = new DoubleCounter();

    counter.increment();
    counter.increment();
    counter.increment();
    console.info(counter.getCounter());
  });
});
