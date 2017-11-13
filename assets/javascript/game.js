var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guess = 0;
var guesses = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));

document.onkeyup = function (event) {
    var userGuess = event.key;
    alert("User guess: " + userGuess +". Was not right");
    if (userGuess === letter) {
        wins++;
        guessesLeft = 10;
        letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        displayGame();
    } else {
        if (guessesLeft > 0) {
            guessesLeft--;
            guesses += " "+userGuess;
            displayGame();
        } else {
            losses++;
            guessesLeft = 10;
            letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            displayGame();
        }
    }
}

function displayGame() {
    document.getElementById("game").innerHTML = "<h1>The Psychic Game</h1><h3>Guess what letter I'm thinking of</h3><h3>Losses: " + wins + "</h3><h3>Losses: " + losses + "</h3><h3>Guesses left: " + guessesLeft + "</h3><h3>Your guesses so far: " + guesses + "</h3>";
}