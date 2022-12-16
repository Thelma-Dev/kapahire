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


const userStorage = select('.user');
const userbox = select('.other-users');
const url = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';

const options = {
    method: 'GET',
    mode: 'cors'
};

async function getUsers() {
    try {
        const response = await fetch(url, options);

        if(response.status >= 200 && response.status < 400) {
            const data = await response.json();
            const users = data.results;
            getProfileImage(users);
        }
    } catch(error) {
        console.log(error);
    }
}
getUsers();

function getProfileImage(el) {
    el.forEach(element => {
        let userImage = document.createElement('div');
        let userStorage = document.createElement('div');
        let userInfo = document.createElement('div');
        
        userInfo.classList.add('userinfo');
        userImage.classList.add('image');
        userStorage.classList.add('user');
        

        userImage.innerHTML = `<img src= "${element.picture.medium}" max-width="100%" max-height="100%" border-radius="50%" >`;

        userInfo.innerHTML = `<p>${element.name.first} ${element.name.last}</p>` +
                             `<p>${element.location.city}</p>`

        userStorage.append(userImage, userInfo);
        
        userbox.append(userStorage);
    });
}

// function getUsername(el) {
//     el.forEach(element => {
//         let userInfo = document.createElement('div');
//         userInfo.classList.add('userinfo');

//         userInfo.innerHTML = `<p>${element.name.first} ${element.name.last}</p>` +
//                              `<p>${element.location.city}</p>`
//         userbox.append(userInfo);
//     }); 
// }

