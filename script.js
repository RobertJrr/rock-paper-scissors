//Rock, Paper, Scissors Game

    //total rounds
    const totalRounds = 5;

    //variable for round winner
    let roundWinner = "";

    //current score for computer and player
    let playerScore = 0;
    let computerScore = 0;

    //UI elements
    //get reference to text
    const playerText = document.querySelector("#player");
    const computerText = document.querySelector("#computer");
    const roundWinnerElement = document.querySelector("#roundwinner");
    const ulElement = document.querySelector("#resultlist");
    const roundElement = document.querySelector("#roundwinner");
    //Get reference to button nodes to play each round
    const playButtons = document.querySelectorAll("button#rock, button#paper, button#scissors");
    const resetButton = document.querySelector("button#reset");


    //original player and computer string to hold
    let playerScoreString = playerText.textContent;
    let computerScoreString = computerText.textContent;
    //initial score display
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
        }
        const newLi = document.createElement("li");
            newLi.textContent = "PLAYER: " + playerChoice + " || COMPUTER: " + computerChoice;
            ulElement.appendChild(newLi);
            //updating scoreboard ui
            computerText.textContent = computerScoreString + computerScore;

        return winner;
}

//function to display winner within UI once totalRounds reached. LEFT HERE
function endGame(){

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
                roundWinner = playRound(button.id,getComputerChoice());
            }else if(button.id === "paper"){
                roundWinner = playRound(button.id,getComputerChoice());
            }else if(button.id === "scissors"){
                roundWinner = playRound(button.id,getComputerChoice());
            }
        });

    });

    //resetting the game upon click of reset button
    resetButton.addEventListener("click",()=>{
        playerScore = 0;
        computerScore = 0;
        playerText.textContent = playerScoreString + playerScore;
        computerText.textContent = computerScoreString + computerScore;

        //ref to ul element and remove all child elements
        ulElement.innerHTML = "";
        //ref to roundwinnerwrapper element and remove child element
        roundElement.innerHTML = "";
    });

}

function main(){
    playGame();
}

main();





