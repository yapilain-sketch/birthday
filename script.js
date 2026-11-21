const button = document.querySelector(".button");
const letter = document.querySelector(".letter");
const firstScreen = document.querySelector(".first-screen");
const box = document.querySelector(".box");
const nextButton = document.querySelector(".next-button");

button.addEventListener("click", function() {
    button.style.display = "none";
    firstScreen.style.opacity = "0";
    firstScreen.addEventListener("transitionend", function() {
        firstScreen.style.display = "none";
        letter.style.maxHeight = "none";
        letter.style.visibility = "visible";
        letter.style.opacity = "1";
    });
})

nextButton.addEventListener("click", function() {
    letter.style.opacity = "0";
});

