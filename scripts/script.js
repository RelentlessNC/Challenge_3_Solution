// Assignment code here

const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '\\', '^', '_', '`', '{', '}', '|', '~'];


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

function generatePassword() {
    var lc = '',
        uc = '',
        num = '',
        sc = '',
        passLength = 0,
        passArray = [],
        password = '';

    while (lc !== 'y' && lc !== 'n') {
        lc = prompt('Would you like lowercase letters in your password?  (y/n)', 'y/n');
        if (lc == null) {
            return;
        } else if (lc == 'y') {
            passArray = passArray.concat(lowerLetters);
        }
    }
    while (uc !== 'y' && uc !== 'n') {
        uc = prompt('Would you like uppercase letters in your password? (y/n)', 'y/n');
        if (uc == null) {
            return;
        } else if (uc == 'y') {
            passArray = passArray.concat(upperLetters);
        }
    }
    while (num !== 'y' && num !== 'n') {
        num = prompt('Would you like numbers 0-9 in your password? (y/n)', 'y/n');
        if (num == null) {
            return;
        } else if (num == 'y') {
            passArray = passArray.concat(numbers);
        }
    }
    while (sc !== 'y' && sc !== 'n') {
        sc = prompt('Would you like special characters in your password? (y/n)', 'y/n');
        if (sc == null) {
            return;
        } else if (sc == 'y') {
            passArray = passArray.concat(specialCharacters);
        }
    }
    while (passLength < 8 || passLength > 128 && passLength == NaN) {
        passLength = prompt('How long would you like your password to be? (8-128)');
        if (passLength == null) {
            return;
        }
    }
    for (var i = 0; i <= passLength; i++) {
        password += passArray[(Math.floor(Math.random() * passArray.length))];
    }
    return password;
}
