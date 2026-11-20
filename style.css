/* ===== Global Styles ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: relative;
    overflow-x: hidden;
}

/* Background Animation */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
}

/* ===== Clue Button ===== */
#clueBtn {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(145deg, #6366f1, #4f46e5);
    color: white;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
    transition: all 0.3s ease;
    z-index: 100;
}

#clueBtn:hover {
    transform: scale(1.1) rotate(15deg);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
}

/* ===== Main Content ===== */
main {
    text-align: center;
    max-width: 600px;
    width: 100%;
    margin-top: 60px;
    animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

#gameTitle {
    font-size: clamp(1.8rem, 5vw, 2.8rem);
    margin-bottom: 10px;
    background: linear-gradient(90deg, #fff, #a5b4fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

#doubleWord {
    color: #ec4899;
    -webkit-text-fill-color: #ec4899;
    text-shadow: 0 0 20px rgba(236, 72, 153, 0.4);
}

.subtitle {
    color: #94a3b8;
    font-size: 1.1rem;
    margin-bottom: 35px;
}

/* ===== Stats Section ===== */
.stats {
    display: flex;
    justify-content: center;
    gap: clamp(15px, 5vw, 40px);
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.stat {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 18px 25px;
    min-width: 110px;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
}

.stat .label {
    display: block;
    font-size: 0.85rem;
    color: #94a3b8;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.stat span:last-child {
    font-size: 1.8rem;
    font-weight: bold;
    color: #f8fafc;
}

/* ===== Game Area ===== */
#gameArea {
    position: relative;
    min-height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed rgba(99, 102, 241, 0.3);
    border-radius: 20px;
    background: rgba(99, 102, 241, 0.03);
    margin-bottom: 25px;
    overflow: hidden;
    transition: border-color 0.3s ease;
}

#gameArea:hover {
    border-color: rgba(99, 102, 241, 0.5);
}

/* ===== Target Button ===== */
#targetButton {
    padding: 22px 35px;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    border-radius: 14px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    cursor: pointer;
    position: relative;
    transition: all 0.15s ease;
    box-shadow: 0 6px 25px rgba(99, 102, 241, 0.4);
    user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
}

#targetButton:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
}

#targetButton:active {
    transform: scale(0.97);
}

#targetButton.running-away {
    transition: left 0.12s cubic-bezier(0.4, 0, 0.2, 1), 
                top 0.12s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Pulse Animation */
@keyframes pulse {
    0% { box-shadow: 0 6px 25px rgba(99, 102, 241, 0.4); }
    50% { box-shadow: 0 6px 35px rgba(236, 72, 153, 0.5); }
    100% { box-shadow: 0 6px 25px rgba(99, 102, 241, 0.4); }
}

#targetButton:not(.escaping) {
    animation: pulse 2s infinite;
}

/* ===== Message ===== */
#message {
    font-size: 1.1rem;
    color: #cbd5e1;
    min-height: 40px;
    transition: all 0.3s ease;
}

#message.success {
    color: #4ade80;
    font-weight: bold;
    animation: popIn 0.4s ease;
}

#message.fail {
    color: #f87171;
    animation: shake 0.5s ease;
}

@keyframes popIn {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-6px); }
    80% { transform: translateX(6px); }
}

/* ===== Modals ===== */
.hidden {
    display: none !important;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 23, 42, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    animation: fadeIn 0.3s ease;
}

.modal-content {
    background: linear-gradient(145deg, #1e293b, #0f172a);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 20px;
    padding: 35px 30px;
    text-align: center;
    max-width: 400px;
    width: 90%;
    position: relative;
    animation: scaleIn 0.4s ease;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
}

@keyframes scaleIn {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
}

.modal-content h2 {
    font-size: 1.6rem;
    margin-bottom: 20px;
}

.modal-content p {
    color: #cbd5e1;
    margin-bottom: 25px;
    line-height: 1.6;
}

.modal-content button {
    padding: 12px 30px;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    background: linear-gradient(135deg, #6366f1, #ec4899);
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
}

.modal-content button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
}

#closeModal {
    position: absolute;
    top: 12px;
    right: 15px;
    background: transparent !important;
    color: #94a3b8 !important;
    font-size: 1.5rem;
    padding: 0 !important;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#closeModal:hover {
    color: #fff !important;
    transform: rotate(90deg);
}

hr {
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin: 20px 0;
}

h3 {
    color: #facc15;
    margin-bottom: 10px;
}

/* ===== Responsive / Mobile ===== */
@media (max-width: 480px) {
    body {
        padding: 15px;
    }

    main {
        margin-top: 50px;
    }

    #clueBtn {
        top: 15px;
        right: 15px;
        width: 40px;
        height: 40px;
        font-size: 18px;
    }

    .stats {
        gap: 10px;
    }

    .stat {
        padding: 15px 18px;
        min-width: 95px;
    }

    .stat span:last-child {
        font-size: 1.5rem;
    }

    #gameArea {
        min-height: 220px;
    }

    #targetButton {
        padding: 18px 25px;
        font-size: 1rem;
    }

    .modal-content {
        padding: 25px 20px;
    }
}
