let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        tie: 0,
      };

      updateScore();

      function play(userMove) {
        const randomNum = Math.random();
        let botMove;
        if (randomNum >= 0 && randomNum < 1 / 3) {
          botMove = "rock";
        } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
          botMove = "paper";
        } else {
          botMove = "scissors";
        }

        let result = "";

        if (userMove === botMove) {
          result = "This is a tie";
        } else if (userMove === "rock" && botMove === "scissors") {
          result = "You win";
        } else if (userMove === "paper" && botMove === "rock") {
          result = "You win";
        } else if (userMove === "scissors" && botMove === "paper") {
          result = "You win";
        } else {
          result = "You lose";
        }

        if (result === "You win") {
          score.wins += 1;
        } else if (result === "You lose") {
          score.losses += 1;
        } else {
          score.tie += 1;
        }

        localStorage.setItem("score", JSON.stringify(score));

        document.querySelector(".js-result").innerHTML = `Result = ${result}`;

        document.querySelector(".js-moves").innerHTML = `You
      <img src="images/${userMove}-emoji.png" class="move-icon" />
      <img src="images/${botMove}-emoji.png" class="move-icon" />
      Computer`;

        updateScore();

        //   alert(`Your move = ${userMove}, Bot move = ${botMove}
        // Result = ${result}\n score : wins = ${score.wins} losses = ${score.losses} tie = ${score.tie}`);
      }

      function updateScore() {
        document.querySelector(
          ".js-score"
        ).innerHTML = `wins = ${score.wins} losses = ${score.losses} tie = ${score.tie}`;
      }

      function resetScore(){
        score.wins = 0
    score.losses = 0
    score.tie = 0
    localStorage.removeItem('score');
    updateScore();
    alert('Score is reset')
    }