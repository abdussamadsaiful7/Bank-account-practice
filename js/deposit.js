//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
//step-2: get the deposit amount from the deposit input field
//for input use .value;
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);

//step-3: get the deposit current total amount,
//for non-input use innerText
const depositTotalElement = document.getElementById('total-deposit');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

//step-4: add number type to set the deposit
const currentDepositTotal = previousDepositTotal + newDepositAmount;
//set deposit total
depositTotalElement.innerText = currentDepositTotal;

//step-5: get balance current total,
const totalBalanceElement = document.getElementById('total-balance');
const previousTotalBalanceString = totalBalanceElement.innerText;
const previousTotalBalance = parseFloat(previousTotalBalanceString);

//step-6: calculate current total balance
const currentTotalBalance = previousTotalBalance + newDepositAmount;
//set Balance total
totalBalanceElement.innerText = currentTotalBalance;

//step-7: clear the deposit field
depositField.value ='';

});