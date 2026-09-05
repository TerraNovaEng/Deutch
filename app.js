// js/app.js
let currentDialogue = null;
let currentStepIndex = 0;
let score = 0;

const menuScreen = document.getElementById('menu-screen');
const exerciseScreen = document.getElementById('exercise-screen');
const dialogueList = document.getElementById('dialogue-list');
const dialogueTitle = document.getElementById('dialogue-title');
const promptArea = document.getElementById('prompt-area');
const optionsArea = document.getElementById('options-area');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');

function init() {
    renderMenuList();
    document.getElementById('back-btn').addEventListener('click', goHome);
}

function renderMenuList() {
    dialogueList.innerHTML = '';
    dialoguesData.forEach(dialogue => {
        const card = document.createElement('div');
        card.className = 'dialogue-card';
        card.innerHTML = `<h3>${dialogue.title}</h3><p>${dialogue.steps.length} Schritte</p>`;
        card.addEventListener('click', () => startDialogue(dialogue.id));
        dialogueList.appendChild(card);
    });
}

function startDialogue(id) {
    currentDialogue = dialoguesData.find(d => d.id === id);
    currentStepIndex = 0;
    menuScreen.classList.remove('active');
    exerciseScreen.classList.add('active');
    dialogueTitle.textContent = currentDialogue.title;
    loadStep();
}

function loadStep() {
    feedback.className = 'hidden';
    optionsArea.innerHTML = '';
    
    if (currentStepIndex >= currentDialogue.steps.length) {
        promptArea.innerHTML = `<h3>🎉 Bravo! Dialog abgeschlossen!</h3>`;
        return;
    }

    const step = currentDialogue.steps[currentStepIndex];
    promptArea.innerHTML = `<p><strong>${step.prompt}</strong></p>`;

    // Shuffle options for better gameplay
    let shuffled = step.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
    shuffled.sort(() => Math.random() - 0.5);

    shuffled.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = item.text;
        btn.addEventListener('click', () => checkAnswer(item.originalIndex === step.correct, btn));
        optionsArea.appendChild(btn);
    });
}

function checkAnswer(isCorrect, btn) {
    const buttons = optionsArea.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    if (isCorrect) {
        btn.classList.add('correct');
        feedback.textContent = "Richtig! Gut gemacht.";
        feedback.className = "success";
        score += 10;
        scoreDisplay.textContent = score;
        currentStepIndex++;
        setTimeout(loadStep, 1500);
    } else {
        btn.classList.add('wrong');
        feedback.textContent = "Falsch. Versuch es noch einmal!";
        feedback.className = "error";
        setTimeout(() => {
            buttons.forEach(b => b.disabled = false);
            btn.classList.remove('wrong');
            feedback.className = "hidden";
        }, 1500);
    }
}

function goHome() {
    exerciseScreen.classList.remove('active');
    menuScreen.classList.add('active');
}

init();