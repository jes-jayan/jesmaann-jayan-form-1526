let fname = document.getElementById('fname');
let email = document.getElementById('email-input');
let msg = document.getElementById('message');
let btn = document.getElementById('submit-button');

console.log(fname.value);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function formValidater() {
    
    let data = {};
    let errors = [];

// FULL-NAME VALIDATION
if (fname.value) {

    data.fullName = fname.value.trim();

} else {
    errors.push('Please enter your name!');
}

// EMAIL VALIDATION
if (email.value) {

    if (emailRegex.test(email.value)) {
        data.email = email.value;
      } else {
        errors.push('Please enter a valid email!');
      }

} else {
    errors.push('Please enter your email!');
}

// MESSAGE VALIDATION
if (msg.value) {

    data.message = msg.value.trim();

} else {
    errors.push('Please enter your message!');
}

console.log('COLLECTED DATA:');
const datavalues = Object.values(data);
console.log(datavalues);

console.log('ERRORS:');
console.log(errors);

}

btn.addEventListener('click',formValidater);
