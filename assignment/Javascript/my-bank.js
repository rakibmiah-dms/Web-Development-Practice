// login button event handler
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// deposit button event handler
const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("current-deposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById("current-deposit").innerText = totalDeposit;
    document.getElementById("deposit-amount").value = "";

    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("current-balance").innerText = totalBalance;

    
})

// // withdraw button even handler
const WithdrawBtn = document.getElementById("add-withdraw");
WithdrawBtn.addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById("current-withdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw = withdrawNumber + currentWithdrawNumber;

    document.getElementById("current-withdraw").innerText = totalWithdraw;
    document.getElementById("withdraw-amount").value = "";

    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + -1 * withdrawNumber;
    document.getElementById("current-balance").innerText = totalBalance;
})