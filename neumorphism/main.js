// we are hiding the modals on page load
window.onload = function(){
    var loginModal = document.getElementById("login-modal");
    var registerModal = document.getElementById("register-modal");

    loginModal.style.display = "none";
    registerModal.style.display = "none";
}
// now we'll show them when we need them
function openLoginModal(){
    var loginModal = document.getElementById("login-modal");
    var registerModal = document.getElementById("register-modal");
    loginModal.style.display = "block";
    registerModal.style.display = "none";
}
// let's close on x clicked
function closeLoginModal(){
    var loginModal = document.getElementById("login-modal");
    loginModal.style.display = "none";
}
function openRegisterModal(){
    var registerModal = document.getElementById("register-modal");
    var loginModal = document.getElementById("login-modal");
    registerModal.style.display = "block";
    loginModal.style.display = "none";
}
// let's close on x clicked
function closeRegisterModal(){
    var registerModal = document.getElementById("register-modal");
    registerModal.style.display = "none";
}
