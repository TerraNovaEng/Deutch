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
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', goHome);
    }
}

function renderMenuList() {
    if (!dialogueList) return;
    dialogueList.innerHTML = '';
    dialoguesData.forEach(dialogue => {
        const card = document.createElement('div');
        card.className = 'dialogue-card';
        if (dialogue.type === "order") {
            card.innerHTML = `<h3>${dialogue.title}</h3><p>Ordnen-Modus</p>`;
        } else {
            card.innerHTML = `<h3>${dialogue.title}</h3><p>${dialogue.steps.length} Schritte</p>`;
        }
        card.addEventListener('click', () => startDialogue(dialogue.id));
        dialogueList.appendChild(card);
    });
}

function startDialogue(id) {
    currentDialogue = dialoguesData.find(d => d.id === id);
    if (!currentDialogue) return;
    currentStepIndex = 0;
    
    if (menuScreen) menuScreen.classList.remove('active');
    if (exerciseScreen) exerciseScreen.classList.add('active');
    if (dialogueTitle) dialogueTitle.textContent = currentDialogue.title;
    
    if (currentDialogue.type === "order") {
        loadOrderExercise();
    } else {
        loadStep();
    }
}

function loadStep() {
    if (!feedback || !optionsArea || !promptArea) return;
    feedback.className = 'hidden';
    optionsArea.innerHTML = '';
    
    if (currentStepIndex >= currentDialogue.steps.length) {
        promptArea.innerHTML = `<h3>🎉 Bravo! Dialog abgeschlossen!</h3>`;
        return;
    }

    const step = currentDialogue.steps[currentStepIndex];
    promptArea.innerHTML = `<p><strong>${step.prompt}</strong></p>`;

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
        if (scoreDisplay) scoreDisplay.textContent = score;
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

function loadOrderExercise() {
    if (!feedback || !optionsArea || !promptArea) return;
    feedback.className = 'hidden';
    promptArea.innerHTML = `<p><strong>Bringe die Sätze in die richtige Reihenfolge (klicke nacheinander):</strong></p>`;
    optionsArea.innerHTML = '';

    const correctOrder = [...currentDialogue.sentences];
    let shuffledSentences = [...currentDialogue.sentences];
    shuffledSentences.sort(() => Math.random() - 0.5);

    let userSelection = [];

    const selectedContainer = document.createElement('div');
    selectedContainer.style.marginBottom = "1rem";
    selectedContainer.style.padding = "0.75rem";
    selectedContainer.style.background = "#fff";
    selectedContainer.style.borderRadius = "6px";
    selectedContainer.style.border = "1px dashed #2c3e50";
    selectedContainer.innerHTML = "<strong>Deine Reihenfolge:</strong> <span id='selected-list' style='color:#666;'>Noch nichts ausgewählt</span>";
    optionsArea.appendChild(selectedContainer);

    const poolContainer = document.createElement('div');
    poolContainer.className = "options-grid";
    optionsArea.appendChild(poolContainer);

    shuffledSentences.forEach(sentence => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = sentence;
        btn.addEventListener('click', () => {
            userSelection.push(sentence);
            btn.style.display = 'none';
            
            const listSpan = document.getElementById('selected-list');
            if (listSpan) {
                listSpan.innerHTML = "<br>• " + userSelection.join("<br>• ");
            }

            if (userSelection.length === correctOrder.length) {
                let isMatch = userSelection.every((val, idx) => val === correctOrder[idx]);
                if (isMatch) {
                    feedback.textContent = "🎉 Richtig! Perfekte Reihenfolge.";
                    feedback.className = "success";
                    score += 20;
                    if (scoreDisplay) scoreDisplay.textContent = score;
                } else {
                    feedback.textContent = "❌ Leider nicht ganz richtig. Geh zurück und versuche es erneut.";
                    feedback.className = "error";
                }
            }
        });
        poolContainer.appendChild(btn);
    });
}

function goHome() {
    if (exerciseScreen) exerciseScreen.classList.remove('active');
    if (menuScreen) menuScreen.classList.add('active');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}