console.log("Hello World")


let gameStart = parseInt(prompt("Choose Difficulty (1-Easy|2-Hard|3-Overkill"));
switch (true) {
    case go == 1: 
        var rand = Math.floor(Math.random() * 10) +1;
        break;
        case go == 2:
            var rand = Math.floor(Math.random() * 100) +1;
            break;
            case go == 3:
            var rand = Math.floor(Math.random() * 1000) +1;
            break;
            default:
                alert(`Sorry ${go} Is Not A Valid Difficulty`);
};
let guess 
do {
guess = parseInt(prompt("Guess A Number"));
if (guess < rand) {
    alert(`${guess} is too low`);
} else if (guess > rand) {
   alert(`${guess} is too high`);
} else {
   alert(`${guess} IS CORRECT!`);
   console.log(`WAY TO GO YOU GUESSED THE NUMBER ${guess} YOU ARE SO SMART!`)
};
} while (rand != guess);