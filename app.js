// Added Log in button
const loginBtn = document.getElementById('loginBtn').addEventListener('click',function(){
    const loginArea = document.getElementById('loginArea').style.display = 'none';
    const transactionArea = document.getElementById('transactionArea').style.display = 'block';

});

const depositBtn = document.getElementById('depositBtn').addEventListener('click',function(){
    const valCount = parseFloat(document.getElementById('depositAmount').value);
    const txtCount = parseFloat(document.getElementById('currentDeposit').innerText);
    const balanceCount = parseFloat(document.getElementById('currentBalance').innerText);
    const depositTotalCount= valCount + txtCount;
    const totalBalanceIs = depositTotalCount + balanceCount;

    document.getElementById('currentBalance').innerText = totalBalanceIs;
    document.getElementById('currentDeposit').innerText = depositTotalCount;
   

});

const withdrawBtn = document.getElementById('withdrawBtn').addEventListener('click',function(){
    const valCount = parseFloat(document.getElementById('withdrawAmount').value);
    const txtCount = parseFloat(document.getElementById('currentWithdraw').innerText);
    const balanceCount = parseFloat(document.getElementById('currentBalance').innerText);
    const withdrawtotalCount  = valCount + txtCount;
    const totolBalanceIs = balanceCount - withdrawtotalCount;
    document.getElementById('currentWithdraw').innerText = withdrawtotalCount;
    document.getElementById('currentBalance').innerText = totolBalanceIs;
});