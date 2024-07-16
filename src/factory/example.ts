interface IEmployee {
  name: string;
  job_title: string;
  salary: number;
}

class Employee {
  name = "";
  job_title = "";
  salary = 0;

  constructor(name: string = "", job_title: string = "", salary: number = 0) {
    this.name = name;
    this.job_title = job_title;
    this.salary = salary;
  }
}

class EmployeeFactory {
  createManager(name: string): IEmployee {
    return new Employee(name, "Manager", 25000000);
  }

  createStaff(name: string): IEmployee {
    return new Employee(name, "Staff", 15000000);
  }
}

const newManager = new EmployeeFactory().createManager("tegar prianiatama");
console.log("🚀 ~ newManager:", newManager);

const newStaff = new EmployeeFactory().createStaff("puguh santoso");
console.log("🚀 ~ newStaff:", newStaff);
