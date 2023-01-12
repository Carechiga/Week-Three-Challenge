     // Write password to the #password input
function writePassword() {
    var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var passwordNumerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "~"];

    var characterSet = [];
    var pwBuild = "";

// user chooses the amount of characters they want in the password
        var passwordLength = prompt("How many character do you wish you password to be? (Choose 8-128)");
   
    //If the user chooses "Y" it puts 1 upper case letter in the password and let uppercase letters be called on randomly for other characters.
    var uppercaseConfirm = prompt("Do you need uppercase characters in your password? (Choose 'Y' or 'N')").toUpperCase();
    if(uppercaseConfirm === "Y"){
        characterSet = uppercaseLetters;
        pwBuild = pwBuild + uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    }

    
    //If the user chooses "Y" it puts 1 lowercae letter in the password and let lowercase letters be called on randomly for other characters.
    var lowercaseConfirm = prompt("Do you need lowercase characters in your password? (Choose 'Y' or 'N')").toUpperCase();
    if(lowercaseConfirm === "Y"){
        characterSet = characterSet.concat(lowercaseLetters);
        pwBuild = pwBuild + lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    }

    //If the user chooses "Y" it puts 1 numeral in the password and let numerals be called on randomly for other characters.
    var numericsConfirm = prompt("Do you need numerals in your password? (Choose 'Y' or 'N')").toUpperCase();
    if(numericsConfirm === "Y"){
        characterSet = characterSet.concat(passwordNumerals);
        pwBuild = pwBuild + passwordNumerals[Math.floor(Math.random() * passwordNumerals.length)];
    }

    //If the user chooses "Y" it puts 1 special character in the password and let special characters be called on randomly for other characters.
    var specialConfirm = prompt("Do you need special characters in your password? (Choose 'Y' or 'N')").toUpperCase();
    if(specialConfirm === "Y"){
        characterSet = characterSet.concat(specialCharacters);
        pwBuild = pwBuild + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
    console.log(characterSet);
    console.log(characterSet.length);
    
    if(passwordLength < 128 && passwordLength > 8){
        var validLength = true;
    }    else{
        var validLength = false;
    }

    if(uppercaseConfirm === "Y"){
        var uppercaseShow = "✅";
    }else{
        var uppercaseShow = "❌";
    }

    if(lowercaseConfirm === "Y"){
        var lowercaseShow = "✅";
    }else{
        var lowercaseShow = "❌";
    }
    
    if(numericsConfirm === "Y"){
        var numericsShow = "✅";
    }else{
        var numericsShow = "❌";
    } 
    
    if(specialConfirm === "Y"){
        var specialShow = "✅";
    }else{
        var specialShow = "❌";
    }
    //This generates a confirmation alert and if criteria was invalid prompts user to generate a new password
    if ( uppercaseConfirm !== "Y" && lowercaseConfirm !== "Y" && numericsConfirm !== "Y" && specialConfirm !== "Y"){
        alert("No valid criteria were selected, please generate a new password.");
        return;
    }else if(validLength == false){
        alert("Password length invalid, please generate a new password.");
        return;
    }else{
    alert("These are the chosen criteria for your password: \nPassword Length: " + passwordLength + "\nUppercase Characters: " + uppercaseShow + "\nLowercase Characters: " + lowercaseShow + "\nNumerical Characters: " + numericsShow + "\nSpecial Characters: " + specialShow);
    };
    
    function generatePassword(){
        //password generation has cannot start at 0 or it will be too long
     for(let i = pwBuild.length; i < passwordLength; i++){
       pwBuild = pwBuild + characterSet[Math.floor(Math.random() * characterSet.length)];
       console.log(pwBuild);
    }
    return pwBuild;
     }
     
    var password = generatePassword();

    var passwordText = document.querySelector("#password");
   
    passwordText.value = password;
  
  }

  // Add event listener to generate button
  document.getElementById("generate").addEventListener("click", writePassword);

