"use strict";
// TypeScriptda type larni o'zgaritirish va birlashtirish
// unknown type, union types, literal types, required and optional properties, operator in;
// havfli usul
let a = 10;
let b = a;
let c = 20.1234;
// let d: number = c;
// havfsiz usul
let e = c;
let f = c;
const g = c.toFixed(3) + ', ' + c.toString();
console.log(g);
// union types
let h = 10;
h = 'tri';
// literal types
let k;
k = 'sm';
let k2 = 'SM';
let k3 = false;
k3 = 'SM';
let obj;
obj = { name: 'Rakhmatulloh' };
obj = { age: 23 };
obj = { name: 'Rakhmatulloh', age: 23 };
let obj2;
// obj2 = { name: 'Rakhmatulloh' };
// obj2 = { age: 23 };
obj2 = { name: 'Rakhmatulloh', age: 23 };
let obj3 = { name: 'Rakhmatilloh' };
obj3 = { age: 29, name: 'Rakhmatulloh' };
// obj3 = { age: 29 };
// operator in
if ('age' in obj3) {
    console.log('mavjud');
}
else {
    console.log('mavjud emas');
}
//# sourceMappingURL=index.js.map