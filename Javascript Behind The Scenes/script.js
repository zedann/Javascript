"use strict";
//1-scoping
// const date = new Date().getFullYear();
// function calcAge(birthYear) {
//   const age = date - birthYear;
// }
// const firstName = "zedan";
// console.log(calcAge(2003));

//2-hoisting
// fun(1);
// const fun = function (x) {
//   console.log(x);
// };

//3-this keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// const calcAgeArrow = (birthYear) => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(2003);

// const jonas = {
//   firstName: "jonas",
//   year: 1991,
//   calcAge: function () {
//     //console.log(this);
//     // console.log(2023 - this.year);
//     const self = this;
//     console.log(this);
//     const isMillenial = function () {
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial(); //regular fun call this->undefined
//   },
//   greet: () => console.log("Hey " + this.firstName),
// };
// //var firstName = "zedan";
// // jonas.greet();
// // console.log(this);
// jonas.calcAge();

// function exp(...params) {
//   console.log(params);
//   // return a + b;
// }
// exp(2, 3, 4);
// const arr = (...params) => {
//   console.log(params);
//   // return a + b;
// };
// arr(3, 1, 8);
//primitives vs objects

// const user = {
//   userName: "username",
//   lastName: "lastname",
// };
// console.log(user);
//how to copy ref type(object)
// const user1 = Object.assign({}, user); //only work on first level (primitives)
// user1.userName = "zedan";
// user1.lastName = "mohamed";
// console.log(user1);

// const users = [];
// for (let i = 0; i < 100; i++) {
//   const curUser = {
//     firstName: `first${i}`,
//     last: "last",
//   };
//   users.push(curUser);
// }
// console.log(user);
// console.log(users);
