const img = document.getElementById("movable-image");
let topPosition = 0;
let leftPosition = 0;

document.getElementById("up").addEventListener("click", () => {
    topPosition -= 10;
    img.style.top = topPosition + "px";
});

document.getElementById("down").addEventListener("click", () => {
    topPosition += 10;
    img.style.top = topPosition + "px";
});

document.getElementById("left").addEventListener("click", () => {
    leftPosition -= 10;
    img.style.left = leftPosition + "px";
});

document.getElementById("right").addEventListener("click", () => {
    leftPosition += 10;
    img.style.left = leftPosition + "px";
});
const answers = document.querySelectorAll("#interactive-trivia .answer");
const feedback = document.getElementById("trivia-feedback");

answers.forEach(button => {
    button.addEventListener("click", () => {
        if (button.dataset.correct === "true") {
            feedback.textContent = "Correct!";
        } else {
            feedback.textContent = "Try again!";
        }
    });
});
const scrollImg = document.getElementById("scroll-image");

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    scrollImg.style.top = scrollPosition * 0.5 + "px"; // moves slower than scroll
});

const adventureButtons = document.querySelectorAll(".adventure");
const adventureFeedback = document.getElementById("adventure-feedback");

adventureButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.dataset.choice === "left") {
            adventureFeedback.textContent = "You found a treasure!";
        } else {
            adventureFeedback.textContent = "Oh no! You fell into a pit!";
        }
    });
});