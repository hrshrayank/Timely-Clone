/* The design was taken from https://uidesigndaily.com/posts/sketch-sign-up-ui-design-form-day-1206 */

const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Error message
const showError = (input, message) => {
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
}
  
// Success message
const showSuccess = (input) => {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}

// Check full name if its length greater than 4 and lesser than 20 characters
const checkFullName = (input, min, max) => {
    if(input.value === ''){
        showError(input,'Full name cannot be empty');
    }else if(input.value.length < min){
        showError(input,'Full name must be greater')
    }else if(input.value.length > max){
        showError(input,'Full name must be lesser')
    }else{
        showSuccess(input);
    }
}

// Check email
const checkEmail = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value === ''){
        showError(input, 'Email cannot be empty')
    }else if (re.test(input.value.trim())) {
        showSuccess(input);
    }else{
        showError(input, 'Looks like this is not an email');
    }
}

// Check password if it is greater than 6 and lesser than 25
const checkPassword = (input, min, max) => {
    if(input.value === ''){
        showError(input, 'Password cannot be empty');
    }else if(input.value.length < min){
        showError(input,'Password must be greater')
    }else if(input.value.length > max){
        showError(input,'Password must be lesser')
    }else{
        showSuccess(input);
    }
}


// Event listener
form.addEventListener('submit', e => {
    e.preventDefault();

    checkEmail(email);
    checkFullName(fullname, 4, 20);
    checkPassword(password, 6, 25);
})