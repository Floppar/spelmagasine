const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    const playGame = () => {
        const steinBtn = document.querySelector('.stein');
        const papirBtn = document.querySelector('.papir');
        const saksBtn = document.querySelector('.saks');
        const playerOptions = [steinBtn, papirBtn, saksBtn];
        const computerOptions = ['stein', 'papir', 'saks']

        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const valigjen = document.querySelector('.valigjen');
                moves++;
                valigjen.innerText = `Vel igjen: ${10 - moves}`;


                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText, computerChoice)

                if (moves == 10) {
                    spelOver(playerOptions, valigjen);
                }
            })
        })

    }

    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = 'Uavgjort'
        }
        else if (player == 'stein') {
            if (computer == 'papir') {
                result.textContent = 'RNG vant';
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            } else {
                result.textContent = 'Du vant'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'saks') {
            if (computer == 'stein') {
                result.textContent = 'RNG vant';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Du vant';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'papir') {
            if (computer == 'saks') {
                result.textContent = 'RNG vant';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Du vant';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    const spelOver = (playerOptions, valigjen) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })


        chooseMove.innerText = 'Ferdig!!'
        valigjen.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'Du vant'
            result.style.color = '#308D46';
            result.style.background = 'beige';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
            result.style.border = 'solid 2px black';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'Du tapte';
            result.style.color = 'red';
            result.style.background = 'beige';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
            result.style.border = 'solid 2px black';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Uavgjort';
            result.style.color = 'orange'
            result.style.background = 'grey';
            result.style.padding = '10px';
            result.style.borderRadius = '10px';
            result.style.border = 'solid 2px black';
        }
        reloadBtn.innerText = 'Prøv igjen?';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }


    playGame();

}

game();