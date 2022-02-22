const cards = document.querySelectorAll('.memory-card');
let hasFlipCard = false;
let boardLocked = false;
let firstCard, secondCard;

let resultCard = document.querySelectorAll('.resultcard');
let stepDiv = document.querySelectorAll('.step');
let step = 0;
let valueResult = 0;

let score_audio = new Audio();
score_audio.src = 'audio/score.mp3'

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

let k = 0,
		final = [];
const endRound = () => {
	setTimeout(() => {
		if (valueResult == 8) {
			score_audio.play();
			alert("The end game");
			// resetBoard()
			
			cards.forEach(card => {
				card.classList.remove('flip')
			})
			setTimeout(() => {
				resetGame()
			}, 500)
			// stepDiv.innerHTML = step;
			
			final[k] = step;
			localStorage.setItem(`${k}`, final[k]);
			k++;
			for(let i = 0; i < 5; i++) {
				if (final[i]) {
					stepDiv[i].innerHTML = final[i];
				}

        // step[i] = localStorage.getItem(`${i}`, step);
        
        // console.log(final[i]);
        // console.log(statresult1[i-1]);
    }
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
	step++;
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
}



// function flipcard = e => {
	
// }



const resetGame = () => {
	step = 0;
	cards.forEach(card => {
		card.addEventListener('click', flipcard)
		const randomIndex = Math.floor(Math.random() * cards.length);
		card.style.order = randomIndex;
	})
}

resetGame()

console.log("");