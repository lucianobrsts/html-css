const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closebutton");

const mobileMenu = document.querySelector("#mobilemenu");

hamburgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("flex");
})

closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("flex");
})