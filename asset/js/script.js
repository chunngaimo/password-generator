// Assignment code here

// Arrays of character choices
var numberChar = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["!","#","$","%","&","(",")","*","+",",","-","/","\\","@","~"];

// Function to ask user for their password criteria
function passwordCriteria() {

  //Parsing input to make an integer
  var length = parseInt(prompt("How many characters would you like to have? Min 8 and Max 128."))
  //var number = parseInt(length)
  // Checking for the input to be a number aka is not a number (isNaN)
  if (isNaN(length)===true) {
    alert  ("Password length must be a number.");
    return;
  }

  if (length < 8 || length > 128) {
    alert ("Password length must be between 8 and 128 characters.");
    return;
  }

  var includeNum = confirm("Would you like to include numbers?");
  var includeUpper = confirm("Would you like to include Upper Case Characters?");
  var includeLower = confirm("Would you like to include Lower Case Characters?");
  var includeSpecial = confirm("Would you like to include Special Characters?");

  if (includeNum===false && includeUpper===false && includeSpecial===false && includeLower===false) {
    alert("Your password must include one character type.");
    return;
  }
 
  generatePassword(includeSpecial,includeUpper,includeLower,includeNum,length);

  var passwordChoice = {
    length: length,
    includeNum: includeNum,
    includeLower: includeLower,
    includeSpecial: includeSpecial,
    includeUpper: includeUpper,
  };

  return passwordChoice;

}

function generatePassword(includeSpecial,includeUpper,includeLower,includeNum,length) {
  var passwordChar = []

if (includeSpecial) {
  passwordChar = passwordChar.concat(specialChar)
}
if (includeUpper) {
  passwordChar = passwordChar.concat(upperCaseChar)
}
if (includeLower) {
  passwordChar = passwordChar.concat(lowerCaseChar)
}
if (includeNum) {
  passwordChar = passwordChar.concat(numberChar)
}

console.log(passwordChar)

var randomPassword = ""

console.log(length);

for (var i = 0; i < length; i++) {
  randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
}
document.getElementById('password').innerHTML = randomPassword;
return randomPassword;
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
generateBtn.addEventListener("click", passwordCriteria);



