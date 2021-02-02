// Fisrt create a single round of game.
// 1 -> Rock,  2-> paper, 3-> scissor
// ask the player1 for their choice
// generate a random number for the computer
// Rock beats scissor,  scissor beats paper,  paper beats rock
//  create a new function for playing the game for multiple rounds
const oneRound = () => {
  let player1Choice = parseInt(
    prompt("Enter your Choice : 1 -> Rock, 2 -> Paper, 3 -> Scissor")
  );
  let player2Choice = computer_choice();
  let result = who_wins(player1Choice, player2Choice);
  return result;
};
function computer_choice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  return computerChoice;
}
function who_wins(number1, number2) {
  if (number1 === number2) {
    return 0;
  } else if (number1 === 1 && number2 === 2) {
    return 2;
  } else if (number1 === 1 && number2 === 3) {
    return 1;
  } else if (number1 === 2 && number2 === 1) {
    return 1;
  } else if (number1 === 2 && number2 === 3) {
    return 2;
  } else if (number1 === 3 && number2 === 1) {
    return 2;
  } else if (number1 === 3 && number2 === 2) {
    return 1;
  }
}
function game() {
  let player1Score = 0;
  let player2Score = 0;
  const rounds = parseInt(prompt("How many rounds do you wanna play?:"));
  console.log(`The game is of ${rounds} rounds`);
  for (let i = 1; i <= rounds; i++) {
    let eachRoundResult = oneRound();
    if (eachRoundResult === 1) {
      player1Score++;
      console.log(
        `${i} round : You win \n Your score : ${player1Score} \n Computer's Score : ${player2Score}`
      );
    } else if (eachRoundResult === 2) {
      player2Score++;
      console.log(
        `${i} round : Computer Wins \n Your score : ${player1Score} \n Computer's Score : ${player2Score}`
      );
    }
  }
  if (player1Score === player2Score) {
    console.log("Game Tied");
  } else if (player1Score > player2Score) {
    console.log("You Win");
  } else {
    console.log("Computer Wins");
  }
}
game();
