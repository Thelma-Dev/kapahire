'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

const loginBtn = getElement('login');
const login = [
    { email: 'thelma64@gmail.com', password: 'The@45$$' },
];

localStorage.setItem('login', JSON.stringify(login));
console.log(localStorage);

const loginDetails = JSON.parse(localStorage.getItem('login'));

function validate() {

    let email = select('.email').value.trim();
    let password = select('.password').value.trim();


    let message = '';
    let valid = true;

    for(const details of loginDetails) {
        const validEmail = `${details.email}`
        const validPassword = `${details.password}`
    
        if (email.length === 0) {
            message += 'Email is required';
            valid = false;
            count++;
        } else if (email !== validEmail) {
            message += 'Username or Password is invalid'
            valid = false;
        }

        if (password.length === 0) {
            message += 'Postal code is required';
            valid = false;
            count++;
        } else if (password !== validPassword) {
            message += 'Username or Password is invalid'
            valid = false;
        }

        if (!valid) {
            console.log(message);
        } else {
            window.location.replace("home.html");
            console.log('Form submitted');
        }
    }
}

onEvent('click', loginBtn, () => {
    validate();
})
