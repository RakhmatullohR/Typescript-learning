"use strict";
// TypeScript => function, signature functions, function overloads
// function decloration
function pow(x, y) {
    return `${x}^${y}=${x ** y}`;
}
// arrow function
const pow2 = (x, y) => {
    return `${x}^${y}=${x ** y}`;
};
// return qilmaydigan funksiyani void function deymiz
function add(x, y) {
    console.log(x + y);
}
// tugallanmaydigan funksiyani never function deliladi
function someFunc(x) {
    // ishlaydigan kod
    throw new Error(x);
    // ishlamaydigan kod
}
// signature function
let c;
c = function (a, b) {
    return a + b;
};
function overloadFunc(x, y) {
    if (typeof x === 'number' || typeof y === 'number') {
        return x + y;
    }
    else {
        return `${x + y}`;
    }
}
console.log(overloadFunc(12, 12));
//# sourceMappingURL=index.js.map