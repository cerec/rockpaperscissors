//computerChoice method, returns rock paper schissors based on a random number between 0-2
function getComputerChoice() {
    let randNumber = Math.floor(Math.random() * 3)
    let choice = ""
    switch (randNumber) {
        case 0:
            choice = "rock"
            break;
        case 1:
            choice = "paper"
            break;
        case 2:
            choice = "scissors"
            break;
        default:
            break;
    }
    console.log("Computer has played " + choice)
    return choice;
}

//Function to get the user choice via prompt
function getHumanChoice() {
    let choice = ""

    let container = document.querySelector("#rpscontainer")
    let rock = container.children[0];
    let paper = container.children[1]
    let scissors = container.children[2]

    rock.addEventListener("click", () => {
        choice = "rock"
        console.log("You have played " + choice)
        return choice
    })

    paper.addEventListener("click", () => {
        choice = "paper"
        console.log("You have played " + choice)
        return choice
    })
    scissors.addEventListener("click", () => {
        choice = "scissors"
        console.log("You have played " + choice)
        return choice
    })

}

//function to return the winner of a round
function playRound(humanChoice, computerChoice) {
    let winner = ""
    if (humanChoice == computerChoice) {
        winner = "noone"
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
        winner = "computer"

    }
    else {
        winner = "human"
    }
    return winner

}

//main function
function playGame() {

    console.log("Game has started!")
    //declaration of Score variables
    let humanScore = 0
    let computerScore = 0

    //loop to play until someone obtains 5 points
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let winner = playRound(humanSelection, computerSelection)

        switch (winner) {
            case "noone":
                console.log("Draw, no points")
                break;
            case "computer":
                console.log("Computer won!")
                computerScore++;
                break
            case "human":
                console.log("You won!")
                humanScore++;
                break
            default:
                break;
        }

        console.log("Score:" + '\n' + "You: " + humanScore + '\n' + "Computer: " + computerScore)
    }
    //check for the winner using the score values
    if (humanScore > computerScore) {
        console.log("The winner is you!")
    } else if (humanScore < computerScore) {
        console.log("The winner is computer!")
    } else {
        console.log("We have a draw!")
    }

}

//Here function playGame is called to start the game
//playGame();
getHumanChoice();