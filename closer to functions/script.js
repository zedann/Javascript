// // return function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = (gretting) => (name) => console.log(`${gretting} ${name}`);
// greet("hey")("zedan");

// call and apply methods
// call method.call(object that this will refere to , arg1 , arg2);
// apply method.apply(object that this will refere to , [args]);
// bind not call it but return a function after config this key

// const obj1 = {
//   name: "zedan",
//   email: "zedan123@123",
//   age: 21,
//   walk() {
//     console.log(`${this.name} walking and his age is ${this.age}`);
//   },
// };
// const obj2 = {
//   name: "ahmed",
//   email: "ahmed@123",
//   age: 22,
// };
// const walking = obj1.walk;
// const walkingObj2 = walking.bind(obj2);
// walkingObj2();
//bind is great ":

// const pollBtn = document.querySelector("button");
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     console.log(this);
//     const ans = Number(
//       window.prompt(`${this.question}\n ${this.options.join("\n")}`)
//     );
//     typeof ans === "number" &&
//       ans < this.options.length &&
//       ans >= 0 &&
//       this.answers[ans]++;
//     this.displayResults("array");
//   },
//   displayResults(type = "array") {
//     type == "array"
//       ? console.log(this.answers)
//       : console.log(`poll result are ${this.answers.join(",")}`);
//   },
// };
// pollBtn.addEventListener("click", poll.registerNewAnswer.bind(poll));

// const arr1 = [5, 2, 3];
// const displayResultsArr1 = poll.displayResults.bind(
//   { answers: [5, 2, 3] },
//   "string"
// );
// displayResultsArr1();
//iife
// (function () {
//   console.log("run once");
// })();
// {
//   console.log("we are in scope");
// }
//closures

// const parent = function () {
//   let cnt = 0;
//   return function () {
//     cnt++;
//     console.log(cnt);
//   };
// };

// const count = parent();
// count();
// count();
// count();
// count();
// count();

// more examples on closures
//challenge
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";
//   document.body.addEventListener("click", function () {
//     console.log("clicked");
//     header.style.color = "blue";
//   });
// })();
