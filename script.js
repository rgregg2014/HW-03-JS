const capitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
const numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSpecial,
};

//DOM Elements ====================================================================
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); 

//Master Function==================================================================
function writePassword() {
  findLength();

  getRandomLower();

  getRandomUpper();

  getRandomNumber();

  getRandomSpecial();

  generatePassword();

}

//Secondary Functions==============================================================

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

function getRandomLower () {
  var lowerConfirm =confirm("Would you like to use lowercase letters?");
  if (lowerConfirm === true) {
    return lowerLetter[Math.floor(Math.random() * lowerLetter.length)];  
  }
}

function getRandomUpper () {
  var capitalConfirm = confirm("Would you like to use uppercase letters?");
  if (capitalConfirm === true) {
    return capitalLetter[Math.floor(Math.random() * capitalLetter.length)];  
  }
}

function getRandomNumber () {
  var numberConfirm = confirm("Would you like to use numbers?");
  if (numberConfirm === true) {
    return numberCharacter[Math.floor(Math.random() * numberCharacter.length)];  
  }
}

function getRandomSpecial () {
  var specialConfirm = confirm("Would you like to use special characters?");
  if (specialConfirm === true) {
    return specialCharacter[Math.floor(Math.random() * specialCharacter.length)];  
  }
}

function generatePassword (lower, upper, number, special, length) {
  //1. init pw var
  //2. filter out unselected types
  //3. loop over length call generator function for each type
  //4. add final pw var and return
  var generatedPassword = "";
  const typesCount = lower + upper + number + special;
  const typesArray = [{lower}, {upper}, {number}, {special}].filter(item => Object.values(item)[0]);
  console.log('funcName: ', funcName);

  if(typesCount === 0) {
    return '';
  }
  for (let i = 0; index < length; i+= typesCount) {
    typesArray.forEach(type =>{
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();

    });
  }
}