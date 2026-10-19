const loginView = document.getElementById("login-view");
const registerView = document.getElementById("register-view");

const showRegister = document.getElementById("show-register");
const showLogin = document.getElementById("show-login");


showRegister.addEventListener("click", function (event) {

    event.preventDefault();

    loginView.style.display = "none";
    registerView.style.display = "block";

});


showLogin.addEventListener("click", function (event) {

    event.preventDefault();

    registerView.style.display = "none";
    loginView.style.display = "block";

});

const loginForm = document.querySelector("#login-view form");
const registerForm = document.querySelector("#register-view form");

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();
    const email = document.querySelector("#login-email").value.trim();
    const password = document.querySelector("#login-password").value;

    const emailError = document.querySelector("#login-email-error");
    const passwordError = document.querySelector("#login-password-error");

    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (!isValidEmail(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
}

    if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
}
    if (isValid) {
        console.log("Login form is valid.");

    }
});

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#register-name").value.trim();
    const email = document.querySelector("#register-email").value.trim();
    const password = document.querySelector("#register-password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;

    const nameError = document.querySelector("#register-name-error");
    const emailError = document.querySelector("#register-email-error");
    const passwordError = document.querySelector("#register-password-error");
    const confirmPasswordError = document.querySelector("#confirm-password-error");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
    }

    if (!isValidEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        console.log("Registration form is valid.");
    }

});