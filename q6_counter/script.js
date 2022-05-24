function colorChange() {
    // Get current count
    let num = parseInt(box.innerHTML);
    // If num is even
    if (num % 2 == 0) {
        box.style.backgroundColor = 'green';
    }
    else {
        box.style.backgroundColor = 'red';
    }
}

// Box element
let box = document.querySelector('#box');
colorChange();

// Increment
document.querySelector('#increment').addEventListener('click', () => {
    let count = parseInt(box.innerHTML);
    if (count <10) {
        count++;
    }
    box.innerHTML = count;
    colorChange();
})

// Decrement
document.querySelector('#decrement').addEventListener('click', () => {
    let box = document.querySelector('#box');
    let count = parseInt(box.innerHTML);
    if (count > 0) {
        count--;
    }
    box.innerHTML = count;
    colorChange();
})

// Reset
document.querySelector('#reset').addEventListener('click', () => {
    box.innerHTML = '0';
    colorChange();
})