'use strict';

const depositBtnEl = document.querySelector('.deposit-btn');
const withdrawBtnEl = document.querySelector('.withdraw-btn');
const accountBalanceEl = document.querySelector('.balance');
const exitBtnEl = document.querySelector('.exit-btn');

let balance = 0;
accountBalanceEl.textContent = balance;

//1. Implementing the deposit
depositBtnEl.addEventListener('click', function () {
  let depositAmount = Number(document.querySelector('.deposit-amount').value);

  if (depositAmount > 0) {
    balance += depositAmount;
    accountBalanceEl.textContent = balance;
    alert(`You deposited ${depositAmount}`);
  } else {
    alert('Enter a positive amount!');
  }
});

//2. Implementing the withdraw
withdrawBtnEl.addEventListener('click', function () {
  let widthdrawAmount = Number(document.querySelector('.withdraw-amount').value);

  if (!widthdrawAmount) {
    alert('Enter a positive amount');
  } else if (widthdrawAmount > balance) {
    alert('Insufficient Balance');
  } else {
    alert(`You withdraw: ${widthdrawAmount}`);
    balance -= widthdrawAmount;
    accountBalanceEl.textContent = balance;
  }
});

// Implementing exit transaction btn
exitBtnEl.addEventListener('click', function () {
  depositAmount = Number(
    (document.querySelector('.deposit-amount').value = '')
  );

  widthdrawAmount = Number(document.querySelector('.withdraw-amount').value = '');
});
