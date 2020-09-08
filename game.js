let SecretNumber = 4

let stringGuess = prompt ("Guess a number");
let guess = Number(stringGuess)

if (guess === SecretNumber) {
    alert ("Correct");
}
else if (guess > SecretNumber) {
    alert ("too high, guess again");
}
else {
    alert ("too low, guess again")
}