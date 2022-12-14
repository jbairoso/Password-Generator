// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Assignment code here
var LowerCase =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var passwordLength = " ";
var characterTypes = " ";


function generatePassword(){
  //asks user series of questions to create their unique password
  var passwordLength = (prompt("Please select how many characters you would like in your password. From 8 to 128 characters."));
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("That is not a number between 8 - 128. Please try again.")
    //length of password
} else if (passwordLength >= 8 && passwordLength <= 128){
  var confirmLowerCase = confirm("Would you like lower case letters in your password?");
  var confirmUpperCase = confirm("Would you like upper case letters in your password?");
  var confirmNumbers = confirm("Would you like numbers in your password?");
  var confirmSpecial = confirm("Would you like special characters in you password?")

}if (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmSpecialCharacters === false) {
  alert("You must pick at least one character type.");
  //combination of multi strings
}if (confirmLowerCase === true) {
  characterTypes = characterTypes.concat(LowerCase);
}if (confirmUpperCase === true) {
  characterTypes = characterTypes.concat(UpperCase);
}if (confirmNumbers === true) {
  characterTypes = characterTypes.concat(numbers);
}if (confirmSpecial === true) {
  characterTypes = characterTypes.concat(special);
} 
//creating users password with the amount of characters selected
var passwordText = " "
for (var i = 0; i < passwordLength; i++) {
 passwordText = passwordText + characterTypes[Math.floor(Math.random() * characterTypes.length)];
} return passwordText; 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
