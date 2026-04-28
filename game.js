const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors= document.querySelector('.btn-scissors');
const buttons = document.querySelectorAll('button');
const final = document.querySelector('.final');
const current = document.querySelector('.current');
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice===0)
        {return 'rock';}
    else if (choice===1)
        {return 'paper';}
    else 
        {return 'scissors';}
}


// Plays the game for a single round.
//After each round, the winner is announced.
function playRound(humanChoice, computerChoice) {
    if (humanChoice===computerChoice){
        console.log("It's a tie!");
        }
    else if ((humanChoice==='rock' && computerChoice==='paper')
            || (humanChoice==='paper' && computerChoice==='scissors')
            || (humanChoice==='scissors' && computerChoice==='rock')){
        //console.log("You lose this round.");
        computerScore++;
    }
    else {
        //console.log("You win this round.");
        humanScore++;
    }
};

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        let humanChoice = button.id;
        playRound(humanChoice, getComputerChoice());
        current.textContent = 'Current score (You/Computer): '+humanScore+'/'+computerScore;
        if (humanScore==5 || computerScore==5) {
            buttons.forEach(button => {
                button.disabled = true;
            });
            if (computerScore<5) {
                final.textContent = "YOU WIN!";
            } else if (humanScore<5 ) {
                final.textContent = "YOU LOSE!";
            } else {
                final.textContent = "IT'S A TIE!";
            }
        }
})});

