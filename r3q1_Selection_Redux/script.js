// PLACE YOUR CODE HERE
// Q1
let header2 = document.querySelector('h2');
header2.style.fontSize = '32px';
header2.style.fontFamily = 'Verdana';

// Q2 
let wolfImg = document.querySelector('#wolf-img');
wolfImg.style.border = '1px solid black';
wolfImg.style.padding = '32px 0 15px 0';

// Q3
let firstFact = document.querySelector('#randomFactList li:first-child');
let lastFact = document.querySelector('#randomFactList li:last-child');

firstFact.style.backgroundColor = 'yellow';
lastFact.style.backgroundColor = 'yellow';

// Q4
let titleRecipe = document.querySelector('#titleRecipe');
titleRecipe.innerHTML = 'Pancake Recipe';

// Q5
let orderLiElements = document.querySelectorAll('ol li');
for (let orderLiElement of orderLiElements) {
    orderLiElement.style.color = 'orange';
}