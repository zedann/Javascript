'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const zedan = new Person('zedan', 2002);
const joy = new Person('Joy', 1990);
// console.log(zedan.age);

//Prototype inheritance

Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear;
};
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
