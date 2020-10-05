const game = () => {
    let pScore = 0;
    let cScore = 0;

    // start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener("click", () => {
            introScreen.classList.add('fadeout');
            match.classList.add('fadein')
        });
    }


    // play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')

        const hands = document.querySelectorAll(".hands img")

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = "";
            })
        })

        // computer option
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() => {
                    // update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                    // here we call compairHands
                    compairHands(this.textContent, computerChoice);
                }, 2000)




                // Animation
                playerHand.style.animation = 'shakePlayer 2s ease'
                computerHand.style.animation = 'shakeComputer 2s ease'


            })
        })
    }


    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compairHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner')
        // check a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }

        // check for Rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins"
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }

        // check for Paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }
        }

        // check for Scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }
        }
    }


    // call all the function
    startGame();
    playMatch();

}


// start the Game function
game();