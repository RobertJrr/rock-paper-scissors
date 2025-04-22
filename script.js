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

console.log(getComputerChoice());
console.log(getHumanChoice());