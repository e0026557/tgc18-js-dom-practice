// PLACE YOUR CODE HERE

// Q1 & Q2
let criminals = document.querySelectorAll('.a:not(.undercover)');
for (let criminal of criminals) {
    criminal.style.backgroundColor = 'red';
    criminal.innerText += '(jailed)';
}

let undercoversArrested = document.querySelectorAll('.a.undercover');
for (let undercover of undercoversArrested) {
    undercover.style.backgroundColor = 'yellow';
}



