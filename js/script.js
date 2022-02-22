const cards = document.querySelectorAll('.memory-card');
let hasFlipCard = false;
let boardLocked = false;
let firstCard, secondCard;

let resultCard = document.querySelectorAll('.resultcard');
let valueResult = 0;

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

	// // valueResult > 8
	// const endGame = () => {
	// 	cards.forEach(card => {
	// 		card.classList.contains('click')
	// 	})
	// }
	
}

const endRound = () => {
	setTimeout(() => {
		if (valueResult == 8) {
			alert("The end game");
			// resetBoard()
			
			cards.forEach(card => {
				card.classList.remove('flip')
			})
			setTimeout(() => {
				resetGame()
			}, 500)
			// return;
		}
		}, 1000)
}

endRound()

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
	valueResult++;
	endRound()
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

const unFlipCard = () => {
	
	boardLocked = true
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
		resetBoard()
	}, 1000)

	// // valueResult > 8
	// const endGame = () => {
	// 	cards.forEach(card => {
	// 		card.classList.contains('click')
	// 	})
	// }
	// if (endGame) {
	// 	alert("The end game");
	// 	resetBoard()
	// 	resetGame()
	// }
}



// function flipcard = e => {
	
// }



const resetGame = () => {
	cards.forEach(card => {
		card.addEventListener('click', flipcard)
		const randomIndex = Math.floor(Math.random() * cards.length);
		card.style.order = randomIndex;
	})
}

resetGame()

console.log("");