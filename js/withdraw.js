/*
1. add event handle with the withdraw button
2. get the withdraw amount from the withdraw input field.
2.5. Also make sure to convert the input into a number by parseFloat,
3. get previous withdraw  total
4. calculate total withdraw amount 
4.5. set total withdraw amount
5. get the previous balance total.
6. calculate new balance Total
6.5 set the new balance total
7. clear the input field
*/
//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const   newWithdrawAmountString = withdrawField.value;
    const  newWithdrawAmount = parseFloat(newWithdrawAmountString);
   
    //step-3:
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const previousWithdrawTotalElement = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalElement);
    
    //step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount; 
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-5: 
    const balanceTotalElement = document.getElementById('total-balance');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalBalanceTotal = parseFloat(previousTotalBalanceString);

    //step-6:
    const NewBalanceTotal = previousTotalBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = NewBalanceTotal;
    //step-7:
    withdrawField.value = '';
});