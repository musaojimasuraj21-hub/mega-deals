// Mega Deals JavaScript

console.log("Mega Deals website loaded successfully!");

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button");

    if (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Welcome to Mega Deals! More product reviews are coming soon.");
        });
    }
});
