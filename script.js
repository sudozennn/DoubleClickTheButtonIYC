// ==========================
// Elements
// ==========================

const gameArea = document.getElementById("gameArea");
const targetButton = document.getElementById("targetButton");

const attemptsText = document.getElementById("attempts");
const winsText = document.getElementById("wins");
const bestTimeText = document.getElementById("bestTime");
const message = document.getElementById("message");

const clueBtn = document.getElementById("clueBtn");
const clueModal = document.getElementById("clueModal");
const closeModal = document.getElementById("closeModal");

const secretHint = document.getElementById("secretHint");
const secretText = document.getElementById("secretText");

const winModal = document.getElementById("winModal");
const playAgain = document.getElementById("playAgain");

// ==========================
// Save Data
// ==========================

let attempts = Number(localStorage.getItem("attempts")) || 0;
let wins = Number(localStorage.getItem("wins")) || 0;
let bestTime = Number(localStorage.getItem("bestTime")) || 0;

updateStats();

// ==========================
// Game Variables
// ==========================

let waitingSecondClick = false;
let firstClickTime = 0;
let timeout = null;

// ==========================
// Update UI
// ==========================

function updateStats() {

    attemptsText.textContent = attempts;
    winsText.textContent = wins;

    if (bestTime === 0) {
        bestTimeText.textContent = "--";
    } else {
        bestTimeText.textContent = bestTime + " ms";
    }

    localStorage.setItem("attempts", attempts);
    localStorage.setItem("wins", wins);
    localStorage.setItem("bestTime", bestTime);

}

// ==========================
// Random Position
// ==========================

function moveButton() {

    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;

    const buttonWidth = targetButton.offsetWidth;
    const buttonHeight = targetButton.offsetHeight;

    const x = Math.random() * (areaWidth - buttonWidth);
    const y = Math.random() * (areaHeight - buttonHeight);

    targetButton.style.left = x + "px";
    targetButton.style.top = y + "px";
    targetButton.style.transform = "none";

}

// ==========================
// Game Logic
// ==========================

targetButton.addEventListener("click", () => {

    // First Click
    if (!waitingSecondClick) {

        waitingSecondClick = true;
        firstClickTime = performance.now();

        attempts++;
        updateStats();

        message.textContent = "Quick! Click it again!";

        moveButton();

        timeout = setTimeout(() => {

            waitingSecondClick = false;
            message.textContent = "Too slow! Try again.";

        }, 400);

    }

    // Second Click
    else {

        clearTimeout(timeout);

        waitingSecondClick = false;

        const reaction = Math.round(performance.now() - firstClickTime);

        wins++;

        if (bestTime === 0 || reaction < bestTime) {
            bestTime = reaction;
        }

        updateStats();

        message.textContent = "Amazing! You did it!";

        winModal.classList.remove("hidden");

    }

});

// ==========================
// Clue Modal
// ==========================

clueBtn.addEventListener("click", () => {

    clueModal.classList.remove("hidden");

    if (attempts >= 50000) {

        secretHint.classList.remove("hidden");

        secretText.textContent =
"How to win: All you need to do is double click the 'Double' word in the title to win the game.";

    }

});

closeModal.addEventListener("click", () => {

    clueModal.classList.add("hidden");

});

clueModal.addEventListener("click", (e) => {

    if (e.target === clueModal) {
        clueModal.classList.add("hidden");
    }

});

// ==========================
// Win Modal
// ==========================

playAgain.addEventListener("click", () => {

    winModal.classList.add("hidden");

    targetButton.style.left = "50%";
    targetButton.style.top = "50%";
    targetButton.style.transform = "translate(-50%, -50%)";

    message.textContent = "Click the button...";

});

// ==========================
// Prevent Button Leaving Area
// ==========================

window.addEventListener("resize", () => {

    targetButton.style.left = "50%";
    targetButton.style.top = "50%";
    targetButton.style.transform = "translate(-50%, -50%)";

});

// ==========================
// Funny Messages
// ==========================

setInterval(() => {

    if (attempts > 0 && attempts % 100 === 0) {

        const messages = [

            "Keep trying. 😏",
            "You're getting closer... maybe.",
            "That button is fast.",
            "Skill issue? 😂",
            "Don't give up!",
            "Almost... probably.",
            "One more try!",
            "The button believes in you."

        ];

        message.textContent =
            messages[Math.floor(Math.random() * messages.length)];

    }

}, 1000);


const doubleWord = document.getElementById("doubleWord");

doubleWord.addEventListener("dblclick", () => {

    if (attempts < 50000) return;

    wins++;

    updateStats();

    message.textContent = "🎉 You discovered the secret!";

    winModal.classList.remove("hidden");

});