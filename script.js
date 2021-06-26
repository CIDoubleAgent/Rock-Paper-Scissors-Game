let wins = 0;
let ties = 0;
let losses = 0;

let options = ["R", "P", "S"]

let playGame = function() {
    let userChoice = window.prompt("Enter R, P, or S:");

    if (!userChoice) {
        return;
    }

    let index = math.floor(math.random() * options.length);
    let computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);

    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");

    } else if (
        (userChoice === "R" && computerChoice === "S") || 
        (userChoice === "P" && computerChoice === "R") || 
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You win!");
    } else {
        losses++;
        window.alert("You lost!");
    }

    window.alert(
        "Status:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    let playAgain = window.confirm("Play Again?")

    if (playAgain) {
        playGame();
    }
};

playGame();

