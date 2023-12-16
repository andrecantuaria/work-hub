'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectById(selector, parent = document) {
    return parent.getElementById(selector);
}

// Dialog

//Sign-up functionality is not working in this version
// It is just for design purposes
const btnJoinNow = document.querySelector('.btn-join-now');
const dialog = document.querySelector('dialog');
const closeModal = document.querySelector('span');

btnJoinNow.addEventListener('click', () => {
    dialog.showModal();
});

closeModal.addEventListener('click', () => {
    dialog.close();
});

dialog.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    if (e.clientY < rect.top || e.clientY > rect.bottom ||
        e.clientX < rect.left || e.clientX > rect.right) {
        dialog.close();
    }
});

// DOM Elements
const signInButton = select('.sign-in-button');

// save credentials in localStorage
function saveCredentials(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

// Check credentials
if (!localStorage.getItem('username') || !localStorage.getItem('password')) {
    saveCredentials('andre', '123456');
}
//test
console.log(localStorage);

onEvent('click', signInButton, signIn);


function signIn() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    const enteredUsername = select('.login-username').value;
    const enteredPassword = select('.login-password').value;
    const loginOutputMessage = select('.login-output-message');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        window.location.href = 'profile.html';
    } else {
        loginOutputMessage.innerHTML = 'Invalid credentials. Please try again.';
    }
}
