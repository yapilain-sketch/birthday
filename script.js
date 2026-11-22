const button = document.querySelector(".button");
const letter = document.querySelector(".letter");
const firstScreen = document.querySelector(".first-screen");
const nextButton = document.querySelector(".next-button");
const thirdScreen = document.querySelector(".third-screen");
const card = document.querySelector(".card");

button.addEventListener("click", function() {
    button.style.display = "none";
    firstScreen.style.opacity = "0";

    firstScreen.addEventListener("transitionend", function() {
        firstScreen.style.display = "none";

        letter.style.maxHeight = "none";
        letter.style.visibility = "visible";
        letter.style.opacity = "1";
    }, { once: true });
});

nextButton.addEventListener("click", function() {
    letter.style.opacity = "0";

    function showThirdScreen(event) {
        if (event.target !== letter || event.propertyName !== "opacity") {
            return;
        }

        letter.removeEventListener("transitionend", showThirdScreen);

        letter.style.display = "none";
        thirdScreen.style.display = "flex";
        card.classList.add("third-screen-active");
        thirdScreen.style.opacity = "0";

        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                thirdScreen.style.opacity = "1";
            });
        });
    }

    letter.addEventListener("transitionend", showThirdScreen);
});
