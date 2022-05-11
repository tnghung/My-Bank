'use strict';

// Data
const account1 = {
  owner: 'Nguyen Hung',
  movements: [20000, 400050, -40000, 3000, -65000, -130000, 70000, 130000],
  interestRate: 1.2,
  pin: 1111,

  movementsDates: ['2022-02-18T21:31:17.178Z', '2022-02-23T07:42:02.383Z', '2022-02-28T09:15:04.904Z', '2022-03-01T10:17:24.185Z', '2022-04-08T14:11:59.604Z', '2022-04-27T17:01:17.194Z', '2022-05-11T23:36:17.929Z', '2022-05-11T23:36:17.929Z'],
  currency: 'VND',
  locale: 'vi-VN',
};

const account2 = {
  owner: 'Thanh Ha',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 1111,

  movementsDates: ['2021-12-01T13:15:33.035Z', '2022-02-25T09:48:16.867Z', '2022-03-25T06:04:23.907Z', '2022-03-25T14:18:46.235Z', '2022-04-05T16:33:06.386Z', '2022-04-10T14:43:26.374Z', '2022-04-25T18:49:59.371Z', '2022-05-09T12:01:20.894Z'],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Duoc Lam',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 1111,

  movementsDates: ['2021-12-01T13:15:33.035Z', '2022-02-25T09:48:16.867Z', '2022-03-25T06:04:23.907Z', '2022-03-25T14:18:46.235Z', '2022-04-05T16:33:06.386Z', '2022-04-10T14:43:26.374Z', '2022-04-25T18:49:59.371Z', '2022-05-09T12:01:20.894Z'],
  // ¥
  currency: 'JPY',
  locale: 'ja-JP',
};

const account4 = {
  owner: 'Huu Binh',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1,
  pin: 1111,
  movementsDates: ['2021-12-01T13:15:33.035Z', '2022-02-25T09:48:16.867Z', '2022-03-25T06:04:23.907Z', '2022-03-25T14:18:46.235Z', '2022-04-05T16:33:06.386Z', '2022-04-10T14:43:26.374Z', '2022-04-25T18:49:59.371Z', '2022-05-09T12:01:20.894Z'],
  currency: 'RUB',
  locale: 'ru-RU',
};

const account5 = {
  owner: 'Duy Nam',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1,
  pin: 1111,

  movementsDates: ['2021-12-01T13:15:33.035Z', '2022-02-25T09:48:16.867Z', '2022-03-25T06:04:23.907Z', '2022-03-25T14:18:46.235Z', '2022-04-05T16:33:06.386Z', '2022-04-10T14:43:26.374Z', '2022-04-25T18:49:59.371Z', '2022-05-09T12:01:20.894Z'],
  // ¥
  currency: 'JPY',
  locale: 'ja-JP',
};

const account6 = {
  owner: 'Loc Son',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1,
  pin: 1111,

  movementsDates: ['2021-12-01T13:15:33.035Z', '2022-02-25T09:48:16.867Z', '2022-03-25T06:04:23.907Z', '2022-03-25T14:18:46.235Z', '2022-04-05T16:33:06.386Z', '2022-04-10T14:43:26.374Z', '2022-04-25T18:49:59.371Z', '2022-05-09T12:01:20.894Z'],
  currency: 'USD',
  locale: 'en-US',
};

const account7 = {
  owner: 'Van Toan',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1,
  pin: 1111,

  movementsDates: ['2021-12-01T13:15:33.035Z', '2022-02-25T09:48:16.867Z', '2022-03-25T06:04:23.907Z', '2022-03-25T14:18:46.235Z', '2022-04-05T16:33:06.386Z', '2022-04-10T14:43:26.374Z', '2022-04-25T18:49:59.371Z', '2022-05-09T12:01:20.894Z'],
  //¥
  currency: 'CNY',
  locale: 'zh-CN',
};

