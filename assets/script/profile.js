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


function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}


function create(element, parent = document) {
    return parent.createElement(element);
}

// Generate random number between - and including - 'min' and 'max'
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

 
function print(...args) {
    console.log(args.join(', '));
}


//  Get User

const URL = "https://randomuser.me/api/?nat=CA&results=15";
const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    mode: "cors",
};

async function getUsers() {
    try {
        const result = await fetch(URL, options);
        if (!result.ok) {
            throw new Error(`${result.statusText}(${result.status})`);
        }

        const users = await result.json();
        const list = users.results;
        setUsers(list);

    } catch (error) {
        console.error(error.message);
    }
}

// Fetch user data
getUsers();

// Select the container where random users will be displayed
const userContainerList = select('.random-users');

// Function to set and display users
function setUsers(userList) {
    userList.forEach(user => {
        // Create a container for each user
        const userContainer = document.createElement('div');
        userContainer.className = 'user-container';

        // Create an image element for the user's picture
        const userImage = document.createElement('img');
        userImage.className = 'user-image';
        userImage.src = user.picture.medium;
        userContainer.appendChild(userImage);

        // Create a div for user information
        const userInfo = document.createElement('div');
        userInfo.className = 'user-info';

        // Create a paragraph for the user's name
        const userName = document.createElement('p');
        userName.className = 'user-name';
        userName.innerText = `${user.name.first} ${user.name.last}`;
        userInfo.appendChild(userName);

        // Create a paragraph for the user's city
        const userCity = document.createElement('p');
        userCity.className = 'user-city';
        userCity.textContent = user.location.city;
        userInfo.appendChild(userCity);

        // Append user information to the user container
        userContainer.appendChild(userInfo);

        // Create an icon for adding the user
        const addUserIcon = document.createElement('icon');
        addUserIcon.classList.add('fas', 'fa-user-plus');
        userContainer.appendChild(addUserIcon);

        // Append the user container to the list of users
        userContainerList.appendChild(userContainer);
    });
}
