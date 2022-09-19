// Assignment code here
//global variables
var passwordInputs= []

function randomPassword() { //The function to generate a random password based on prompts given to the user

  var length = prompt("Please enter a number between 8 and 128.") //Asks user to enter a valid number for the password generator
    if (length < 8 || length > 128) {
      alert ("Please enter a number between 8 and 128.")
    }

  var lowercase = confirm ("Do you want to include lowercase letters in your password?")
    if (lowercase = true) {

    }

  var uppercase = confirm ("Do you want to include uppercase letters in your password?")
    if (uppercase = true) {

    }

  var numbers = confirm ("Do you want to include numbers in your password?")
    if (numbers = true) {

    }

  var specialcharacters = confirm ("DO you want to include special characters in your password?")
    if (specialcharacters = true) {
      
    }






}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);