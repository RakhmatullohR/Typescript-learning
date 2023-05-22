// TypeScriptda type larni o'zgaritirish va birlashtirish
// unknown type, union types, literal types, required and optional properties, operator in;

// havfli usul
let a: any = 10;
let b: number = a;

let c: unknown = 20.1234;
// let d: number = c;
// havfsiz usul
let e: number = <number>c;
let f: number = c as number;

const g = (c as number).toFixed(3) + ', ' + (<number>c).toString();
console.log(g);

// union types
let h: number | string = 10;
h = 'tri';

// literal types
let k: 'sm' | 'md' | 'lg';
k = 'sm';

type Sizes = 'SM' | 'MD' | 'LG' | false;
let k2: Sizes = 'SM';

let k3: Sizes = false;
k3 = 'SM';

type OBJ = { name: string } | { age: number };
let obj: OBJ;
obj = { name: 'Rakhmatulloh' };
obj = { age: 23 };
obj = { name: 'Rakhmatulloh', age: 23 };

type OBJ2 = { name: string } & { age: number };
let obj2: OBJ2;
// obj2 = { name: 'Rakhmatulloh' };
// obj2 = { age: 23 };
obj2 = { name: 'Rakhmatulloh', age: 23 };

type OBJ3 = { name: string; age?: number };
let obj3: OBJ3 = { name: 'Rakhmatilloh' };
obj3 = { age: 29, name: 'Rakhmatulloh' };
// obj3 = { age: 29 };

// operator in
if ('age' in obj3) {
  console.log('mavjud');
} else {
  console.log('mavjud emas');
}
