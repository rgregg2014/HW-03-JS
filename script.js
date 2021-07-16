// Assignment Code
var capitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var generateBtn = document.querySelector("#generate");

console.log(capitalLetter);
console.log(lowerLetter);
console.log(number);
console.log(specialCharacter);

//Prompt, determines length of password needed
var characterLength = prompt("Please enter the number of characters (8-128):");
if (characterLength.toLowerCase() < 8){
  alert("Password must be at least 8 characters. Please refresh the page and try again")
}
else if (characterLength.toLowerCase() > 128) {
  alert("Password must be less than 128 characters. Please refresh the page and try again.")
} 
else (characterLength.toLowerCase()); {
  console.log(characterLength);
}

//Does an if/else statement have to have an else? Because I don't need this to do anything but move on if someone clicks cancel.
//Confirmation, determines in capital letters will be used
var characterUpper = confirm("Would you like to use upper case letters? ex: A, B, C?");
if (characterUpper === true) {
  console.log(characterUpper);
  //shuffle var capitalLetter, pull random values
}
else (characterUpper === false); {
  console.log(characterUpper);
}


//Confirmation, determines if lower case letters will be used
var characterLower = confirm("Would you like to use lower case letters? ex: a, b, c?");
if (characterLower === true) {
  console.log(characterLower);
  //shuffle var lowerLetter, pull random values
}
else (characterLower === false); {
  console.log(characterLower);
}

//Confirmation, determines if numbers will be used
var characterNumber = confirm("Would you like to use numbers?");
if (characterNumber === true) {
  console.log(characterNumber);
  //shuffle var number, pull random values
}
else (characterNumber === false); {
  console.log(characterNumber);
}

//Confirmation, determines if special characters will be used
var characterSpecial = confirm("Would you like to use special characters? ex: '!', '#', '$'?");
if (characterSpecial === true) {
  console.log(characterSpecial);
  //shuffle var number, pull random values
}
else (characterSpecial === false); {
  console.log(characterSpecial);
}

//Function, concatenates password from shuffled arrays determined above
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Event listener, displays password on button click
generateBtn.addEventListener("click", writePassword); 


  //move into uppercase confirmation
  //store confirmation answer
  //move into lowercase confirmation
  //store lowercase answer
  //move into number confirmation
  //store number answer
  //move into characters confirmation
  //store characters answer
  //open arrays of stored confirmation answers
  //pull out random array items
  //using the stored prompt answer, generate a random password
  //store random password
  //display password on button click event listener

