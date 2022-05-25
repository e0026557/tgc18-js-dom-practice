// Global variable for personType
let personType = 'local'; // default value

// Add event listener to each radio button
let radioBtns = document.querySelectorAll('.radioBtn');
for (let radioBtn of radioBtns) {
    radioBtn.addEventListener('change', function() {
        // Get for-locals div
        let forLocals = document.querySelector('#for-locals');
        let forTourists = document.querySelector('#for-tourists');

        // Get the value of the radio button that is checked
        if (this.checked && this.value == 'local') {
           forTourists.style.display = 'none';
           forLocals.style.display = 'block';
           personType = this.value;
        }
        else if (this.checked && this.value == 'tourist') {
            forTourists.style.display = 'block';
            forLocals.style.display = 'none';
            personType = this.value;
        }
    })
}


// Add event listener to sign up button
document.querySelector('#btnSignUp').addEventListener('click', function () {
    // Create a <ul> element to display results in list
    let ulElement = document.createElement('ul');
    ulElement.innerHTML = '';

    // Get first name
    let firstName = document.querySelector('#firstName').value;
    if (firstName) {
        ulElement.innerHTML += `<li>First name: ${firstName}</li>`;
    }
    // Get last name
    let lastName = document.querySelector('#lastName').value;
    if (lastName) {
        ulElement.innerHTML += `<li>Last name: ${lastName}</li>`;
    }
    
    
    // Get postal code
    let postalCode = document.querySelector('#postalCode').value; // null if empty
    if (postalCode && personType == 'local') {
        ulElement.innerHTML += `<li>Postal code: ${postalCode}</li>`;
    }
    
    // Get hotel name
    let hotelName = document.querySelector('#hotelName').value; // null if empty
    if (hotelName && personType == 'tourist') {
        ulElement.innerHTML += `<li>Hotel name: ${hotelName}</li>`;
    }
    
    // Add the <ul> into div#result
    let resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = ''; // reset previous results
    resultDiv.appendChild(ulElement);

})