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

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        document.querySelector(".msg").textContent = "Draw, no points"
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
        document.querySelector(".msg").textContent = "Point for computer"
        computerscore++;
    }
    else {
        document.querySelector(".msg").textContent = "Point for you"
        humanscore++;
    }

    scoreContainer.children[0].textContent = humanscore;
    scoreContainer.children[2].textContent = computerscore;

    if (humanscore === 5) {
        document.querySelector(".winnername").textContent = "You"
        resetGame();
    }

    if (computerscore === 5) {
        document.querySelector(".winnername").textContent = "Computer"
        resetGame();
    }

}

//main function
function playGame() {
    scoreContainer.children[0].textContent = 0;
    scoreContainer.children[2].textContent = 0;
    console.log(humanscore);
    console.log(scoreContainer.children[0].textContent);
    document.querySelector("#again").style.display = "none"
    document.querySelector(".winnername").textContent = "???"
    container.style.opacity = "1"
    container.style.pointerEvents = "auto"
    console.log("Game has started!")
}

function resetGame() {
    humanscore = 0;
    computerscore = 0;
    container.style.opacity = "0.2"
    container.style.pointerEvents = "none"
    document.querySelector("#again").style.display = "block"

}
document.querySelector("#again").addEventListener("click", playGame);


const container = document.querySelector("#rpscontainer")
const scoreContainer = document.querySelector("#scorecontainer")
let humanscore = 0
let computerscore = 0

const rock = container.children[0];
const paper = container.children[1]
const scissors = container.children[2]

//listeners for human selection
rock.addEventListener("click", () => {
    console.log("You have played rock")
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection)
})

paper.addEventListener("click", () => {
    console.log("You have played paper")
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection)
})
scissors.addEventListener("click", () => {
    console.log("You have played scissors")
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection)
})

//Here function playGame is called to start the game
playGame();
