"use strict";

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const nameText = document.querySelector(".name__text");

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onChkinSubmit(event) {
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintnameTexts(username);
}

function paintnameTexts(username) {
    nameText.innerText = username;
    nameText.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onChkinSubmit);
} else {
    // show the nameTexts
    paintnameTexts(savedUsername);
}