const account8 = {
  owner: 'Nhut Quang',
  movements: [20, -120, -300, 1000, 400, 200, -200, 400, 600],
  interestRate: 1,
  pin: 1111,

  movementsDates: ['2021-12-01T13:15:33.035Z', '2021-12-01T13:15:33.035Z', '2022-02-25T09:48:16.867Z', '2022-03-25T06:04:23.907Z', '2022-03-25T14:18:46.235Z', '2022-04-05T16:33:06.386Z', '2022-04-10T14:43:26.374Z', '2022-04-25T18:49:59.371Z', '2022-05-09T12:01:20.894Z'],
  currency: 'TRY',
  locale: 'tr-TR',
};

const account9 = {
  owner: 'Xuan Vy',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1,
  pin: 1111,

  movementsDates: ['2021-12-01T13:15:33.035Z', '2022-02-25T09:48:16.867Z', '2022-03-25T06:04:23.907Z', '2022-03-25T14:18:46.235Z', '2022-04-05T16:33:06.386Z', '2022-04-10T14:43:26.374Z', '2022-04-25T18:49:59.371Z', '2022-05-09T12:01:20.894Z'],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4, account5, account6, account7, account8, account9];

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

const createUsernames = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((word) => word[0])
      .join('');
  });
};
createUsernames(accounts);

const formatMovementDate = function (date, locale) {
  const now = new Date();
  const daysPassed = Math.floor(Math.abs(now - date) / (1000 * 60 * 60 * 24));

  console.log(daysPassed);

  const displayDate = Intl.DateTimeFormat(locale).format(date);

  switch (true) {
    case daysPassed === 0:
      return 'Today';
    case daysPassed === 1:
      return 'Yesterday';
    case daysPassed >= 2 && daysPassed < 7:
      return daysPassed + ' days ago';
    default:
      return displayDate;
  }
};

