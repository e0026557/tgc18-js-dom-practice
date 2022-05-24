
function getFormValues() {

    // TODO
    let email = document.querySelector('#email-address').value;

    // TODO
    let model = null;
    let radioBtns = document.querySelectorAll('.phone-type');
    for (let radioBtn of radioBtns) {
        if (radioBtn.checked) {
            model = radioBtn.value;
            break;
        }
    }
    
    // TODO
    let services = [];
    let checkboxes = document.querySelectorAll('.services');
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            services.push(checkbox.value);
        }
    }

    
    // TODO
    let pickup = document.querySelector('#pick-up').value;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
