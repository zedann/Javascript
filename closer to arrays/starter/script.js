'use strict';

//challenge #1

// const checkDogs = function (dogsJulia, dogsKate) {
//   const juliaDogs = [...dogsJulia],
//     kateDogs = [...dogsKate];
//   const juliaCats = [...juliaDogs.splice(0, 1), ...juliaDogs.splice(-2)];
//   juliaDogs.forEach(function (dogAge, i) {
//     console.log(`Dog number ${i + 1}
//     is an ${
//       dogAge >= 3 ? `adult, and is ${dogAge} years old` : 'is still a puppy 🐶'
//     }`);
//   });
//   kateDogs.forEach(function (dogAge, i) {
//     console.log(`Dog number ${i + 1}
//     is an ${
//       dogAge >= 3 ? `'adult, and is ${dogAge} years old` : 'is still a puppy 🐶'
//     }`);
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function (e, i) {
//   console.log(`${Math.abs(e)} ${e < 0 ? `withdrawals` : `deposite`}`);
// });

/////////////////////////////////////////////////

// const arr = ['a', 'b', 'c', 'd', 'e'];
//console.log(arr);
// arr.pop(); // == splice(-1);
// console.log(arr);

// const arr = [12, 23, 43];
// console.log(arr.at(0));

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(value, key, map);
// });

//set -> value , key , set but key == value
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov < 0 ? 'withdrawal' : 'deposit';
    const html = `
    <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
            <div class="movements__value">${mov}€</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const computeUsers = function (accounts) {
  const usersAccounts = accounts.forEach(function (acc) {
    const username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
    acc.username = username;
  });
};
computeUsers(accounts);
// console.log(account1);
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const withdrawals = movements.filter(mov => mov < 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
