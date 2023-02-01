function getComputerChoice()
{
    const value = (Math.floor(Math.random()*10000000)+1)%3;
    if(value===0)
    {
        return "Rock";
    }
    else if(value===1)
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.substring(0,1).toUpperCase()
    + playerSelection.substring(1,playerSelection.length).toLowerCase();

    if(playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors")
    {
        return "Error input by Player! Try again";
    }
    else
    {
        if(playerSelection===computerSelection)
        {
            return "The game ended even/drawn. Both of you has chosen " + computerSelection;
        }
        else
        {
            if(playerSelection==="Rock")
            {
                if(computerSelection==="Paper")
                {
                    return "You Lose! Paper beats Rock";
                }
                else
                {
                    return "You Won! Rock beats Scissors";
                }
            }
            else if(playerSelection==="Paper")
            {
                if(computerSelection==="Scissors")
                {
                    return "You Lose! Scissors beats Paper";
                }
                else
                {
                    return "You Won! Paper beats Rock"
                }
            }
            else if(playerSelection==="Scissors")
            {
                if(computerSelection==="Rock")
                {
                    return "You Lose! Rock beats Scissors";
                }
                else
                {
                    return "You Won! Scissors beats Paper"
                }
            }
        }
    }
}

let playerScore = 0;
let computerScore = 0;

function game()
{
    let playerSelection = prompt("Write either Rock, Paper, or Scissors");
    playerSelection = playerSelection.substring(0,1).toUpperCase()
    + playerSelection.substring(1,playerSelection.length).toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    return result;
}

for (let i = 0; i < 5; i++) {
    let gamePlayed = game();
    if(gamePlayed.includes("Lose"))
    {
        computerScore++;
    }
    else if(gamePlayed.includes("Won"))
    {
        playerScore++;
    }
} 
let finalResult = "The final result is " + playerScore + " : " + computerScore;
if(playerScore>computerScore)
{
    finalResult+=" You Won!"
}
else if(playerScore<computerScore)
{
    finalResult+=" You Lost!"
}
else
{
    finalResult+=" The game ended drawn!"
}
console.log(finalResult)
