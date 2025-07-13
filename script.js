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

//function to play round
function getWinner(playerChoice,computerChoice){

    //set to lowerCase
    playerChoice = playerChoice.toLowerCase();

    //to return string of winner
    if((playerChoice === "rock" && computerChoice === "scissors")||
         (playerChoice === "scissors" && computerChoice === "paper") ||
         (playerChoice === "paper" && computerChoice === "rock")){
            return "player";
        }else if(playerChoice === computerChoice){
            return "tie";
        }else{
            return "computer";
        }
}

function displaySelections(playerChoice,computerChoice){
    const roundResultList = document.querySelector("#resultlist");
    const newLi = document.createElement("li");

    //appending li for player
    newLi.textContent = "Player Choice: " + playerChoice + " | Computer Choice: " + computerChoice;
    roundResultList.appendChild(newLi);

}

//left here, add some functionality to display the choices selected per round
function playRound(playerChoice, computerChoice){
    playerChoice = getChoice();
    computerChoice = getComputerChoice();
    //display selection for round
    displaySelections(playerChoice,computerChoice);

    //calling function getWinner to get winner of round
    return getWinner(playerChoice,computerChoice);

}


//update score for winner 
function updateAndDisplayRoundWinner(roundWinner){

}


function playGame(){


    //computer choice and human choice
    let playerChoice = "";
    let computerChoice = "";

    //variable for round winner
    let roundWinner = "default";

    //number of rounds to win
    const roundsToWin = 5;

    //current score for computer and player
    let playerScore = 0;
    let computerScore = 0;

    //get reference to text
    const playerText = document.querySelector("#player");
    const computerText = document.querySelector("#computer");

    //Get reference to button nodes to play each round
    const playButtons = document.querySelectorAll("button#rock, button#paper, button#scissors");
    //reference to reset button
    const resetButton = document.querySelector("button#reset");

    //maintaining initial score text
    let initialPlayerText = playerText.textContent;
    let initialComputerText = computerText.textContent;
    //setting initial score to the player and computer text
    playerText.textContent = initialPlayerText + playerScore;
    computerText.textContent = initialComputerText + computerScore;




    //add event listener for each button
    playButtons.forEach((button)=>{
        button.addEventListener("click",function(){
            if(button.id === "rock"){
                roundWinner = playRound(playerChoice,computerChoice);
            }else if(button.id === "paper"){
                roundWinner = playRound(playerChoice,computerChoice);
            }else if(button.id === "scissors"){
               roundWinner = playRound(playerChoice,computerChoice);
            }
            //update winner score 
            if(roundWinner === "player"){
                playerScore++;
                //update score text (DO THIS NEXT)
            }else if(roundWinner === "computer"){
                computerScore++;
                //update score text 
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





