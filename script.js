const buttons = document.querySelectorAll(".button");
choices = ["rock", "paper", "scissor"];
let player1Score = 0;
let player2Score = 0;
let counter = 0;
rounds = 5;
const playAgain = document.querySelector(".play-again");
const you = document.querySelector(".your-choice");
const computer = document.querySelector(".computer-choice");
const roundResult = document.querySelector(".each-round");

function clicked(e) {
  if (e.textContent) {
    counter++;
    let randomChoice = choices[Math.floor(Math.random() * 3)];
    updateimage(e.id, randomChoice);
    updateScore(oneRound(e.id, randomChoice));
    if (counter >= rounds) {
      buttons.forEach((btn) => {
        btn.removeAttribute("onclick");
      });
      playAgain.style.visibility = "visible";
      if (player1Score === player2Score) {
        roundResult.textContent = "Game tied ☮";
      } else if (player1Score > player2Score) {
        roundResult.textContent = "You win against the computer 🔥🎊🎉";
      } else {
        roundResult.textContent = "Computer wins the game 🙂😞";
      }
    }
  }
}

playAgain.addEventListener("click", () => {
  resetGame();
});

function oneRound(player1Choice, computerChoice) {
  let result = who_wins(player1Choice, computerChoice);
  return result;
}

function updateScore(result) {
  if (result === 1) {
    player1Score++;
    document.querySelector(".your-score").textContent = `${player1Score}`;
  } else if (result === 2) {
    player2Score++;
    document.querySelector(".computer-score").textContent = `${player2Score}`;
  }
}

function who_wins(choice1, choice2) {
  if (choice1 === choice2) {
    roundResult.textContent = "This round is tied ☮";
    return 0;
  } else if (choice1 === "rock" && choice2 === "paper") {
    roundResult.textContent = "Computer Wins this round 😔";
    return 2;
  } else if (choice1 === "rock" && choice2 === "scissor") {
    roundResult.textContent = "You win this roound 🎉";
    return 1;
  } else if (choice1 === "paper" && choice2 === "rock") {
    roundResult.textContent = "You win this roound 🎉";
    return 1;
  } else if (choice1 === "paper" && choice2 === "scissor") {
    roundResult.textContent = "Computer Wins this round 😔";
    return 2;
  } else if (choice1 === "scissor" && choice2 === "rock") {
    roundResult.textContent = "Computer Wins this round 😔";
    return 2;
  } else if (choice1 === "scissor" && choice2 === "paper") {
    roundResult.textContent = "You win this roound 🎉";
    return 1;
  }
}

function resetGame() {
  player2Score = 0;
  player1Score = 0;
  counter = 0;
  document.querySelector(".your-score").textContent = `${player1Score}`;
  document.querySelector(".computer-score").textContent = `${player2Score}`;
  buttons.forEach((btn) => {
    btn.setAttribute("onclick", "clicked(this)");
  });
  playAgain.style.visibility = "hidden";
  you.src = "./assets/choose.svg";
  computer.src = "./assets/pc.svg";
  roundResult.textContent =
    "👉Click one of the below icons to play your first round👈";
}

function updateimage(player1, player2) {
  if (player1 === "rock") {
    you.src = "./assets/axe.svg";
  } else if (player1 === "paper") {
    you.src = "./assets/document.svg";
  } else if (player1 === "scissor") {
    you.src = "./assets/scissor.svg";
  }
  if (player2 === "rock") {
    computer.src = "./assets/axe.svg";
  } else if (player2 === "paper") {
    computer.src = "./assets/document.svg";
  } else if (player2 === "scissor") {
    computer.src = "./assets/scissor.svg";
  }
}
// document.querySelector(".game-buttons").addEventListener("click", function (e) {
//   if (e.target && e.target.id) {
//     counter++;
//     let randomChoice = choices[Math.floor(Math.random() * 3)];
//     updateScore(oneRound(e.target.id, randomChoice));
//   }
// });

// function game() {
//   buttons.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       counter++;
//       let randomChoice = choices[Math.floor(Math.random() * 3)];
//       updateScore(oneRound(e.target.id, randomChoice));
//       console.log(counter);
//     });
//   });
// }
