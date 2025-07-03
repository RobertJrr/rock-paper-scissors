//function to get computerChoice
function getComputerChoice(){
    // Get numbers between 1 2 and 3
    return getChoice();
}

//function to get human choice
function getHumanChoice(){
    let choice = prompt("Enter choice: ");
    return choice;

}

//function to get choice
function getChoice(){
    // Get numbers between 1 2 and 3
    let choice = Math.floor(Math.random() * 3 + 1);
    if(choice === 1){
        return "Rock";
    }else if(choice === 2){
        return "Paper";
    }else{
        return "Scissor";
    }
}


function updateWinnerScore(score){
    return ++score;
}

function displayPoints(humanScore,computerScore){
    const p = document.querySelectorAll("p#player, p#computer");
    //updating winner score to display
    p.forEach((score)=>{
        if(score.id === "player"){
            score.textContent = "Player Score: " + humanScore;
        }else{
            score.textContent = "Computer Score: " + computerScore;
        }
    })

}

//function to play round
function playRound(humanChoice, computerChoice){


    //ensuring choices are set to lowercase
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    //creating element to display round result 
    const resultDisplay = document.createElement("p");


    //outcome string
    let roundWinner = "";
    
    switch(true){
        //cases that computer wins
        case (humanChoice === "rock" && computerChoice === "paper"):
        case (humanChoice === "scissor" && computerChoice === "rock"):
        case (humanChoice === "paper" && computerChoice === "scissor"):
            //displaying result of round
            console.log("You lost! " + computerChoice + " beats " + humanChoice);
            //setting a string for the winner
            roundWinner = "computer";
            break;
        //cases that human wins
        case (humanChoice === "paper" && computerChoice === "rock"):
        case (humanChoice === "rock" && computerChoice === "scissor"):
        case (humanChoice === "scissor" && computerChoice === "paper"):

            //displaying and updating score
            console.log("You won! " + humanChoice + " beats " + computerChoice);
            roundWinner = "human";
            break;
        default:
            console.log("Tie: " + humanChoice + " | " + computerChoice);
            roundWinner = "tie";
    }
    return roundWinner;
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    ///getting list of buttons
    const buttons = document.querySelectorAll("button");

    //calling the play game function and passing chosen button from player
    buttons.forEach((button)=>{
        button.addEventListener("click",(event)=>{

            //getting choices
            const humanChoice = button.textContent;
            const computerChoice = getComputerChoice();
            let outcome = playRound(humanChoice,computerChoice);

            //updating the winner score
            if(outcome === "human"){
                humanScore = updateWinnerScore(humanScore);
            }else if(outcome === "computer"){
                computerScore = updateWinnerScore(computerScore);
            }

            //update points here
            displayPoints(humanScore,computerScore);

            endGame(humanScore,computerScore);
            return;
        });
    });
}


function endGame(humanScore, computerScore){

    const displayWinner = document.createElement("p");

    if(humanScore == 5){
        displayWinner.textContent = "YOU WON!!!!!";
    }else if(computerScore == 5){
        displayWinner.textContent = "YOU LOST!!!!";
    }

    //appending result to end of result div
    const resultDiv = document.getElementById("results");
    resultDiv.appendChild(displayWinner);
}




function main(){
    playGame();
}

main();





