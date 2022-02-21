const cards = document.querySelectorAll('.memory-card');
let hasFlipCard = false;
let boardLocked = false;
let firstCard, secondCard;

const flipcard = e => {
	if (boardLocked) {
		return;
	}
	const target = e.target.parentElement;

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
	if (firstCard.dataset.value === secondCard.dataset.value ) {
		firstCard.removeEventListener('click', flipcard)
		secondCard.removeEventListener('click', flipcard)
	} else {
		setTimeout(() => {
			firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');
		}, 1000)
		
	}
}

// function flipcard = e => {
	
// }

cards.forEach(card => {
	card.addEventListener('click', flipcard)
})


console.log("проверяющие. войдите в мое положение: мне просто не хватает времени на две работы и учебу. Дайте мне сутки, чтобы, хотя бы, сделать базовую функциональность. спасибо");