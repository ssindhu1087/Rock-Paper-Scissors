let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    // Rock Paper Scissors
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}

// draw game
const drawGame = () => {
    // console.log("game is draw!")
    msg.innerText = "Game Draw! Play Again."
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++
        userScorePara.innerText = userScore;

        // console.log("you win!")
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}.` 
        msg.style.backgroundColor = "green"
    } else {
        compScore++
        compScorePara.innerText = compScore

        // console.log("you lose!")
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}` 
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ",userChoice)

    //generate computer choice
    
    const compChoice = genCompChoice();
   
    // console.log("computer choice = ",compChoice)

    if (userChoice === compChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // Paper Scissors
            userWin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            // Rock Scissors
            userWin = compChoice === "scissors" ? false : true
        } else {
            // Rock Paper
            userWin = compChoice === "rock" ? false : true
        }
        showWinner (userWin, userChoice, compChoice)
    }
};


// All choices
choices.forEach((choice) => {
    // console.log(choice)  //individual choice div
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice is clicked", userChoice)
        playGame(userChoice);
    })
})