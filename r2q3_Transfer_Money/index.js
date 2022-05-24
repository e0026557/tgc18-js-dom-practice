// PLACE YOUR CODE HERE
let account = document.querySelector('#account');
let wallet = document.querySelector('#other-wallet');

// Top up $10 to account
document.querySelector('#topUp10').addEventListener('click', function () {
    let accountBalance = Number(account.innerHTML);
    accountBalance += 10;
    account.innerHTML = accountBalance;
})

// Transfer $10 from account to wallet
document.querySelector('#transfer10ToWallet').addEventListener('click', function () {
    let accountBalance = Number(account.innerHTML);
    accountBalance -= 10;
    account.innerHTML = accountBalance;
    
    let walletBalance = Number(wallet.innerHTML);
    walletBalance += 10;
    wallet.innerHTML = walletBalance;
})

// Transfer $10 from wallet to account
document.querySelector('#transfer10ToAccount').addEventListener('click', function () {
    let accountBalance = Number(account.innerHTML);
    accountBalance += 10;
    account.innerHTML = accountBalance;
    
    let walletBalance = Number(wallet.innerHTML);
    walletBalance -= 10;
    wallet.innerHTML = walletBalance;
})