// class Employee {
//   public name: string;
//   private age: number;
//   readonly male: boolean;

//   constructor(name: string, age: number, male: boolean) {
//     this.name = name;
//     this.age = age;
//     this.male = male;
//   }
//   print(): void {
//     console.log(
//       `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`
//     );
//   }
// }

class Employee {
    constructor(
      public name: string,
      private age: number,
      readonly male: boolean
    ) {}
    print(): void {
      console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Gender Male: ${this.male}
      `);
    }
  }
  
  