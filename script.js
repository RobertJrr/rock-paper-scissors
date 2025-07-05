//Rock, Paper, Scissors Game
//Player and Computer

//Create logic to get winner of round
//Scissor beats paper, paper beats rock and rock beats scissors

//Keep track of the points per player for each win

//Display the winner of total game and reset the game



//function to get computerChoice
function getComputerChoice(){
    // Get numbers between 1 2 and 3
    return getChoice();
}

//function to get choice
function getChoice(){
    // Get numbers between 1 2 and 3
    let choice = Math.floor(Math.random() * 3 + 1);
    if(choice === 1){
        return "rock";
    }else if(choice === 2){
        return "paper";
    }else{
        return "scissors";
    }
}

//function to display who wins the round
function disgetWinnerWinner(roundWinner,playerChoice,computerChoice,roundArray){
    const roundText = document.createElement("h1");
    const divRoundResult = document.querySelector("#roundresult");

    if(roundWinner === "tie"){
        roundText.textContent = "ITS A TIE!";
        divRoundResult.appendChild(roundText);
        setTimeout(function(){
            roundText.remove();
        },2000);
        return;
    }
   
    roundText.textContent = "Player: " + playerChoice + " | Computer: " + computerChoice;
    divRoundResult.appendChild(roundText);

     setTimeout(function(){
            roundText.remove();
    },2000);

}


//function to play round
function getWinner(playerChoice,computerChoice){

    //set to lowerCase
    playerChoice = playerChoice.toLowerCase();

    //to return string of winner
    if((playerChoice === "rock" && computerChoice === "scissors")||
         (playerChoice === "scissors" && computerChoice === "paper") ||
         (playerChoice === "rock" && computerChoice === "paper")){
            return "player";
        }else if(playerChoice === computerChoice){
            return "tie";
        }else{
            return "computer";
        }
}

function final(winner,gameWinnertext){
    //create winning text
    gameWinnertext.textContent = winner + " WINS! Press reset to play again!";
    const finalElem = document.querySelector("#final");
    finalElem.appendChild(gameWinnertext);

    setTimeout(function(){
        gameWinnertext.remove();
    },4000);


}

function playGame(){

    //number of rounds to win
    const roundsToWin = 5;

    //current score for computer and player
    let playerScore = 0;
    let computerScore = 0;

    //get reference to text
    const playerText = document.querySelector("#player");
    const computerText = document.querySelector("#computer");

    //maintaining initial score text
    let initialPlayerText = playerText.textContent;
    let initialComputerText = computerText.textContent;

    //setting initial score to the player and computer text
    playerText.textContent = initialPlayerText + playerScore;
    computerText.textContent = initialComputerText + computerScore;

    //Get reference to button nodes to play each round
    const playButtons = document.querySelectorAll("button#rock, button#paper, button#scissors");

    //reference to reset button
    const resetButton = document.querySelector("button#reset");

    //display winner
    const gameWinnertext = document.createElement("h2");


    //event listener for buttons being clicked
    playButtons.forEach((button)=>{
        button.addEventListener("click",()=>{
            //Getting choices for player and human
            let playerChoice = button.textContent;
            let computerChoice = getComputerChoice();
            //playing round based on choices
            let roundWinner = getWinner(playerChoice,computerChoice);

            //update score for round winner
            if(roundWinner === "player" && playerScore < roundsToWin){
                playerScore++;
                playerText.textContent = initialPlayerText + playerScore;
                disgetWinnerWinner(roundWinner,playerChoice,computerChoice);
            }else if(roundWinner === "computer" & computerScore < roundsToWin){
                computerScore++;
                computerText.textContent = initialComputerText + computerScore;
                disgetWinnerWinner(roundWinner,playerChoice,computerChoice);
            }else{
                disgetWinnerWinner(roundWinner,playerChoice,computerChoice);
            }
            //display game winner
            if(playerScore == roundsToWin){
                final(roundWinner,gameWinnertext);
            }else if(computerScore == roundsToWin){
                final(roundWinner,gameWinnertext);
            }
        });
    });
    
    //resetting the game upon click of reset button
    resetButton.addEventListener("click",()=>{
        playerScore = 0;
        computerScore = 0;

        playerText.textContent = initialPlayerText + playerScore;
        computerText.textContent = initialComputerText + computerScore;
    });


}

function main(){
    playGame();
}

main();





