console.log("Hello World");

let start = prompt("Would You Like To Play A Game? (yes or no)");
function playGame(start) {
  if (start == "yes") {
    do {
      let again;
      if (again == "yes" || start == "yes") {
        let gameStart = parseInt(
          prompt(
            "Choose Difficulty (1-Easy | 2-Hard | 3-Overkill | 4-What Are You Doing To Me!?!)"
          )
        );
        switch (true) {
          case gameStart == 1:
            var rand = Math.floor(Math.random() * 10) + 1;
            alert("Guess A Number From 1-10");
            break;
          case gameStart == 2:
            var rand = Math.floor(Math.random() * 100) + 1;
            alert("Guess A Number From 1-100");
            break;
          case gameStart == 3:
            var rand = Math.floor(Math.random() * 1000) + 1;
            alert("Guess A Number From 1-1000");
            break;
          case gameStart == 4:
            var rand = Math.floor(Math.random() * 1000000000) + 1;
            alert("Guess A Number From 1-ONE BILLION!");
            break;
          default:
            alert(`Sorry ${gameStart} Is Not A Valid Difficulty`);
        }
        let guess;
        do {
          guess = parseInt(prompt("Make A Guess!"));
          if (guess < rand) {
            alert(`${guess} is too low`);
          } else if (guess > rand) {
            alert(`${guess} is too high`);
          } else {
            alert(`${guess} IS CORRECT!`);
            console.log(
              `WAY TO GO YOU GUESSED THE NUMBER ${guess} YOU ARE SO SMART!`
            );
          }
        } while (rand != guess);

        again = propmt("Would You Like To Play Again? (yes or no)");
        function playAgain(again) {
          if (again == "yes") {
            return true;
          } else {return false;
        }
        }
      }
    } while (playAgain(true));
  } else if (start != "yes") {
    alert("Thanks For Stopping By");
  }
}

playGame(start);
