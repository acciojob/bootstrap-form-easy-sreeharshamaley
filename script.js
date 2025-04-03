//your code here
// Select the form
const form = document.querySelector('form');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Validate the inputs
    validateInput('first-name-input');
    validateInput('last-name-input');
    validateInput('email-input');
    validateInput('college-input');
    validateInput('roll-no-input');

    // Validate the select
    validateSelect('grad-year-select');

    // Validate the checkbox
    validateCheckbox('conditions-checkbox');
});

// Function to validate an input
function validateInput(id) {
    const input = document.getElementById(id);
    if (!input.value) {
        // If the input is empty, show an error
        console.log(id + ' is required');
    }
}

// Function to validate a select
function validateSelect(id) {
    const select = document.getElementById(id);
    if (!select.value) {
        // If no option is selected, show an error
        console.log(id + ' is required');
    }
}

// Function to validate a checkbox
function validateCheckbox(id) {
    const checkbox = document.getElementById(id);
    if (!checkbox.checked) {
        // If the checkbox is not checked, show an error
        console.log(id + ' is required');
    }
}