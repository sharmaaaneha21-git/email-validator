const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        message.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Email cannot be empty';
        message.className = "error";
    } 
    else if (emailPattern.test(emailValue)) {
        message.innerHTML = '<i class="fa-solid fa-circle-check"></i> Valid email address';
        message.className = "success";
    } 
    else {
        message.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Invalid email address';
        message.className = "error";
    }
});