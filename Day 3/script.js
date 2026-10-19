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