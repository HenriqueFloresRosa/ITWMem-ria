document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        { name: '🍎', img: '🍎' },
        { name: '🍌', img: '🍌' },
        { name: '🍇', img: '🍇' },
        { name: '🍓', img: '🍓' },
        { name: '🍒', img: '🍒' },
        { name: '🍉', img: '🍉' },
        { name: '🍎', img: '🍎' },
        { name: '🍌', img: '🍌' },
        { name: '🍇', img: '🍇' },
        { name: '🍓', img: '🍓' },
        { name: '🍒', img: '🍒' },
        { name: '🍉', img: '🍉' },
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const gameContainer = document.querySelector('.game-container');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        cardArray.forEach((_, index) => {
            const card = document.createElement('div');
            card.setAttribute('data-id', index);
            card.classList.add('card');
            card.addEventListener('click', flipCard);
            gameContainer.appendChild(card);
        });
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.textContent = cardArray[cardId].img;
        this.classList.add('flipped');
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card');
        const [optionOneId, optionTwoId] = cardsChosenId;
        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
            cardsWon.push(cardsChosen);
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
        } else {
            cards[optionOneId].textContent = '';
            cards[optionTwoId].textContent = '';
            cards[optionOneId].classList.remove('flipped');
            cards[optionTwoId].classList.remove('flipped');
        }
        cardsChosen = [];
        cardsChosenId = [];
        if (cardsWon.length === cardArray.length / 2) {
            alert('Parabéns! Você encontrou todos os pares!');
        }
    }

    createBoard();
});
