"use strict";
// Typescriptda Arrays, tuples & Enums
// ======= arraylarni e'lon qilish
let a = [];
a = [12, 'sdf', true, undefined, {}];
let b = [1, 2, 3, 4, 5];
let c = [1, 2, 3, 4, 5];
let d = [1, '2', 3, 4, '5'];
let e = [1, 2, true, 4, false];
// ============== tuples - kartejlar ===========================
let f;
// f = ['str', 12, [1, 2, 3]];
f = [12, 'str', [1, 2, 3]];
// ============== Enums - qayta hisovlash =============
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var G;
(function (G) {
    G[G["A"] = 0] = "A";
    G["B"] = "hellow";
})(G || (G = {}));
console.log(Gender);
console.log(Gender[0], Gender[1], Gender[Gender.Male], Gender[Gender.Female]);
console.log(G.B);
console.log(10 /* I.A */, "BBBB" /* I.B */);
//# sourceMappingURL=index.js.map