document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawString = withdrawInput.value;
    const newWithdraw = parseFloat(newWithdrawString);
    
    

    const prevWithdrawField = document.getElementById('withdraw-feild');
    const prevWithdrawString = prevWithdrawField.innerText;
    const prevWithdraw = parseFloat(prevWithdrawString);

    const totalWithdraw = prevWithdraw + newWithdraw;
    
    prevWithdrawField.innerText = totalWithdraw;

    // balance
    const balanceField = document.getElementById('balance-Field');
    const prevBalString = balanceField.innerText;
    const prevBal = parseFloat(prevBalString);
    
    const totalBal = prevBal - newWithdraw;
    
    balanceField.innerText = totalBal;
    withdrawInput.value = ''; 
})