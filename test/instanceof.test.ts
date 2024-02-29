describe("Instance Of", () => {
  class Employee {}

  class Manager {}

  it("should support in typescript", () => {
    const budi = new Employee();

    const irfan = new Manager();

    console.info(typeof budi);
    console.info(typeof irfan);

    // Instanceof: untuk memeriksa apakah suatu objek adalah instance dari suatu kelas atau bukan.

    console.info(budi instanceof Employee);
    console.info(irfan instanceof Manager);
  });
});
