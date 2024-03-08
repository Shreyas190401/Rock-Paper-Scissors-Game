let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgContainer = document.querySelector(".msg_container");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const drawGame = () => {
    msgContainer.innerText = "Game is Draw. Play again";
    msgContainer.style.backgroundColor = "grey";
};

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msgContainer.innerText = `You Win!!! Your ${userChoice} beats ${compChoice}`;
        msgContainer.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msgContainer.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msgContainer.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
