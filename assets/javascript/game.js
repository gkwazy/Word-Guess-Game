var wordOptions = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise"];
var selectedWord = "";
var lettersinWord = [];
var numbBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numbBlanks = lettersinWord.length;

    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < numbBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numbBlanks);
    console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
    alert(letter);
    var isLetterInWord = false;

    for (var i = 0; i < numbBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    if (isLetterInWord) {
        for (var i = 0; i < numbBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }

    console.log(blanksAndSuccesses);
}

function display_image(scr, width, height) {
    var img = documanet.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
}

function roundComplete() {
    console.log("Win count " + winCount + " Lost Count " + lossCount + " gussessLeft: " + guessesLeft);

    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Win");
        document.getElementById("winCounter").innerHTML = winCount;
        startGame();
    }

    else if (guessesLeft == 0) {
        lossCount++;
        alert("You lost!");
        document.getElementById("lossCounter").innerHTML = lossCount;
        startGame();
    }
}

//Main Method

startGame();

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);

}