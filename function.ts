// Define Function
function sum(a: number, b: number): number {
  return a + b;
}
function print(name: string, age: number): void {
  console.log(`${name} is ${age} years old`);
}

// Function with optional and default param
function printSomething(
  text: string,
  epoch: number = 10,
  doEpoch?: boolean
): void {
  if (doEpoch) {
    for (let i: number = 1; i <= epoch; ++i) {
      console.log(text);
    }
  } else {
    console.log(text);
  }
}

// Function with rest parameter
function addNumbers(...num: number[]): number {
  let sum: number = 0;
  for (let i: number = 0; i < num.length; ++i) {
    sum = sum + num[i];
  }
  return sum;
}

// Anonymous Funciton
const power = (x: number, y: number): number => x ** y;
const square = function (x: number): number {
  return x * x;
};

// Function Signature
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) =>
  console.log(`${name} says ${greeting}`);
greet("Tay", "Hello");
