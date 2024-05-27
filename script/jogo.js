document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
    let shuffledCards = [];
    const gameBoard = document.getElementById('gameBoard');
    let firstCard = null;
    let secondCard = null;
    let flippedCards = 0;
    let timerElement = document.getElementById('timer');
    let time = 0;
    let timer;
    const startButton = document.getElementById('startButton');
    const resetButton = document.getElementById('resetButton');

    // Function to start the timer
    function startTimer() {
        timer = setInterval(() => {
            time++;
            timerElement.textContent = `Tempo: ${time}s`;
        }, 1000);
    }

    // Function to stop the timer
    function stopTimer() {
        clearInterval(timer);
    }

    // Function to reset the game
    function resetGame() {
        stopTimer();
        time = 0;
        timerElement.textContent = 'Tempo: 0s';
        gameBoard.innerHTML = '';
        shuffledCards = cardsArray.sort(() => 0.5 - Math.random());
        shuffledCards.forEach(createCard);
        flippedCards = 0;
        firstCard = null;
        secondCard = null;
    }

    // Function to start the game
    function startGame() {
        resetGame();
        startTimer();
    }

    // Function to create a card element
    function createCard(letter) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.letter = letter;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    }

    // Function to handle card flip
    function flipCard() {
        if (this.classList.contains('flipped') || !timer) return;

        this.textContent = this.dataset.letter;
        this.classList.add('flipped');

        if (!firstCard) {
            firstCard = this;
        } else {
            secondCard = this;
            checkMatch();
        }
    }

    // Function to check if two cards match
    function checkMatch() {
        if (firstCard.dataset.letter === secondCard.dataset.letter) {
            flippedCards += 2;
            firstCard = null;
            secondCard = null;

            if (flippedCards === shuffledCards.length) {
                stopTimer();
                setTimeout(() => {
                    alert(`Parabéns! Você completou o jogo em ${time} segundos!`);
                }, 500);
            }
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                firstCard.textContent = '';
                secondCard.classList.remove('flipped');
                secondCard.textContent = '';
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    }

    // Event listeners for buttons
    startButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', resetGame);

    // Adicionar evento para o botão "MainMenu"
    const mainMenuButton = document.getElementById('mainMenuButton');
    mainMenuButton.addEventListener('click', () => {
        window.location.href = "MainMenu.html"; // Redirecionar para a página do menu principal
    });
});

