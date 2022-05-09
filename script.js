'use strict';

// Data
const account1 = {
  owner: 'Nguyen Hung',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Thanh Ha',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 1111,
};

const account3 = {
  owner: 'Duoc Lam',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 1111,
};

const account4 = {
  owner: 'Huu Binh',
  movements: [430, -1000, 700, 50, 90],
  interestRate: 1,
  pin: 1111,
};

const account5 = {
  owner: 'Duy Nam',
  movements: [20, -120, -300, 1000, 400, 200],
  interestRate: 1,
  pin: 1111,
};

const account6 = {
  owner: 'Loc Son',
  movements: [20, -120, -300, 1000, 400, 200],
  interestRate: 1,
  pin: 1111,
};

const account7 = {
  owner: 'Van Toan',
  movements: [20, -120, -300, 1000, 400, 200],
  interestRate: 1,
  pin: 1111,
};

const account8 = {
  owner: 'Nhut Quang',
  movements: [20, -120, -300, 1000, 400, 200],
  interestRate: 1,
  pin: 1111,
};

const account9 = {
  owner: 'Xuan Vy',
  movements: [20, -120, -300, 1000, 400, 200],
  interestRate: 1,
  pin: 1111,
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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
       <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
       <div class="movements__value">${Math.abs(mov)}$</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((word) => word[0])
      .join('');
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `$${account.balance}`;
};

const calcDisplaySummary = function (movements, interestRate) {
  const incomes = movements.filter((mov) => mov > 0).reduce((sum, mov) => sum + mov, 0);
  labelSumIn.textContent = incomes + '$';

  const outs = movements.filter((mov) => mov < 0).reduce((sum, mov) => sum + mov, 0);
  labelSumOut.textContent = Math.abs(outs) + '$';

  const interests = movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * interestRate) / 100)
    .reduce((sum, mov) => sum + mov, 0);

  labelSumInterest.textContent = interests + '$';
};

createUsernames(accounts);

const updateUI = function (currentAccount) {
  // Display balance
  calcDisplayBalance(currentAccount);

  // Display summary
  calcDisplaySummary(currentAccount.movements, currentAccount.interestRate);

  // Display movements
  displayMovements(currentAccount.movements);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find((acc) => acc.username === inputLoginUsername.value.trim());

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Reset username and PIN to ''
    inputLoginUsername.value = inputLoginPin.value = '';

    // Make focus to PIN input disappear
    inputLoginPin.blur();

    // Display UI and wellcome
    containerApp.style.opacity = '1';
    labelWelcome.textContent = `Good Morning, ${currentAccount.owner.split(' ').at(-1)}!`;

    updateUI(currentAccount);
  } else {
    alert('😥 Wrong username or PIN! 😥');
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.focus();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recipentAccount = accounts.find((acc) => acc.owner === inputTransferTo.value);

  // Reset value input fields to ''
  inputTransferTo.value = inputTransferAmount.value = '';

  // Catch error: Transfer to myself
  if (recipentAccount?.owner === currentAccount.owner) {
    alert("🤡 You can't transfer to yourself! 🤡");
    inputTransferAmount.blur();
    return;
  }

  // Catch error: invalid amount < 0
  if (amount <= 0) {
    alert('😤 Your amount must greater than 0! 😤');
    inputTransferAmount.blur();
    return;
  }

  // Catch error: Amount > balace's account
  if (amount > currentAccount.balance) {
    alert("😖 You don't have enough money to transfer! 😖");
    inputTransferAmount.blur();
    return;
  }

  if (recipentAccount) {
    // Update movements data for current account and recipent account
    currentAccount.movements.push(-amount);
    recipentAccount.movements.push(amount);

    updateUI(currentAccount);
  } else {
    alert("Wrong recipent's name! Please check again");
    inputTransferTo.focus();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some((mov) => mov >= 0.1 * amount)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  } else {
    alert("😬 You don't have deposit is greater than 10% request! 😬");
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputCloseUsername.value.trim() === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex((acc) => acc.username === currentAccount.username);
    accounts.splice(index, 1);
    alert('Delete success!');
    containerApp.style.opacity = '0';
    currentAccount = undefined;
    labelWelcome.textContent = `Log in to get started`;
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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

function calcAverageHumanAge(ages) {
  const dogAgeToHumanAges = ages.map((age) => (age > 2 ? 16 + age * 4 : 2 * age));
  const adultDogs = dogAgeToHumanAges.filter((age) => age >= 18);
  const averageAdultDogAges = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
  return averageAdultDogAges;
}

function calcAverageHumanAge2(ages) {
  const averageAdultDogAges = ages
    .map((age) => (age > 2 ? 16 + age * 4 : 2 * age))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return averageAdultDogAges;
}

const arr = [2, 31, -22, 44, 22, 3323, -9999];

// return < 0, if a < b (keep)
// return > 0, if a > b (switch)
// arr.sort((a, b) => b - a);
