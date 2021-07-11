// Assignment code here
var upperCase = false;
var lowerCase = false;
var nums = false;
var specials = false;

var generatePassword = function(){
  var pswd = "";
  var setPswdLength = window.prompt("How long would you like your password to be? Enter a number greater than 8");
  setPswdLength = parseInt(setPswdLength);
  if(setPswdLength >= 8){
    passwordCriteria();
    return pswd;
  }
  else{
    window.alert("Invalid entry. Try again.");
    generatePassword();
  }
}
var passwordCriteria = function(){
  var confirmUpper = window.prompt("Would you like uppercase letters in your password? enter y for yes and leave blank for no");
  if(confirmUpper === "y"){
    upperCase = true;
  }
  var confirmLower = window.prompt("Would you like lowercase letters in your password? enter y for yes and leave blank for no");
  if(confirmLower === "y"){
    lowerCase = true;
  }
  var confirmNums = window.prompt("Would you like numbers in your password? enter y for yes and leave blank for no");
  if(confirmNums === "y"){
    nums = true;
  }
  var confirmSpecials = window.prompt("Would you like numbers in your password? enter y for yes and leave blank for no");
  if(confirmSpecials === "y"){
    specials = true;
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
