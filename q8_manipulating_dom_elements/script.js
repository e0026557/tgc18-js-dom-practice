// PLACE YOUR CODE HERE

// Q1
document.querySelectorAll('.emphasis').forEach((element) => {
    element.style.fontFamily = 'Verdana';
})

// Q2
document.querySelectorAll('li.finished').forEach((element) => {
    element.style.textDecoration = 'line-through';
})

// Q3
document.querySelectorAll('#low-priority li.todo').forEach((element) => {
    element.style.backgroundColor = 'blue';
})

// Q4 
document.querySelectorAll('.alert').forEach((element) => {
    element.style.color = 'red';
});