// Assignment code here
var upperCase = false;
var lowerCase = false;
var numsBool = false;
var specialsBool = false;
var randomNum= 0;

var generatePassword = function(){
  var pswd = "";
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~`!@#$%^&*()_-+={[}],.<>?";
  var setPswdLength = window.prompt("How long would you like your password to be? Enter a number of 8 or greater");
  setPswdLength = parseInt(setPswdLength);
  if(setPswdLength >= 8){
    randomNum = 0;
    passwordCriteria();
    for(var i = 0; i<setPswdLength; i++){
      if(randomNum === 1){
        pswd += charset.charAt(Math.floor(Math.random() * 25));
      }
      else if(randomNum === 2){
        pswd += charset.charAt(Math.floor(Math.random() * 51));
      }
      else if(randomNum === 3){
        pswd += charset.charAt(Math.floor(Math.random() * 61));
      }
      else if(randomNum === 4){
        pswd += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      else{
        break;
      }
    }
    console.log(pswd);
    return pswd;
  }
  else{
    window.alert("Invalid entry. Try again.");
    generatePassword();
  }
}
var passwordCriteria = function(){
  var confirmLower = window.prompt("Would you like lowercase letters in your password? enter y for yes and leave blank for no");
  if(confirmLower === "y"){
    lowerCase = true;
    randomNum ++;
  }
  var confirmUpper = window.prompt("Would you like uppercase letters in your password? enter y for yes and leave blank for no");
  if(confirmUpper === "y"){
    upperCase = true;
    randomNum ++;
  }
  var confirmNums = window.prompt("Would you like numbers in your password? enter y for yes and leave blank for no");
  if(confirmNums === "y"){
    numsBool = true;
    randomNum ++;
  }
  var confirmSpecials = window.prompt("Would you like numbers in your password? enter y for yes and leave blank for no");
  if(confirmSpecials === "y"){
    specialsBool = true;
    randomNum ++;
  }
  console.log(randomNum);
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
