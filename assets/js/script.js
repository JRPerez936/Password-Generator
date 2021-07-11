// Assignment code here
var upperCase = false;
var lowerCase = false;
var numsBool = false;
var specialsBool = false;

var generatePassword = function(){
  var pswd = "";
  var setPswdLength = window.prompt("How long would you like your password to be? Enter a number greater than 8");
  setPswdLength = parseInt(setPswdLength);
  if(setPswdLength >= 8){
    passwordCriteria();
    passwordCreate(pswd);
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
    numsBool = true;
  }
  var confirmSpecials = window.prompt("Would you like numbers in your password? enter y for yes and leave blank for no");
  if(confirmSpecials === "y"){
    specialsBool = true;
  }
}
var passwordCreate = function(input){
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var nums = "1234567890";
  var specials = "~`!@#$%^&*()_-+={[}],.<>?";
  var passwordString="";
  for(var i = 0; i<input.length; i++){
    
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
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
