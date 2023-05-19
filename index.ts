// TypeScript => function, signature functions, function overloads

// function decloration
function pow(x: number, y: number): string {
  return `${x}^${y}=${x ** y}`;
}
// arrow function
const pow2 = (x: number, y: number): string => {
  return `${x}^${y}=${x ** y}`;
};
// return qilmaydigan funksiyani void function deymiz
function add(x: number, y: number): void {
  console.log(x + y);
}
// tugallanmaydigan funksiyani never function deliladi
function someFunc(x: string): never {
  // ishlaydigan kod
  throw new Error(x);
  // ishlamaydigan kod
}
// signature function
let c: (x: number, y: string) => string;

c = function (a: number, b: string): string {
  return a + b;
};

// function overload
function overloadFunc(x: number, y: number): number;
function overloadFunc(x: string, y: number): string;
function overloadFunc(x: any, y: any): any {
  if (typeof x === 'number' || typeof y === 'number') {
    return x + y;
  } else {
    return `${x + y}`;
  }
}
console.log(overloadFunc(12, 12));
