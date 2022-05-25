function changeColor() {
    let currentColor = this.style.backgroundColor;
    if (currentColor == 'red') {
        currentColor = 'white';
    }
    else {
        currentColor = 'red';
    }
    this.style.backgroundColor = currentColor;
}

let boxes = document.querySelectorAll('.box');
for (let box of boxes) {
    box.addEventListener('mouseenter', changeColor);
    box.addEventListener('mouseleave', changeColor);
} 