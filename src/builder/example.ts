namespace Builder {
  interface IStudent {
    name: string;
    age: number;
    category: string;
  }

  class Student implements IStudent {
    name = "";
    age = 10;
    category = "10 ABC";

    constructor(name: string = "", age: number = 0, category: string = "") {
      (this.name = name), (this.age = age), (this.category = category);
    }

    public getName(): string {
      return this.name;
    }

    public setName(name: string): void {
      this.name = name;
    }

    public getAge(): number {
      return this.age;
    }

    public setAge(age: number): void {
      this.age = age;
    }

    public getCategory(): string {
      return this.category;
    }

    public setCategory(category: string): void {
      this.category = category;
    }
  }

  const newStudent = new Student();
  console.log("🚀 ~ newStudent:", newStudent);

  newStudent.setName("tegar prianiatama");
  newStudent.setAge(20);
  newStudent.setCategory("12 ABC");

  console.log("🚀 ~ newStudent:", newStudent);

  console.log("🚀 ~ newStudent:", newStudent.getName());
}
