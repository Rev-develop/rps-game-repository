let win=0;
let lose=0;
let tie=0;
    function play(userChoice) {
      let computerChoice;
      let rand = Math.random();

      if (rand >= 0 && rand < 0.33) {
  computerChoice = 'rock';
} else if (rand >= 0.33 && rand < 0.66) {
  computerChoice = 'paper';
} else {
  computerChoice = 'scissors';
}

      document.getElementById("user").innerText = "You chose: " + userChoice;
      document.getElementById("computer").innerText = "Computer chose: " + computerChoice;

      let result = "";

      if (userChoice === computerChoice) {
        result = "It's a draw.";
        tie++;
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        result = "You win!"; 
        win++;
      } else {
        result = "You lose!";
        lose++;
      }

      document.getElementById("result").innerText = `Result ${result} 
          wins: ${win} lose: ${lose} tie: ${tie}`;
    }
