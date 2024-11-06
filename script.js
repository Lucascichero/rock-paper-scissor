let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
 }

 function getHumanChoice() {
    let choice = prompt('Make your choice: rock, paper, or scissors');
    choice = choice.toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt('Invalid choice. Please enter rock, paper, or scissors:').toLowerCase();
    }
    alert('You chose ' + choice + '!');
    return choice;

}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === 'rock' && computerChoice === 'scissors') 
        {console.log('you win! rock beats scissors');
    humanScore++;}
    
    else if (humanChoice === 'scissors' && computerChoice === 'paper') 
        {console.log('you win! scissors beats paper');
    humanScore++;}
    
    else if (humanChoice === 'paper' && computerChoice === 'rock') 
        {console.log('you win! paper beats rock');
    humanScore++;}
    
    else if (humanChoice === 'paper' && computerChoice === 'scissors') 
        {console.log('you lose! scissors beats paper');
    computerScore++;}
    
    else if (humanChoice === 'scissors' && computerChoice === 'rock') 
        {console.log('you lose! rock beats scissors');
    computerScore++;}
    
    else if (humanChoice === 'rock' && computerChoice === 'paper') 
        {console.log('you lose! paper beats rock');
    computerScore++;}
    
    else if (humanChoice === computerChoice)
        console.log('its a tie! both chose ' + humanChoice)
    
    return { humanScore, computerScore };


} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);

        
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

       
        playRound(humanChoice, computerChoice);

        console.log(`Your score: ${humanScore} | Computer's score: ${computerScore}\n`);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: ${humanScore} - ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins the game! Final score: ${humanScore} - ${computerScore}`);
    } else {
        console.log(`It's a tie game! Final score: ${humanScore} - ${computerScore}`);
    }
}



