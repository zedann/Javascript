'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const zedan = new Person('zedan', 2002);
// const joy = new Person('Joy', 1990);
// // console.log(zedan.age);

// //Prototype inheritance

// Person.prototype.calcAge = function () {
//   return new Date().getFullYear() - this.birthYear;
// };
// console.log(zedan.calcAge());
// console.log(zedan.__proto__.__proto__);
// console.log(Person.prototype.__proto__);
// console.log(Array.prototype);

//challenge

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// Car.prototype.break = function () {
//   this.speed = Math.abs(this.speed - 5);
//   console.log(this.speed);
// };

// const car1 = new Car('bmw', 120);
// const car2 = new Car('mercedes', 95);
// console.log(car1, car2);
// car1.accelerate();
// car1.break();

//ES6 Classes

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //added to prototype
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} not a full name`);
//   }
//   get fullName() {
//     return this._fullName ?? 'person';
//   }
//   //static methods
//   static hey() {
//     console.log('hello there👋');
//   }
// }
// const zedan = new Person('zedan mohamed', 2003);
// // console.log(zedan);
// const joy = new Person('joy tribiany', 2000);
// joy.fullName = 'joseph tribiany'; //set
// console.log(joy.fullName); //get

//static methods

// Person.hey = function () {
//   console.log(`hey there 🙋‍♂️`);
// };
// Person.hey();
// Person.hey();

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }
// }

// const bmw = new Car('bmw', 120);
// console.log(bmw.speedUS);
// bmw.speedUS = 100;
// console.log(bmw.speed);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// const sayHello = function () {
//   return 'hello';
// };

//Inheritance
//function constructor

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(new Date().getFullYear() - this.birthYear);
// };

// Person.prototype.alive = function () {
//   console.log('alive...');
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.sayFullName = function () {
//   console.log(`${this.firstName} Tribiany`);
// };

// console.log(Person.prototype);
// const zedan = new Student('zedan', 2002, 'math');
// zedan.calcAge();
// zedan.sayFullName();

//challenge

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.break = function () {
  this.speed = Math.abs(this.speed - 5);
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(this.charge * 100 + '%');
};
EV.prototype.accelerate = function () {
  //overriding
  this.speed += 20;
  this.charge -= 0.01;
  console.log(
    `${this.make} going at ${this.speed} km/h , with a charge of ${
      this.charge * 100
    }%`
  );
};
// console.log(EV.prototype.accelerate);

const tesla = new EV('Tesla', 120, 0.23);
console.log(tesla);
tesla.accelerate();
tesla.break();
tesla.chargeBattery(0.9);