const formatCurrencyValue = function (locale, currency, value) {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const countDownTimer = function () {};

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? account.movements.slice().sort((a, b) => a - b) : account.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(account.movementsDates[i]);
    const displayDate = formatMovementDate(date, account.locale);
    const formattedMov = Intl.NumberFormat(account.locale, {
      style: 'currency',
      currency: account.currency,
    }).format(mov);

    const html = `
    <div class="movements__row">
       <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
       <div class="movements__date">${displayDate}</div>
       <div class="movements__value">${formattedMov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  const formattedBalance = formatCurrencyValue(account.locale, account.currency, account.balance);
  labelBalance.textContent = `${formattedBalance}`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements.filter((mov) => mov > 0).reduce((sum, mov) => sum + mov, 0);

  const outs = account.movements.filter((mov) => mov < 0).reduce((sum, mov) => sum + mov, 0);

  const interests = account.movements.filter((mov) => mov > 0).reduce((sum, mov) => sum + (mov * account.interestRate) / 100, 0);

  labelSumIn.textContent = formatCurrencyValue(account.locale, account.currency, incomes);
  labelSumOut.textContent = formatCurrencyValue(account.locale, account.currency, outs);
  labelSumInterest.textContent = formatCurrencyValue(account.locale, account.currency, interests);
};

let currentAccount;

const logOut = function () {
  alert('Your time is out! Please log in again 😘');
  containerApp.style.opacity = '0';
  currentAccount = undefined;
  labelWelcome.textContent = `Log in to get started`;
};

const startLogOutTimer = function () {
  let time = 300;
  setInterval(function () {
    const mins = String(Math.trunc(time / 60)).padStart(2, 0);
    const secs = String(Math.trunc(time % 60)).padStart(2, 0);
    labelTimer.textContent = `${mins}:${secs}`;
    time--;

    if (time === 0) {
      logOut();
    }
  }, 1000);
};

const updateUI = function (currentAccount) {
  // Display balance
  calcDisplayBalance(currentAccount);

  // Display summary
  calcDisplaySummary(currentAccount);

  // Display movements
  displayMovements(currentAccount);
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  startLogOutTimer();

  currentAccount = accounts.find((acc) => acc.username === inputLoginUsername.value.trim());

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Reset username and PIN to ''
    inputLoginUsername.value = inputLoginPin.value = '';

    // Make focus to PIN input disappear
    inputLoginPin.blur();

    // Display UI and wellcome
    containerApp.style.opacity = '1';
    const time = new Date().getHours();
    let str;
    if (time >= 5 && time <= 10) {
      str = 'Good Morning';
    } else if (time > 10 && time <= 18) {
      str = 'Good Afternoon';
    } else {
      str = 'Good Evening';
    }
    labelWelcome.textContent = `${str}, ${currentAccount.owner.split(' ').at(-1)}!`;

    const now = new Date();

    // Define locale from browser
    // const locale = navigator.language;

    // Make a options to format a date
    const options = {
      weekday: 'short', // short
      day: 'numeric', // long, shor, 2-digit
      month: 'numeric', // 2-digit, short
      year: 'numeric', // short, 2-digit
      hour: 'numeric',
      minute: 'numeric',
    };

    labelDate.textContent = Intl.DateTimeFormat(currentAccount.locale, options).format(now).replace(',', '');
    updateUI(currentAccount);
  } else {
    alert('😥 Wrong username or PIN! 😥');
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.focus();
  }
});

let isSort = false;
btnSort.addEventListener('click', function () {
  displayMovements(currentAccount, !isSort);
  isSort = !isSort;
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const recipentAccount = accounts.find((acc) => acc.owner === inputTransferTo.value);

  // Catch error: Transfer to myself
  if (recipentAccount?.owner === currentAccount.owner) {
    alert("🤡 You can't transfer to yourself! 🤡");
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferAmount.blur();
    return;
  }

  // Catch error: invalid amount < 0
  if (amount <= 0) {
    alert('😤 Your amount must greater than 0! 😤');
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferAmount.blur();
    return;
  }

  // Catch error: Amount > balace's account
  if (amount > currentAccount.balance) {
    alert("😖 You don't have enough money to transfer! 😖");
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferAmount.blur();
    return;
  }

  if (recipentAccount) {
    // Update movements data for current account and recipent account
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    recipentAccount.movements.push(amount);
    recipentAccount.movementsDates.push(new Date().toISOString());

    setTimeout(() => {
      updateUI(currentAccount);
      inputTransferTo.value = inputTransferAmount.value = '';
      inputTransferAmount.blur();
    }, 1000);
  } else {
    alert("Wrong recipent's name! Please check again");
    inputTransferTo.focus();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  if (amount > 0 && currentAccount.movements.some((mov) => mov >= 0.1 * amount)) {
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    setTimeout(function () {
      updateUI(currentAccount);
      inputLoanAmount.value = '';
      inputLoanAmount.blur();
    }, 500);
  } else {
    alert("😬 You don't have deposit is greater than 10% request! 😬");
    inputLoanAmount.focus();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value.trim() === currentAccount.username && +inputClosePin.value === currentAccount.pin) {
    const index = accounts.findIndex((acc) => acc.username === currentAccount.username);
    accounts.splice(index, 1);
    alert('Delete success!');
    containerApp.style.opacity = '0';
    currentAccount = undefined;
    labelWelcome.textContent = `Log in to get started`;
    inputCloseUsername.value = inputClosePin.value = '';
  } else {
    alert('😢 Check for username or PIN! 😢');
    inputCloseUsername.value = inputClosePin.value = '';
    inputCloseUsername.focus();
  }
});

// LECTURES
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/*
// Creating Dates
// Create a date
const now = new Date();
console.log(now);
console.log(new Date('Aug 02 2022 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(2142256980000));
console.log(Date.now());
future.setFullYear(2040);
console.log(future);
///////////////////////////////////////
// Operations With Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
///////////////////////////////////////
// Internationalizing Numbers (Intl)
const num = 3884764.23;
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};
console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
///////////////////////////////////////
// Timers
// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
*/
