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