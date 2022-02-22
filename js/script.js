const cards = document.querySelectorAll('.memory-card');
let hasFlipCard = false;
let boardLocked = false;
let firstCard, secondCard;

const flipcard = e => {
	if (boardLocked) {
		return;
	}
	const target = e.target.parentElement;

	if (target === firstCard) {
		return;
	}
	target.classList.add('flip');


	if(!hasFlipCard) {
		hasFlipCard = true;
		firstCard = target;
	} else {
		hasFlipCard = false;
		secondCard = target;

		checkForMatch();
	}
}

const checkForMatch = () => {
	const isEqual = firstCard.dataset.value === secondCard.dataset.value;

	isEqual ? disableCards() : unFlipCard();
	// if ( ) {
	// 	disableCards()
	// } else {
	// 	unFlipCard()		
	// }
}

const disableCards = () => {
	firstCard.removeEventListener('click', flipcard)
	secondCard.removeEventListener('click', flipcard)
}

const unFlipCard = () => {
	boardLocked = true
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
		resetBoard()
	}, 1000)
}

const resetBoard = () => {
	// spread
	// [hasFlippedCard, boardLocked] = [false, false]
	// [firstCard, secondCard] = [null, null]
	// heavy

	// double insertation
	hasFlippedCard = boardLocked = false;
	firstCard = secondCard = null;
	// 
}

// function flipcard = e => {
	
// }

cards.forEach(card => {
	card.addEventListener('click', flipcard)
	const randomIndex = Math.floor(Math.random() * cards.length);
	card.style.order = randomIndex;
})


console.log("проверяющие. войдите в мое положение: мне просто не хватает времени на две работы и учебу. Я хочу доделать свое приложение до нормального функционала. Дайте мне сутки, надеюсь, что я смогу доделать хотя бы базовый функционал. спасибо");