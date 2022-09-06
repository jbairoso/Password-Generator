// Assignment code here
var lowercase =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var passwordLength = " ";
var characterTypes = " ";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordLength = (prompt("Please select how many characters you would like in your password. From 8 to 128 characters."));
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("That is not a number between 8 - 128. Please try again.")
} else if (passwordLength >= 8 && passwordLength <= 128){
  var confirmLowerCase = confirm("Would you like lower case letters in your password?");
  var confirmUpperCase = confirm("Would you like upper case letters in your password?");
  var confirmNumbers = confirm("Would you like numbers in your password?");
  var confirmSpecial = confirm("Would you like special characters in you password?")

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
