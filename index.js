"use strict";
// typescriptda classlar
class Person {
    // 1ta klasda constructor bir marta ishlatiladi
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    ifno() {
        return `His name is ${this._name}. He is ${this._age} years old`;
    }
    static description() {
        return `Bu class haqida ma'lumot beradi...`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0 && value <= 100) {
            this._age = value;
        }
        else {
            throw new Error(`Siz noto'g'ri yosh kiritdingiz`);
        }
    }
}
Person.isFlying = false;
const rustam = new Person('Rustam', 72);
// console.log(rustam.ifno());
// console.log(Person.isFlying);
// console.log(Person.description());
console.log(rustam);
rustam.name = 'Oston';
rustam.age = 80;
console.log(rustam);
if (rustam instanceof Person) {
    console.log('tegishli');
}
else {
    console.log('tegishli emas');
}
//# sourceMappingURL=index.js.map