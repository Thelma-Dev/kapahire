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
let invalidMsg = select('.message');

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
      
window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const login = [
    { email: 'freeman64@gmail.com', password: 'Fre@45$$' },
];

localStorage.setItem('login', JSON.stringify(login));

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
            message += 'Email is required ';
            valid = false;
        } else if (email !== validEmail) {
            message += 'Username or Password is invalid '
            valid = false;
        }

        if (password.length === 0) {
            message += 'Password is required ';
            valid = false;
        } else if (password !== validPassword) {
            message += 'Username or Password is invalid '
            valid = false;
        }

        if (!valid) {
            invalidMsg.classList.add('is-visible');
            invalidMsg.innerHTML = message;
        } else {
            password = '';
            email = '';
            window.location.replace("home.html");
        }
    }
}

onEvent('click', loginBtn, () => {
    validate();
})
