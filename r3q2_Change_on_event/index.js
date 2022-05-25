let box = document.getElementById('the-box');

box.addEventListener('mouseover', function() {
    box.style.backgroundColor = 'orange';
})

box.addEventListener('mouseout', function() {
    box.style.backgroundColor = 'green';
})