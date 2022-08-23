console.log("Hello World")


let rand = 7
let guess 
do {
guess = parseInt(prompt("Guess A Number"));
if (guess < rand) {
    alert(`${guess} is too low`);
} else if (guess > rand) {
   alert(`${guess} is too high`);
} else {
   alert(`${guess} IS CORRECT!`);
};
} while (rand != guess);