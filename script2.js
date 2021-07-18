// Pseudocode =====================================================================

/*  1.) User clicks generate password button
      -This code was already provided. It's the event listener
    2.) User is prompted to enter how many characters in the password.
      -password must be 8-128 characters
      -prompt must validate and ask user to correct on invalid entry
    3.) User is asked to confirm use of uppercase letters
      -confirm message must return a true or false value
    4.) User is asked to confirm use of lowercase letters
      -confirm message must return a true or false value
    5.) User is asked to confirm use of numbers
      -confirm message must return true or false value
    6.) User is asked to confirm use of special characters
      -confirm message must return a true or false value
    7.) User is presented with randomly generated password in a textbox
      -password must be the length entered by the user
      -password must contain all character types validated by the user
      -password must be randomized from the randomized character types
*/
// Global Variables ===============================================================

var capitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); 

// Master Function ================================================================

function writePassword () {

// Prompts user to enter how many characters in the password and stores value
var passLength = findLength ();

// User is asked to confirm use of uppercase letters
var capCase = getRandomUpper();

// User is asked to confirm use of lowercase letters
var lowCase = getRandomLower ();

// User is asked to confirm use of numbers
var numChar = getRandomNumber ();

// User is asked to confirm use of special characters
var specChar = getRandomSpecial ();

// Password is generated using characters specified by user
var password = generatePassword (passLength, capCase, lowCase, numChar, specChar);
console.log(password);
alert(`Your password is: ${password}`);
}


// Secondary Functions ============================================================

// Prompts user to enter how many characters in the password and stores value
function findLength () {
  
  var charLength = prompt("Please enter the number of characters (8-128): ");
  if (charLength < 8) {
    alert("Password must be at least 8 characters.");
    findLength();
  }
  else if (charLength > 128) {
    alert("Password must be less than 128 characters.");
    findLength();

  } else {
    return +charLength
  }
}

// User is asked to confirm use of uppercase letters
function getRandomUpper () {
  var capitalConfirm = confirm("Would you like to use capital letters?");
  if (capitalConfirm === false) {
    capitalLetter = [];
  }
  return capitalLetter
}

// User is asked to confirm use of lowercase letters
function getRandomLower () {
  var lowerConfirm = confirm("Would you like to use lower case letters?");
  if (lowerConfirm === false) {
    lowerLetter = [];
  }
  return lowerLetter
}

// User is asked to confirm use of numbers
function getRandomNumber () {
  var numberConfirm = confirm("Would you like to use numbers?");
  if (numberConfirm === false) {
    numberCharacter = [];
  }
  return numberCharacter
}

// User is asked to confirm use of special characters
function getRandomSpecial () {
  var specialConfirm = confirm("Would you like to use special characters?");
  if (specialConfirm === false) {
    specialCharacter = [];
  }
  return specialCharacter
}

// Password is generated using characters specified by user
function generatePassword (passlength, upper, lower, number, special) {
  //if the variables associated with the parameters are true, add those arrays to the function. if not, skip
  //concat the selected arrays, put a randomizer function in a loop for the length in findLegth
  var generatedPassword = upper.concat(lower, number, special);
  var string = '';
  for (let index = 0; index < passlength; index++) {
    string += (generatedPassword[Math.floor(Math.random() * generatedPassword.length)]);
  }
  return string;
}
























