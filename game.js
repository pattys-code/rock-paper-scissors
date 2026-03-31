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

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?");
    return choice.toLowerCase();
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
        console.log("You lose this round.");
        computerScore++;
    }
    else {
        console.log("You win this round.");
        humanScore++;
    }
}

// Plays the game for a specified amount of rounds.
// After each round, the current winner and score are announced.
// After the rounds are done, the final winner is announced.
function playGame(rounds) {
    for (let round=1; round<rounds+1;round++) {
        console.log('ROOUND '+round);
        const humanChoice = getHumanChoice();
        const computerChoice= getComputerChoice();
        console.log('Your choice: '+humanChoice);
        console.log('Computer choice: '+computerChoice);

        playRound(humanChoice,computerChoice);
        console.log('Current score (You/Computer): '+humanScore+'/'+computerScore);
    }
    console.log('FINAL RESULT:')
    if (humanScore===computerScore){
        console.log("It's a tie!");
    }
    else if (humanScore>computerScore) {
        console.log("You win!");
    }
    else {
        console.log("You lose!");
    }
}

// Play game for 5 rounds.
playGame(5);


