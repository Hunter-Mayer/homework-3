// Assignment code here
//global variables
var passwordInputs= [] //sets up array of inputs
var lowercaseCharacters= "abcdefghiklmnopqrsttuvwxtz" //lowercase options
var uppercaseCharacters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //uppercase options
var numberCharacters= "0123456789" //number options
var specialCharacters2= "!@#$%^&*" //special character options
var randomPassword= "" //for returning the random password at the end of the function

function generatePassword() { //The function to generate a random password based on prompts given to the user

  var length = prompt("Please enter a number between 8 and 128.") //Asks user to enter a valid number for the password generator
    if (length < 8 || length > 128) {
      alert("Incorrect, please enter a number between 8 and 128.")
      return;
    } 

  var lowercase = confirm ("Do you want to include lowercase letters in your password?")
    if (lowercase === true) {
      for (var i=0; i<lowercaseCharacters.length; i++){ //for loop that will use the push method to add the lowercase letters into the passwordInput array using the previously input length variable from the prompt. Copied to each other scenario with variables changed. 
        passwordInputs.push(lowercaseCharacters[i]) 
      }
    }

  var uppercase = confirm ("Do you want to include uppercase letters in your password?")
    if (uppercase === true) {
      for (var i=0; i<uppercaseCharacters.length; i++){ 
        passwordInputs.push(uppercaseCharacters[i]) 
      }
    }

  var numbers = confirm ("Do you want to include numbers in your password?")
    if (numbers === true) {
      for (var i=0; i<numberCharacters.length; i++){ 
        passwordInputs.push(numberCharacters[i]) 
      }
    }

  var specialcharacters = confirm ("Do you want to include special characters in your password?")
    if (specialcharacters === true) {
      for (var i=0; i<specialCharacters2.length; i++){ 
        passwordInputs.push(specialCharacters2[i]) 
      }
    }
console.log (passwordInputs) //testing to see if the console promperly is logging the array of inputs from the previous for loops

for (var i=0; i<length; i++){  //for loop that will use the Math.random method to randomize the array based of the input length from the prompt, then set the randompassword variable to be the result.
  passwordInputs[Math.floor(Math.random() * passwordInputs.length)]
  randomPassword +=  passwordInputs[Math.floor(Math.random() * passwordInputs.length)]
  }

return randomPassword //returns the random password variable 
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