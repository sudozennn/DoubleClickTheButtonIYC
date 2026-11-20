// ===== Game State =====
let attempts = 0;
let wins = 0;
let bestTime = Infinity;
let clickCount = 0;
let firstClickTime = 0;
let isRunningAway = false;
let moveInterval = null;

// DOM Elements
const targetButton = document.getElementById('targetButton');
const attemptsEl = document.getElementById('attempts');
const winsEl = document.getElementById('wins');
const bestTimeEl = document.getElementById('bestTime');
const messageEl = document.getElementById('message');
const winModal = document.getElementById('winModal');
const playAgainBtn = document.getElementById('playAgain');
const clueBtn = document.getElementById('clueBtn');
const clueModal = document.getElementById('clueModal');
const closeModalBtn = document.getElementById('closeModal');
const secretHint = document.getElementById('secretHint');
const secretText = document.getElementById('secretText');
const gameArea = document.getElementById('gameArea');

const DOUBLE_CLICK_DELAY = 400; // ms
const SECRET_UNLOCK_ATTEMPTS = 50000;

// ===== Initialize =====
updateStatsDisplay();

// ===== Target Button Logic =====
targetButton.addEventListener('click', (e) => {
    e.preventDefault();
    attempts++;
    updateStatsDisplay();

    const now = Date.now();

    if (clickCount === 0) {
        // First click
        clickCount = 1;
        firstClickTime = now;
        messageEl.textContent = 'Click again quickly! 👆';
        messageEl.className = '';
        
        // Start moving away after first click!
        startMovingAway();
        
    } else {
        // Second click
        const timeDiff = now - firstClickTime;
        if (timeDiff <= DOUBLE_CLICK_DELAY) {
            // 🎉 SUCCESS!
            handleWin(timeDiff);
        } else {
            // Too slow
            messageEl.textContent = 'Too slow! Try again 😅';
            messageEl.className = 'fail';
        }
        resetClicks();
    }

    // Unlock secret hint at 50,000 attempts
    if (attempts >= SECRET_UNLOCK_ATTEMPTS && secretHint.classList.contains('hidden')) {
        secretHint.classList.remove('hidden');
        secretText.textContent = "Just kidding! 😉 You don't actually need 50,000 attempts. Watch carefully — the button moves away after your FIRST click. Try to DOUBLE-CLICK fast before it escapes!";
    }
});

targetButton.addEventListener('dblclick', (e) => {
    // Prevent browser's default double-click selection
    e.preventDefault();
});

// ===== Button Movement — Smoother & Better =====
function startMovingAway() {
    if (isRunningAway) return;
    isRunningAway = true;
    targetButton.classList.add('running-away');
    
    // Initial position
    const areaRect = gameArea.getBoundingClientRect();
    const btnRect = targetButton.getBoundingClientRect();
    
    moveButton(areaRect, btnRect);
    
    // Keep moving to random positions smoothly
    moveInterval = setInterval(() => {
        const areaRect = gameArea.getBoundingClientRect();
        const btnRect = targetButton.getBoundingClientRect();
        moveButton(areaRect, btnRect);
    }, 600 + Math.random() * 400); // Random delay between moves
}

function moveButton(areaRect, btnRect) {
    // Calculate safe boundaries
    const maxX = areaRect.width - btnRect.width - 20;
    const maxY = areaRect.height - btnRect.height - 20;
    
    // Random position within bounds
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;
    
    // Sometimes move far away to be tricky
    if (Math.random() > 0.6) {
        const corners = [
            { x: 10, y: 10 },
            { x: maxX - 10, y: 10 },
            { x: 10, y: maxY - 10 },
            { x: maxX - 10, y: maxY - 10 }
        ];
        const corner = corners[Math.floor(Math.random() * corners.length)];
        newX = corner.x;
        newY = corner.y;
    }
    
    targetButton.style.position = 'absolute';
    targetButton.style.left = newX + 'px';
    targetButton.style.top = newY + 'px';
}

function stopMovingAway() {
    isRunningAway = false;
    targetButton.classList.remove('running-away');
    clearInterval(moveInterval);
    targetButton.style.position = 'relative';
    targetButton.style.left = '';
    targetButton.style.top = '';
}

function resetClicks() {
    clickCount = 0;
    firstClickTime = 0;
    stopMovingAway();
}

// ===== Win Handler =====
function handleWin(timeDiff) {
    wins++;
    if (timeDiff < bestTime) {
        bestTime = timeDiff;
    }
    updateStatsDisplay();
    
    messageEl.textContent = `🎉 DOUBLE CLICKED! ${timeDiff}ms`;
    messageEl.className = 'success';
    
    // Stop movement immediately
    stopMovingAway();
    
    // Show win modal
    setTimeout(() => {
        winModal.classList.remove('hidden');
        winModal.classList.add('modal');
    }, 300);
}

// ===== Play Again =====
playAgainBtn.addEventListener('click', () => {
    winModal.classList.add('hidden');
    winModal.classList.remove('modal');
    messageEl.textContent = 'Click the button...';
    messageEl.className = '';
    resetClicks();
});

// ===== Clue Modal =====
clueBtn.addEventListener('click', () => {
    clueModal.classList.remove('hidden');
    clueModal.classList.add('modal');
});

closeModalBtn.addEventListener('click', () => {
    clueModal.classList.add('hidden');
    clueModal.classList.remove('modal');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === clueModal) {
        clueModal.classList.add('hidden');
        clueModal.classList.remove('modal');
    }
    if (e.target === winModal) {
        winModal.classList.add('hidden');
        winModal.classList.remove('modal');
    }
});

// ===== Stats Display =====
function updateStatsDisplay() {
    attemptsEl.textContent = formatNumber(attempts);
    winsEl.textContent = formatNumber(wins);
    bestTimeEl.textContent = bestTime === Infinity ? '--' : bestTime + 'ms';
}

// Format large numbers nicely
function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

// ===== Keyboard Support =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        clueModal.classList.add('hidden');
        clueModal.classList.remove('modal');
        winModal.classList.add('hidden');
        winModal.classList.remove('modal');
    }
    if (e.key === 'Enter' && !winModal.classList.contains('hidden')) {
        playAgainBtn.click();
    }
});
