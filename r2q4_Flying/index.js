function extractFormInfo()
{
  
  let firstName = document.querySelector('#firstName').value;
  
  let lastName = document.querySelector('#lastName').value;
  
  let ticketClass = null;
  let radioBtns = document.querySelectorAll('.ticketClass');
  for (let radioBtn of radioBtns) {
    if (radioBtn.checked) {
      ticketClass = radioBtn.value;
      break;
    }
  }
  
  let options = [];
  let checkboxes = document.querySelectorAll('.options');
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      options.push(checkbox.value);
    }
  }

  return [firstName, lastName, ticketClass, options];
}

document.querySelector('button').addEventListener('click', function () {
  let info = extractFormInfo();
  let ticketClass = info[2];
  let options = info[3];

  let totalCost = 0;
  // Ticket cost
  if (ticketClass == 'firstClass') {
    totalCost += 1200;
  }
  else if (ticketClass == 'business') {
    totalCost += 750;
  }
  else {
    totalCost += 250;
  }

  // Add-on option cost
  totalCost += options.length * 10;

  document.querySelector('#summary').innerHTML = `Your choices are: Ticket class: ${ticketClass}, Options: ${options}, Total cost: $${totalCost}
  `;
})