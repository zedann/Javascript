// const myPromise = new Promise((resolve, reject) => {
//   let connect = false;
//   if (connect) {
//     resolve("Connection Established");
//   } else {
//     reject(Error("connection faild"));
//   }
// });
// console.log(myPromise);
// myPromise.then(
//   (resolveValue) => console.log(`good ${resolveValue}`),
//   (rejectValue) => console.log(`bad ${rejectValue}`)
// );

// const myPromise = new Promise((resolve, reject) => {
//   let employees = [];
//   if (employees.length == 4) {
//     resolve(employees);
//   } else reject(Error("Number of Employees Is Not 4"));
// })
//   .then((resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     resolveValue.length = 1;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     console.log(`Choosen Emplyee is ${resolveValue}`);
//   })
//   .catch((rejectedReason) => console.log(rejectedReason))
//   .finally(() => console.log("on finally"));

// const getData = function (apiLink) {
//   return new Promise((resolve, reject) => {
//     const myReq = new XMLHttpRequest();
//     myReq.onload = function () {
//       if (this.status == 200 && this.readyState == 4) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };
//     myReq.open("GET", apiLink);
//     myReq.send();
//   });
// };
// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result))
//   .catch((reject) => console.log(reject));

// let jsData = JSON.parse(this.responseText);
//         for (let i = 0; i < jsData.length; ++i) {
//           let div = document.createElement("div");
//           let repoName = document.createTextNode(
//             i + 1 + " - " + jsData[i].name
//           );
//           div.appendChild(repoName);
//           document.body.appendChild(div);
/**----------------------------fetch------------------------------------------ */
// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     let myData = result.json();
//     return myData;
//   })
//   .then((data) => {
//     data.length = 10;
//     return data;
//   })
//   .then((data) => console.log(data))
//   .catch((reject) => console.log(reject));
/**
 * promise
 * all
 * all settled
 * race
 */
// const myFirstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Iam The First Promise");
//   }, 5000);
// });
// const mySecondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Iam The Second Promise");
//   }, 1000);
// });
// const myThirdPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Iam The Third Promise");
//   }, 2000);
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected ${rejectedValue}`)
// );
// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected ${rejectedValue}`)
// );
// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected ${rejectedValue}`)
// );
/**************************************Async********************************************** */
// function getData() {
//   return new Promise((res, rej) => {
//     let users = ["zedan"];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }
// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );
// function getData() {
//   let users = ["zedan"];
//   if (users.length > 0) {
//     return Promise.resolve("User Found");
//   } else {
//     return Promise.reject("No User Found");
//   }
// }
// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );
// async function getData() {
//   let users = [];
//   if (users.length > 0) {
//     return "User Found";
//   } else {
//     throw new Error("No User Found");
//   }
// }
// console.log(getData());
// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );
//------------------------------await---------------------------------------
// const myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The Bad Promise");
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   await myPromise.then((res) => {
//     console.log(res);
//   });
//   console.log("After Promise");
// }
// readData();
//-------------------------------try catch finally--------------------------------------
// const myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Iam The Bad Promise");
//   }, 3000);
// });

async function fetchData() {
  console.log("Before Fetch");
  try {
    let myData = await fetch(
      "https://api.github.com/users/elzerowebschool/repos"
    );
    let data = await myData.json();
    console.log(data[0].name);
  } catch (error) {
    console.log("error:" + error);
  } finally {
    console.log("After Fetch");
  }
}
fetchData();
