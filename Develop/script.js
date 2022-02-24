function generatePassword() {
    var password = '';
  
    var randomUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var randomLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
    var randomSpec = ['!', '@', '#', '$', '^', '&', '*', '?', '_', '-'];
    // use this below in the for loop
    var randomNumber = Math.floor(Math.random() * (9 - 0 + 1) + 0);
  
    // defining and selecting length variable (8-128)
    var lengthValue = prompt('Please enter length between 8 and 128.', 10);
    if (lengthValue < 8 || lengthValue > 128 || isNaN(lengthValue) === true) {
      lengthValue = 'Invalid entry. Please try again.';
      return lengthValue; 
    }
  
    // Selecting upper variable
    var upperChar = confirm('Include Upper Case letters?');
    
    // Selecting lower variable
    var lowerChar = confirm('Include Lower Case letters?');
    
    // Selecting number variable
    var numberChar = confirm('Include Numbers?');
    
    // Selecting spec char variable
    var specChar = confirm('Include Special Characters?');
    return password;
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
  