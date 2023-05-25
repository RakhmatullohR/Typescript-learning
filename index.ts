// typescriptda classlar

class Person {
  _name: string;
  _age: number;
  // 1ta klasda constructor bir marta ishlatiladi
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  ifno(): string {
    return `His name is ${this._name}. He is ${this._age} years old`;
  }
  static isFlying = false;
  static description(): string {
    return `Bu class haqida ma'lumot beradi...`;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get age(): number {
    return this._age;
  }
  set age(value: number) {
    if (value > 0 && value <= 100) {
      this._age = value;
    } else {
      throw new Error(`Siz noto'g'ri yosh kiritdingiz`);
    }
  }
}

const rustam: Person = new Person('Rustam', 72);
// console.log(rustam.ifno());
// console.log(Person.isFlying);
// console.log(Person.description());
console.log(rustam);
rustam.name = 'Oston';
rustam.age = 80;
console.log(rustam);

if (rustam instanceof Person) {
  console.log('tegishli');
} else {
  console.log('tegishli emas');
}
