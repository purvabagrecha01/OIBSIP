// CareerBoost basic JavaScript

const buttons = document.querySelectorAll(".job-card button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Application feature coming soon!");
    });
});

const getStarted = document.querySelector(".nav-btn");

getStarted.addEventListener("click", function() {
    console.log("Welcome to CareerBoost!");
});
