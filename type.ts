type ObjectId = string;
type StringOrNumber = string | number;
type Student = { name: string; id: StringOrNumber };

// Khai báo biến bình thường
let myName: string = "Nguyen Phuong Tay";
let myId: number = 66;
let isMale: boolean = true;
let myBlog: string;

// Khai báo biến Array
let studentName: string[] = ["Mai", "Hung", "Dung"];
let studentIds: number[] = [22, 12, 43];
let mixed = ["Hoang", 12, true];
    // Khai báo Union
let mixedUnion: (string | number | boolean)[];

// Khai báo biến Object
let person:{
    name: string,
    age: number,
    isMale: boolean
} = {
  name: "Tay",
  age: 22,
  isMale: true,
};




