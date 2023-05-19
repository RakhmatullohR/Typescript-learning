// typescript da asosiy malumot turlari

let a = 12;
// a = 'str';
// a = 14;

let b: string = 'text';
// b = 12
b = 'Rakhmatulloh';

let c: object = { name: 'Rakhmatulloh' };
let d: { name: string } = { name: 'Rakhmatulloh' };
d.name = 'adad';
console.log(d);

let e: any = null;
e = 12;
e = { name: 'Rakhmatulloh' };
e = [{ name: 'Rakhmatulloh' }];
console.log(e);
