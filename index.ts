const lastT = <T>(arr: Array<T>): T => arr[arr.length - 1];
const l1 = lastT([1, 2, 4, 2]);
const l2 = lastT(["1", "2", "4", "2"]);
const l3 = lastT<string>(["Nguyen", "Phuong", "Tay"]);

function makeArr<X, Y>(x: X, y: Y) {
  return [x, y];
}

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}
const resourceOne: Resource<string> = {
  uid: 123,
  name: "Person",
  data: "Hello",
};
const resourceTwo: Resource<object> = {
  uid: 124,
  name: "Movie",
  data: { name: "Spider 3" },
};

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let gNumber = new GenericNumber<number>();
gNumber.zeroValue = 0;
gNumber.add = (x, y) => x + y;

