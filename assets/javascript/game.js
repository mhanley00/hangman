var chosenWord = function () {
var khaledKeys = ["they", "blessed", "all the keys", "water your plants", "lion order", "live smooth", "all i do is win", "we the best"];
return khaledKeys[Math.floor(Math.random() * khaledKeys.length)];
};

// Trying to put the correct word into an array of underscores
var makeAnswerArr = function() {
    answerArr = [];
    for (var i = 0; i < word.length; i++) {
      answerArr[i] = "_";
    }
    lettersLeft = word.length;
    return answerArr;
  };

  //how to show in html how many guesses left?
  var showPlayerProgress = function() {
    alert(answerArray.join(" "));
  };
  
  //how to show this in html? instead of prompt something for input in html page
  var getGuess = function() {
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    guess = guess.toLowerCase();
    return guess;
  };
  
  var updateGameState = function(guess, word, answerArray, wrongGuesses) {
    //update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
    var correctGuess = false;
    var correctGuesses = 0;
    for (var i = 0; i < word.length; i++) {
      if (word[i] === guess && answerArray[i] === "_") {
        answerArray[i] = guess;
        correctGuesses++;
        correctGuess = true;
      } else if (word[i] === guess) {
        alert("You already guessed that letter.");
        correctGuess = true;
      }
    }
    if (!correctGuess) {
      wrongGuesses++;
    }
    var guessArray = [correctGuesses, wrongGuesses];
    return guessArray;
  };
  
  var showAnswerAndCongratulatePlayer = function(answerArray, wrongGuesses) {
  
    //use alert to show the answer and congratulate the player
    if (wrongGuesses === 10) {
      alert("Game Over");
    } else {
      alert(answerArray.join(" "));
      alert("Good job! The answer was " + word);
    }
  };
  
  //write your functions here
  
  var word = pickWord();
  var answerArray = setupAnswerArray(word);
  var remainingLetters = word.length;
  var wrongGuesses = 0;
  
  while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
      break;
    // } else if (guess.length !== 1) {
    //   alert("Please enter a single letter.")
    } else {
      var guessArray = updateGameState(guess, word, answerArray, wrongGuesses);
      var correctGuesses = guessArray[0];
      var wrongGuesses = guessArray[1];
      remainingLetters -= correctGuesses;
    }
    if (wrongGuesses > 10) {
      break;
    }
  }
  
  showAnswerAndCongratulatePlayer(answerArray, wrongGuesses);

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guesses = 10;
var winCount = 0;
var lossCount = 0;
var userGuesses = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
// Determines which key was pressed.
    var userGuess = event.key;



// var userBands = prompt("Do you have all the keys?").toLowerCase();
//     if (favoriteBands.indexOf(userBands) == -1) {
//     alert("Nah. They're pretty lame.");
// }
// else {
//     alert("YEAH I LOVE THEM!");
// }

// for reference:
//     var likeSteak = confirm("Do you like steak?");
//     var ofAge = prompt("How old are you?");

//     if (likeSteak) {
//         alert("Here's a steak sandwich");
//     }

//     else {
//         alert("Here's a Tofu Stir-Fry");
//     }

//     if (ofAge >= 21) {
//         alert("Kampai");
//     }

//     else {
//         alert("No Sake for you!");

//     }