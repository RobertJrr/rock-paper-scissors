//Rock, Paper, Scissors Game


//psuedocode
//Player and Computer
//Create logic to get winner of round
//Scissor beats paper, paper beats rock and rock beats scissors
//Keep track of the points per player for each win
//Display the winner of total game and reset the game

///Takeaways: for a simple game like this, I could have used global variables to
//add simplicity. reducing the need for creating functions with multiple parameters
// and re-referencing elements
//Learning experience.....



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
//function to play a round
function playRound(playerChoice, computerChoice){
    //get choices
    computerChoice = getComputerChoice();

    //display selection for round
    displaySelections(playerChoice,computerChoice);

    //calling function getWinner to get winner of round
    return getWinner(playerChoice,computerChoice);
}

//display winner and update winner score
function displayAndUpdateRoundWinner(roundWinner,score,scoreText,scoreTextReference){
    const roundWinnerElem = document.querySelector("#roundwinner");
    //if score is less than 4 display round winner
    if(score < 4){
        let roundWinnerString = roundWinner + " wins this round!";
        roundWinnerElem.textContent = roundWinnerString.toUpperCase();
    }else if(score == 5){ //display GAME WINNER at 5 points
        roundWinnerElem.textContent = roundWinner.toUpperCase() + " WINS!";
    }

    
    //update score
    updateScoreText(score,scoreText,scoreTextReference);
}

//put this in updateWinnerFunction
function updateScoreText(score,scoreText,scoreTextReference){
    scoreTextReference.textContent = scoreText + score;

}


function playGame(){

    //total rounds
    const totalRounds = 5;

    //computer choice and human choice
    let playerChoice = "";
    let computerChoice = "";

    //variable for round winner
    let roundWinner = "";

    //current score for computer and player
    let playerScore = 0;
    let computerScore = 0;

    //get reference to text
    const playerText = document.querySelector("#player");
    const computerText = document.querySelector("#computer");

    //original player and computer string to hold
    let playerScoreString = playerText.textContent;
    let computerScoreString = computerText.textContent;

    //initial score display
    playerText.textContent = playerScoreString + playerScore;
    computerText.textContent = computerScoreString + computerScore;


    //Get reference to button nodes to play each round
    const playButtons = document.querySelectorAll("button#rock, button#paper, button#scissors");
    //reference to reset button
    const resetButton = document.querySelector("button#reset");

    

    //add event listener for each button
    playButtons.forEach((button)=>{
        button.addEventListener("click",function(){
            //to stop the game until reset is hit!
            if(playerScore >= totalRounds || computerScore >= totalRounds){
                return;
            }
            if(button.id === "rock"){
                playerChoice = button.id;
                roundWinner = playRound(playerChoice,computerChoice);
            }else if(button.id === "paper"){
                playerChoice = button.id;
                roundWinner = playRound(playerChoice,computerChoice);
            }else if(button.id === "scissors"){
                playerChoice = button.id;
               roundWinner = playRound(playerChoice,computerChoice);
            }
            //update winner score 
            if(roundWinner === "player"){
                playerScore++;
                //show round winner and update score text
                displayAndUpdateRoundWinner(roundWinner,playerScore,playerScoreString,playerText);
            }else if(roundWinner === "computer"){
                computerScore++;
                //update score text
                displayAndUpdateRoundWinner(roundWinner,computerScore,computerScoreString,computerText);
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
        const ulElement = document.querySelector("#resultlist");
        ulElement.innerHTML = "";

        //ref to roundwinnerwrapper element and remove child element
        const roundElement = document.querySelector("#roundwinner");
        roundElement.innerHTML = "";
    });


}

function main(){
    playGame();
}

main();





