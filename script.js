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

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button =>
{
button.addEventListener('click', function() {
    game(button.textContent);
}
);
}
);

function game(choice)
{
    let playerSelection = choice;
    let computerSelection = getComputerChoice();

    const playerChoiceElement = document.querySelector("#player");
    const computerChoiceElement = document.querySelector("#computer");
    const resultElement = document.querySelector("#result");

    playerChoiceElement.textContent = "Player's choice: " + playerSelection;
    computerChoiceElement.textContent = "Computer's choice: " + computerSelection;
    resultElement.textContent = "The result of the round: " + playRound(playerSelection, computerSelection);

    if(resultElement.textContent.includes("Lose"))
    {
        computerScore++;
    }
    else if(resultElement.textContent.includes("Won"))
    {
        playerScore++;
    }

    const playerScoreElement = document.querySelector("#playerScore");
    const computerScoreElement = document.querySelector("#computerScore");

    playerScoreElement.textContent = "Player's score: " + playerScore;
    computerScoreElement.textContent = "Computer's choice: " + computerScore;

    const totalResultElement = document.querySelector("#totalResult");
    if(computerScore==5 || playerScore==5)
    {
        let finalResult = "The final result is " + playerScore + " : " + computerScore;

        if(playerScore>computerScore)
        {
            finalResult+=" You Won!"
        }
        else
        {
            finalResult+=" You Lost!"
        }

        totalResultElement.textContent = finalResult;

        playerScore = 0;
        computerScore = 0;

        playerScoreElement.textContent = "";
        computerScoreElement.textContent = "";
    }
    else
    {
        totalResultElement.textContent = "";
    }
}


