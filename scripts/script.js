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

// Function to create the password
function generatePassword() {
    // Do while loop to keep looping if the user does not enter 'y' for at least one option
    do {
        // Initialize variables through each loop to essentially start from the beginning
        var lc = '',
            uc = '',
            num = '',
            sc = '',
            passLength = 0,
            passArray = [],
            password = '';
        // While loop to continue asking the user if they want lower case letters in their password if the user does not enter a valid choice of 'y' or 'n'.
        while (lc !== 'y' && lc !== 'n') {
            lc = prompt('Would you like lowercase letters in your password?  (y/n)', 'y/n');
            if (lc != null) {
                lc = lc.toLowerCase();
            }
            // If the user presses cancel, print a cancel message and return to writePassword()
            if (lc == null) {
                return "Password generation cancelled.";
            } else if (lc == 'y') { //If the uses enters 'y', add the array of lowerLetters to the passArray
                passArray = passArray.concat(lowerLetters);
            }
        }
        // While loop to continue asking the user if they want upper case letters in their password if the user does not enter a valid choice of 'y' or 'n'.
        while (uc !== 'y' && uc !== 'n') {
            uc = prompt('Would you like uppercase letters in your password? (y/n)', 'y/n');
            if (uc != null) {
                uc = uc.toLowerCase();
            }
            // If the user presses cancel, print a cancel message and return to writePassword()
            if (uc == null) {
                return "Password generation cancelled.";
            } else if (uc == 'y') { //If the uses enters 'y', add the array of upperLetters to the passArray
                passArray = passArray.concat(upperLetters);
            }
        }
        // While loop to continue asking the user if they want numbers in their password if the user does not enter a valid choice of 'y' or 'n'.
        while (num !== 'y' && num !== 'n') {
            num = prompt('Would you like numbers 0-9 in your password? (y/n)', 'y/n');
            if (num != null) {
                num = num.toLowerCase();
            }
            // If the user presses cancel, print a cancel message and return to writePassword()
            if (num == null) {
                return "Password generation cancelled.";
            } else if (num == 'y') { //If the uses enters 'y', add the array of numbers to the passArray
                passArray = passArray.concat(numbers);
            }
        }
        // While loop to continue asking the user if they want special characters in their password if the user does not enter a valid choice of 'y' or 'n'.
        while (sc !== 'y' && sc !== 'n') {
            sc = prompt('Would you like special characters in your password? (y/n)', 'y/n');
            if (sc != null) {
                sc = sc.toLowerCase();
            }
            // If the user presses cancel, print a cancel message and return to writePassword()
            if (sc == null) {
                return "Password generation cancelled.";
            } else if (sc == 'y') { //If the uses enters 'y', add the array of specialCharacters to the passArray
                passArray = passArray.concat(specialCharacters);
            }
        }
        while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
            passLength = prompt('How long would you like your password to be? (8-128)');
            // If the user presses cancel, print a cancel message and return to writePassword()
            if (passLength == null) {
                return "Password generation cancelled.";
            }
        }
        // Error checking to show an alert and let the user know they need to answer 'y' to at least one option.
        if (lc == 'n' && uc == 'n' && num == 'n' && sc == 'n') {
            alert("You must enter 'y' for at least one option.");
        }
    } while (lc == 'n' && uc == 'n' && num == 'n' && sc == 'n'); // condition to the do while loop so that the user must enter 'y' for at least one option

    // For loop to choose a random character from the passArray for the number of iterations that match the passLength the user entered.
    for (var i = 0; i <= passLength; i++) {
        password += passArray[(Math.floor(Math.random() * passArray.length))];
    }
    //return the password string to the calling function writePassword()
    return password;
}
