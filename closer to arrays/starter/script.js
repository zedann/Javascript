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

//challenge #2
// const calcAverageHumanAge = function (dogsAges) {
//   const adultDogs = dogsAges
//     .map(function (cur) {
//       if (cur <= 2) return cur * 2;
//       else return 16 + cur * 4;
//     })
//     .filter(function (cur) {
//       return cur >= 18;
//     });
//   const avg = adultDogs.reduce((acc, cur) => acc + cur);
//   return avg / adultDogs.length;
// };
//challenge#3
// const calcAverageHumanAge = (dogsAges) =>
//   dogsAges
//     .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
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
//--------------------------------------------------------

//display movments
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
//displayMovements(account1.movements);

// calc and display balance
const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  account.balance = balance;
  labelBalance.textContent = `${balance} EUR`;
};
//calcDisplayBalance(account1.movements);

// calc and display summary
const calcDisplaySummary = function (curAccount) {
  const incomes = curAccount.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes} EUR`;
  const outcomes = curAccount.movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur);
  labelSumOut.textContent = `${Math.abs(outcomes)} EUR`;
  const interest = curAccount.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * curAccount.interestRate) / 100)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};
//calcDisplaySummary(account1.movements);

//preprocess users
const computeUsers = function (accounts) {
  const usersAccounts = accounts.forEach(function (acc) {
    const username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((word) => word[0])
      .join('');
    acc.username = username;
  });
};
computeUsers(accounts);
//login
let logedAcc;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  logedAcc = accounts.find((acc) => acc.username === inputLoginUsername.value);
  if (!logedAcc) {
    alert('This Username does not exist');
    return;
  }
  if (logedAcc.pin !== Number(inputLoginPin.value)) {
    alert('This Pin is wronge');
    return;
  }
  //Display UI and welcome message
  labelWelcome.textContent = `Welcome Back , ${logedAcc.owner
    .split(' ')
    .at(0)}`;
  containerApp.style.opacity = 1;
  emptyInput(inputLoginPin, inputLoginUsername);
  inputLoginPin.blur(), inputCloseUsername.blur();
  updateUi(logedAcc);
});
//update ui
const updateUi = function (logedAcc) {
  displayMovements(logedAcc.movements);
  calcDisplayBalance(logedAcc);
  calcDisplaySummary(logedAcc);
};
//empty input
const emptyInput = function (...inputs) {
  for (const input of inputs) input.value = '';
};
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferTo = accounts.find(function (acc) {
    return acc.username === inputTransferTo.value;
  });
  const amount = Number(inputTransferAmount.value);
  emptyInput(inputTransferAmount, inputTransferTo);
  if (amount <= 0 || !logedAcc.balance || logedAcc.balance < amount) {
    alert('Wronge Transaction');
    return;
  }
  if (!transferTo) {
    alert('This Account is not exist');
    return;
  }
  logedAcc.movements.push(-amount);
  transferTo.movements.push(amount);

  inputLoginPin.blur(), inputCloseUsername.blur();
  alert('Transaction Successfully');
  updateUi(logedAcc);
});

//close account and log out

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    Number(inputClosePin.value) !== logedAcc.pin ||
    inputCloseUsername.value !== logedAcc.username
  ) {
    emptyInput(inputCloseUsername, inputClosePin);
    alert('Username or Password Is Wronge!');
    return;
  }
  emptyInput(inputCloseUsername, inputClosePin);
  const closeAccountIdx = accounts.findIndex(function (acc) {
    return acc === logedAcc;
  });
  accounts.splice(closeAccountIdx, 1);
  containerApp.style.opacity = 0;
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    logedAcc.movements.some(function (mov) {
      return mov >= (10 / 100) * amount;
    })
  ) {
    //add movement
    logedAcc.movements.push(amount);
    updateUi(logedAcc);
    alert('Successfully Transaction');
  }
  emptyInput(inputLoanAmount);
});
//--------------------------------------------------------

//max mov
// const maxMov = movements.reduce(function (acc, cur) {
//   return Math.max(acc, cur);
// }, movements.at(0));
// console.log(maxMov);
// console.log(account1);
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// const withdrawals = movements.filter(mov => mov < 0);
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);
// const eurToUsd = 1.1;
// const totalDepositUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(totalDepositUSD);
