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
.card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 12px;
}.card .button {
    display: block;
    width: fit-content;
    margin: 20px auto 0;
}
