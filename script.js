const button = document.querySelector(".button");
const letter = document.querySelector(".letter");
const firstScreen = document.querySelector(".first-screen");
const nextButton = document.querySelector(".next-button");
const thirdScreen = document.querySelector(".third-screen");
const card = document.querySelector(".card");

button.addEventListener("click", function() {
    button.disabled = true;

    function showLetter(event) {
        if (event.target !== firstScreen ||
            event.propertyName !== "opacity") {
            return;
        }

        firstScreen.removeEventListener("transitionend", showLetter);
        firstScreen.style.display = "none";

        letter.style.maxHeight = "none";
        letter.style.visibility = "visible";
        letter.style.opacity = "1";
    }

    firstScreen.addEventListener("transitionend", showLetter);
    firstScreen.style.opacity = "0";
});

nextButton.addEventListener("click", function() {
    nextButton.disabled = true;

    function showThirdScreen(event) {
        if (event.target !== letter ||
            event.propertyName !== "opacity") {
            return;
        }

        letter.removeEventListener("transitionend", showThirdScreen);
        letter.style.display = "none";

        thirdScreen.style.display = "flex";
        card.classList.add("third-screen-active");

        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                thirdScreen.style.opacity = "1";
            });
        });
    }

    letter.addEventListener("transitionend", showThirdScreen);
    letter.style.opacity = "0";
});
