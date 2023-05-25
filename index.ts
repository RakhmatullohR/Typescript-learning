// Typescriptda Arrays, tuples & Enums

// ======= arraylarni e'lon qilish
let a = [];
a = [12, 'sdf', true, undefined, {}];

let b: number[] = [1, 2, 3, 4, 5];
let c: Array<number> = [1, 2, 3, 4, 5];

let d: (number | string)[] = [1, '2', 3, 4, '5'];
let e: Array<number | boolean> = [1, 2, true, 4, false];

// ============== tuples - kartejlar ===========================
let f: [number, string, number[]];
// f = ['str', 12, [1, 2, 3]];
f = [12, 'str', [1, 2, 3]];

// ============== Enums - qayta hisovlash =============
enum Gender {
  Male,
  Female,
}
enum G {
  A,
  B = 'hellow',
}
console.log(Gender);
console.log(Gender[0], Gender[1], Gender[Gender.Male], Gender[Gender.Female]);
console.log(G.B);

const enum I {
  A = 10,
  B = 'BBBB',
}
console.log(I.A, I.B);
