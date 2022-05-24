// PLACE YOUR CODE HERE
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
    let walletBalance = Number(wallet.innerHTML);

    // Ensure that there is enough balance in account
    if (accountBalance >= 10) {
        accountBalance -= 10;
        walletBalance += 10;
    }
    
    account.innerHTML = accountBalance;
    wallet.innerHTML = walletBalance;
})

// Transfer $10 from wallet to account
document.querySelector('#transfer10ToAccount').addEventListener('click', function () {
    let accountBalance = Number(account.innerHTML);
    let walletBalance = Number(wallet.innerHTML);
    
    // Ensure that there is enough balance in wallet
    if (walletBalance >= 10) {
        walletBalance -= 10;
        accountBalance += 10;
    }

    wallet.innerHTML = walletBalance;
    account.innerHTML = accountBalance;
})

// Spend money from wallet
document.querySelector('#spend').addEventListener('click', function () {
    let amount = Number(document.querySelector('#amount').value);
    let walletBalance = Number(wallet.innerHTML);

    // Ensure that there is enough balance in wallet
    if (walletBalance >= amount) {
        walletBalance -= amount;
    }
    wallet.innerHTML = walletBalance;
})