var Foundation = require('foundation-sites');

(document).ready(function () {

     var wordOptions = ["tedcruz", "gregabbott", "betoorourke", "danpatrick", "johncastro", "dennisbonnen", "willhurd"];
     var selectedWord = "";
     var lettersinWord = [];
     var numBlanks = 0;
     var blanksAndSuccesses = [];
     var wrongLetters = [];

     // game counters

     var winCount = 0;
     var lossCount = 0;
     var guessesLeft = 9;

     function startGame() {
          selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
          lettersinWord = selectedWord.split("");
          numBlanks = lettersinWord.length;

          guessesLeft = 9;
          wrongLetters = [];
          blanksAndSuccesses = [];

          // populate blank sands uccesses with right number of blanks

          for (var i = 0; i < numBlanks; i++) {
               blanksAndSuccesses.push(" _ ");
          }
          // change html to reflect change round conditions
          document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
          document.getElementById("numGuesses").innerHTML = guessesLeft;
          document.getElementById("winCounter").innerHTML = winCount;
          document.getElementById("lossCounter").innerHTML = lossCount;



          console.log(selectedWord);
          console.log(lettersinWord);
          console.log(numBlanks);
          console.log(blanksAndSuccesses);
     }

     function checkLetters(letter) {

          // check if letter exists in word
          var isLetterInWord = false;

          for (var i = 0; i < numBlanks; i++) {
               if (selectedWord[i] == letter) {
                    isLetterInWord = true;
               }
          }
          if (isLetterInWord) {
               for (var i = 0; i < numBlanks; i++) {
                    if (selectedWord[i] == letter) {
                         blanksAndSuccesses[i] = letter;
                    }
               }
          }
          else {
               wrongLetters.push(letter);
               guessesLeft--
          }

          console.log(blanksAndSuccesses);

     }
     function roundComplete() {
          console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + numGuesses);

          document.getElementById("numGuesses").innerHTML = guessesLeft;
          document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
          document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("  ");


          if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
               winCount++;
               alert("You won!");

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
     startGame();
     //functions

     document.onkeyup = function (event) {

          var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
          checkLetters(letterGuessed);
          roundComplete();

          console.log(letterGuessed);
     }
});
// main process