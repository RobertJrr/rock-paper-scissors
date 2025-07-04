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

//function to get human choice
function getplayerChoice(){
    let choice = prompt("Enter choice: ");
    return choice;

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
function playRound(playerChoice,computerChoice){

    //set to lowerCase
    playerChoice = playerChoice.toLowerCase();

    //text for roundWinner to return from function 
    let roundWinner = "";
    //text to display winner of round
    let roundText = "";


    switch(true){
        //cases that computer wins
        case (playerChoice === "rock" && computerChoice === "paper"):
        case (playerChoice === "scissors" && computerChoice === "rock"):
        case (playerChoice === "paper" && computerChoice === "scissors"):
            //displaying result of round
            roundWinner = "computer";
            roundText = "LOSER! " + "Player: " + playerChoice + " | Computer: " + computerChoice;
            displayRoundWinner(roundText);
            break;
        //cases that player wins
        case (playerChoice === "paper" && computerChoice === "rock"):
        case (playerChoice === "rock" && computerChoice === "scissors"):
        case (playerChoice === "scissors" && computerChoice === "paper"):
            ////displaying result of round
            roundWinner = "player"
            roundText = "WINNER! " + "Player: " + playerChoice + " | Computer: " + computerChoice;
            displayRoundWinner(roundText);
            break;
        default:
            //displaying result of round
            roundText = "TIE! " + "Player: " + playerChoice + " | Computer: " + computerChoice;
            displayRoundWinner(roundText);
    }
    return roundWinner;
}

function playGame(){

    const totalrounds = 5;
    let playerScore = 0;
    let computerScore = 0;

    //Get reference to button nodes to play each round
    const playButtons = document.querySelectorAll("button");

    //Get reference to the result text
    const playerResultElement = document.querySelector("#player");
    const computerResultElement = document.querySelector("#computer");

    //maintain original text of results
    const originPlayerText = playerResultElement.textContent;
    const originComputerText = computerResultElement.textContent;

    //element to be created and append when there is a winner
    const winnerText = document.createElement("p");

    //event listener for buttons being clicked
    playButtons.forEach((button)=>{
        button.addEventListener("click",()=>{
            //Getting choices for player and human
            let playerChoice = button.textContent;
            let computerChoice = getComputerChoice();
            //playing round
            let roundWinner = playRound(playerChoice,computerChoice);
            
            //update score of round winner winner
            if(roundWinner === "player"){
                playerScore++;
                updateResults(playerResultElement, originPlayerText,playerScore);
            }else if(roundWinner === "computer"){
                computerScore++;
                updateResults(computerResultElement,originComputerText,computerScore);
            }

            //if one of players hits 5 points, display the GAME WINNER
            //maybe add this outside this event handler and listener
            
            //reset the score
            if(playerScore > totalrounds || computerScore > totalrounds){
                updateResults(playerResultElement,originPlayerText,0);
                updateResults(computerResultElement,originComputerText,0);
            }

        });
    });

}

function displayRoundWinner(roundText){
    //create element and display
    const pText = document.createElement("p");
    //get reference to a div
    const divResult = document.querySelector("#results");
    pText.textContent = roundText
    divResult.appendChild(pText);

    //remove element after 5000 milliseconds
    setTimeout(function(){
        pText.remove();
    },3000);
}


function updateResults(resultElement, originText,score){
    resultElement.textContent = originText + score;

}

function main(){
    playGame();
}

main();





