//function to get computerChoice
function getComputerChoice(){
    // Get numbers between 1 2 and 3
    return getChoice();
}

//function to get human choice
function getHumanChoice(){
    let choice = prompt("Enter choice");
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

//function to play round
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    switch(true){
        //cases that computer wins
        case (humanChoice === "rock" && computerChoice === "paper"):
        case (humanChoice === "scissor" && computerChoice === "rock"):
        case (humanChoice === "paper" && computerChoice === "scissor"):
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            break;
        //cases that human wins
        case (humanChoice === "paper" && computerChoice === "rock"):
        case (humanChoice === "rock" && computerChoice === "scissor"):
        case (humanChoice === "scissor" && computerChoice === "paper"):
            console.log("You Win! " + humanChoice + " beats " + computerChoice);
            break;
        default:
            console.log("Tie: " + humanChoice + " | " + computerChoice);
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice,computerChoice);
}

for(let i = 1; i <= 5; i++){
    playGame();
}

