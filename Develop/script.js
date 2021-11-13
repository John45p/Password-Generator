// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(number, characters) {
  
  let totalChar = characters;
  let password = "";
//formula to get random numbers.
  for (let i = 0; i < number; i++) {
    let randomNumber = Math.floor(Math.random() * totalChar.length);
    password += totalChar[randomNumber];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  //set of strings that the generator has to run through
  var string_lower = "abcdefghijklmnopqrstuvwxyz";
  var string_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+-=?><,./;'|";

  let characters = "";
//first prompt
  let userChoice1 = window.prompt(
    "How many characters would you like your password to contain?"
  );
//second prompt asking about special characters
  let specialCharChoice = window.prompt (
    "Do you want to include special characters?"
  ); 
//third prompt asking about numeric characters
  let numericChoice = window.prompt("Do you want to numeric characters?");
  //fourth prompt asking for lowercase characters
  let lowercaseChoice = window.prompt(
    "Do you want to include lowercase characters?"
  );
  //fifth prompt asking for uppercase characters
  let uppercaseChoice = window.prompt(
    "Do you want to include uppercase characters?"
  );
//if conditions if the questions are answered with yes
  if (specialCharChoice == "yes") {
    characters += special;
  }
  if (numericChoice == "yes") {
    characters += numeric;
  }
  if (lowercaseChoice == "yes") {
    characters += string_lower;
  }
  if (uppercaseChoice == "yes") {
    characters += string_upper;
  }
//converts string into an integer
  userChoice1 = parseInt(userChoice1);
//limits the number of characters from 8-128
  if (userChoice1 < 8 || userChoice1 > 128) {
    window.alert("pick characters between 8-128 ");
    writePassword();
    //runs code
  } else {
    let password = generatePassword(userChoice1, characters);
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

