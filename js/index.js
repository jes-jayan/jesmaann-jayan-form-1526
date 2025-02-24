let fname = document.getElementById('fname');
let email = document.getElementById('email-input');
let msg = document.getElementById('message');
let btn = document.getElementById('submit-button');

console.log(fname.value);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function formValidater() {
    
    let data = {};
    let err = [];

// FULL-NAME VALIDATION
if (fname.value) {

    data.fullName = fname.value.trim();

} else {
    err.push('Please enter your name!');
}

// EMAIL VALIDATION
if (email.value) {

    if (emailRegex.test(email.value)) {
        data.email = email.value;
      } else {
        err.push('Please enter a valid email!');
      }

} else {
    err.push('Please enter your email!');
}

// MESSAGE VALIDATION
if (msg.value) {

    data.message = msg.value.trim();

} else {
    err.push('Please enter your message!');
}

console.log('COLLECTED DATA:');
console.log(data);
console.log('ERRORS:');
console.log(err);

}

btn.addEventListener('click',formValidater);