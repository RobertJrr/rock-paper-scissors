//Rock, Paper, Scissors Game

    //total rounds
    const totalRounds = 5;

    //variable for round winner
    let roundWinner = "";

    //current score for computer and player
    let playerScore = 0;
    let computerScore = 0;

    //UI elements - get reference to html elements
    //reference for h1 of player score and element score
    const playerText = document.querySelector("#player");
    const computerText = document.querySelector("#computer");

    //reference to unordered list element, will display the choices of each player here, per round
    const ulElement = document.querySelector("#resultlist");
    //reference to h2 element, display the winner of the game
    const gameWinnerElement = document.querySelector("#gamewinner");

    //Get reference to button nodes to play each round
    const playButtons = document.querySelectorAll("button#rock, button#paper, button#scissors");
    const resetButton = document.querySelector("button#reset");


    //to hold original player and computer text content
    let playerScoreString = playerText.textContent;
    let computerScoreString = computerText.textContent;
    //initial score display, 0
    playerText.textContent = playerScoreString + playerScore;
    computerText.textContent = computerScoreString + computerScore;



//function to get computerChoice
function getComputerChoice(){
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
function playRound(playerChoice,computerChoice){

    //set to lowerCase
    playerChoice = playerChoice.toLowerCase();
    //winner String
    let winner = "";

    //to return string of winner
    if((playerChoice === "rock" && computerChoice === "scissors")||
         (playerChoice === "scissors" && computerChoice === "paper") ||
         (playerChoice === "paper" && computerChoice === "rock")){
            winner = "player";
            playerScore++
            //updating scoreboard ui
            playerText.textContent = playerScoreString + playerScore;
        }else if(playerChoice === computerChoice){
            winner = "tie";
            const newLi = document.createElement("li");
            newLi.textContent = "IT IS A TIE!"
            ulElement.appendChild(newLi);
        }else{
            winner = "computer";
            computerScore++;
            computerText.textContent = computerScoreString + computerScore;

        }
        const newLi = document.createElement("li");
        newLi.textContent = "PLAYER: " + playerChoice + " || COMPUTER: " + computerChoice;
        ulElement.appendChild(newLi);

        return winner;
}

//function to display winner within UI once totalRounds reached. LEFT HERE
function endGame(){
    if(playerScore == 5){
        gameWinnerElement.textContent = "PLAYER WINS!";
    }else if(computerScore == 5){
        gameWinnerElement.textContent = "COMPUTER WINS!";
    }
}

function playGame(){

    //add event listener for each button
    playButtons.forEach((button)=>{
        button.addEventListener("click",function(){
            //to stop the game until reset is hit!
            if(playerScore >= totalRounds || computerScore >= totalRounds){
                return;
            }
            //play game
            if(button.id === "rock"){
                playRound(button.id,getComputerChoice());
            }else if(button.id === "paper"){
                playRound(button.id,getComputerChoice());
            }else if(button.id === "scissors"){
                playRound(button.id,getComputerChoice());
            }
            if(playerScore == 5 || computerScore == 5){
                endGame();
            }
        });

    });

    //resetting the game upon click of reset button
    resetButton.addEventListener("click",()=>{
        //reset the score count
        playerScore = 0;
        computerScore = 0;
        //reset scoreboard UI
        playerText.textContent = playerScoreString + playerScore;
        computerText.textContent = computerScoreString + computerScore;
        //ref to ul element and remove all child elements
        ulElement.innerHTML = "";
        //ref to h2 element to remove text
        gameWinnerElement.innerHTML = "";
    });

}

//main function
function main(){
    playGame();
}

//call to main function, execute program
main();





