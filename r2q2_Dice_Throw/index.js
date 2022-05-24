// PLACE YOUR CODE HERE
function getRandomInt() {
    return Math.floor(Math.random()*5)+1;
}

let button = document.querySelector('button');
button.addEventListener('click', function () {
    let boxes = document.querySelectorAll('.box');
    let sum = 0;
    for (let box of boxes) {
        let value = getRandomInt();
        box.innerHTML = value;
        sum += value;
    }

    let result = document.querySelector('span');
    result.innerHTML = sum;
})

