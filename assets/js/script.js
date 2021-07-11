// Assignment code here
var upperCase = false;
var lowerCase = false;
var numsBool = false;
var specialsBool = false;
var randomNum= 0;

var generatePassword = function(){
  var pswd = "";
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~`!@#$%^&*()_-+={[}],.<>?";
  var noNumChars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_-+={[}],.<>?";
  var letters="abcdefghijklmnopqrstuvwxyz";
  var onlyNums= "1234567890";
  var onlySpecials= "~`!@#$%^&*()_-+={[}],.<>?";
  var lettersAndNums= "abcdefghijklmnopqrstuvwxyz1234567890";
  var lettersAndSpecials= "abcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_-+={[}],.<>?";
  var numsAndSpecials= "1234567890~`!@#$%^&*()_-+={[}],.<>?";

  var setPswdLength = window.prompt("How long would you like your password to be? Enter a number of 8 or greater");
  setPswdLength = parseInt(setPswdLength);
  if(setPswdLength >= 8 && setPswdLength<=128){
    randomNum = 0;
    passwordCriteria();
    for(var i = 0; i<setPswdLength; i++){
      if (lowerCase === true && upperCase === true && numsBool === true && specialsBool === true){
        pswd += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      if (lowerCase === true && upperCase === true && numsBool === true && specialsBool === false){
        pswd += charset.charAt(Math.floor(Math.random() * (charset.length-onlySpecials.length)));
      }
      if (lowerCase === true && upperCase === false && numsBool === true && specialsBool === true){
        pswd += charset.toLowerCase().charAt(Math.floor(Math.random() * (charset.length)));
      }
      if (lowerCase === false && upperCase === true && numsBool === true && specialsBool === true){
        pswd += charset.toUpperCase().charAt(Math.floor(Math.random() * (charset.length)));
      }
      if (lowerCase === true && upperCase === true && numsBool === false && specialsBool === true){
        pswd += noNumChars.charAt(Math.floor(Math.random() * (noNumChars.length)));
      }
      if(lowerCase === true  && upperCase == true){
        pswd += charset.charAt(Math.floor(Math.random() * (charset.length-(onlySpecials.length+onlyNums.length))));
      }
      if(lowerCase === true  && numsBool == true){
        pswd += lettersAndNums.charAt(Math.floor(Math.random() * lettersAndNums.length));
      }
      if(lowerCase === true  && specialsBool == true){
        pswd += lettersAndSpecials.charAt(Math.floor(Math.random() * lettersAndSpecials.length));
      }
      if(upperCase === true  && numsBool == true){
        pswd += lettersAndNums.toUpperCase().charAt(Math.floor(Math.random() * lettersAndNums.length));
      }
      if(upperCase === true  && specialsBool == true){
        pswd += lettersAndSpecials.toUpperCase().charAt(Math.floor(Math.random() * lettersAndSpecials.length));
      }
      if(numsBool === true  && specialsBool == true){
        pswd += numsAndSpecials.charAt(Math.floor(Math.random()* numsAndSpecials.length));
      }
      if(lowerCase === true){
        pswd += letters.charAt(Math.floor(Math.random() * 25));
      }
      else if(upperCase === true){
        pswd += letters.toUpperCase().charAt(Math.floor(Math.random() * 25));
      }
      else if(numsBool === true){
        pswd += onlyNums.charAt(Math.floor(Math.random() * 9));
      }
      else if(specialsBool === true){
        pswd += onlySpecials.charAt(Math.floor(Math.random() * 25));
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
  upperCase = false;
  lowerCase = false;
  numsBool = false;
  specialsBool = false;
  var confirmLower = window.prompt("Would you like lowercase letters in your password? enter y for yes and leave blank for no");
  if(confirmLower === "y"){
    lowerCase = true;
  }
  var confirmUpper = window.prompt("Would you like uppercase letters in your password? enter y for yes and leave blank for no");
  if(confirmUpper === "y"){
    upperCase = true;
  }
  var confirmNums = window.prompt("Would you like numbers in your password? enter y for yes and leave blank for no");
  if(confirmNums === "y"){
    numsBool = true;
  }
  var confirmSpecials = window.prompt("Would you like special characters in your password? enter y for yes and leave blank for no");
  if(confirmSpecials === "y"){
    specialsBool = true;
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
