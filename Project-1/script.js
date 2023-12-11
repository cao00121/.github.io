// Show all the commands first.
console.log('Use the following functions to showcase:');
console.log('generateCode() -- Used to randomly generates a string of characters of a specified length.');
console.log('addPassword() -- Used to generate the username and password related to an application');
console.log('showPasswordsList() -- Used to provide an overview of the user\'s stored passwords, so they can know which apps\' passwords have been saved.');
console.log('showPassword()-- Used to display a specified password the user selected.')
console.log("Sample Input -- addPassword('Toby1234','GeneratedCode','Facebook')\n                addPassword('Toby5678','GeneratedCode','WhatsApp')")

/** This function is used to randomly generates a string of characters of a specified length.
 *  It takes two parameters: the length of the generated code, and whether the code should contains numbers or not.
 *  And the default boolean value of the seconde parameter is false.
 *  It will return a string of characters of a specified length.
 * @param {Number} length - The length of the generated code.
 * @param {Boolean} includeNumbers - Whether the code should contains numbers or not.
 * @returns - A string of characters of a specified length.
 */
function generateCode(length = 6, includeNumbers = false) {
    // Declare an empty string to store the generated characters.
    let password = '';
    // Loop through to generate a string of the specified length.
    for (let i = 0; i < length; i++) {
      // Declare a variable to save ASCII characters
      let asciiCode;
      // Check if numbers should be included in the code.
      if (includeNumbers) {
        // Calculate the ASCII from 48(0) to 83(S).
        asciiCode = Math.floor(Math.random() * 36) + 48;
        // If asciiCode is 58 or above, add 7 to skip special ASCII symbols and get the uppercase alphabets.
        if (asciiCode >= 58) {
          asciiCode += 7;
        }
      } else {
        // Calculate the ASCII from 65(A) to 90(Z).
        asciiCode = Math.floor(Math.random() * 26) + 65;
      }
      // Append the character corresponding to the ASCII code to the final string.
      password += String.fromCodePoint(asciiCode);
    }
    return password;
  }

// Declare an empty array to store the objects.
const passwordCatalogue = [];


/** This function will take three parameters: username(string), password(string), relatedApp(string).
 *  It will add the username, password and related application to the passwordCatalogue array.
 *  It will return a string to confirm the username, password and related application has been saved.
 * @param {String} username - The username of the application.
 * @param {String} password - The password of the application.
 * @param {String} relatedApp - The application related to the username and password.
 * @returns - A string to confirm the username, password and related application has been saved.
 */
function addPassword (username, password, relatedApp) {
    // Declare a new array to save username, password and related application.
    const newPassword = {
        username: username,
        password: password,
        relatedApp: relatedApp
    };
    passwordCatalogue.push(newPassword);
    return `Your ${relatedApp}'s username and password has been saved.`
}

/** This function will display the related application's username and password.
 *  It will take one parameter: index(number).
 *  There is a if-else statement to check if the passwordCatalogue array is empty or not.
 *  If the passwordCatalogue array is empty, it will return a string to inform the user the passwordCatalogue array is empty.
 *  If the passwordCatalogue array is not empty, it will check if the index is valid or not.
 *  If the index is valid, it will display the related application's username and password.
 *  If the index is not valid, it will return a string to inform the user the index is invalid.
 * @param {Number} index - The index of the passwordCatalogue array. And the default value is 0.
 * @returns - A string to inform the user the passwordCatalogue array is empty or the index is invalid.
 */
function showPasswordsList () {
    if(passwordCatalogue.length === 0) {
        console.log('Empty list. No related apps\'s password saved.')
        return;
    }
    console.log('Password Catalogue:');
    for (let i = 0; i < passwordCatalogue.length;  i ++) {
    console.log(i + ': ' + passwordCatalogue[i].relatedApp);
    }
}

/** This function will display the related application's username and password.
 *  It will take one parameter: index(number).
 *  There is a if-else statement to check if the passwordCatalogue array is empty or not.
 *  If the passwordCatalogue array is empty, it will return a string to inform the user the passwordCatalogue array is empty.
 *  If the passwordCatalogue array is not empty, it will check if the index is valid or not.
 *  If the index is valid, it will display the related application's username and password.
 *  If the index is not valid, it will return a string to inform the user the index is invalid.
 * @param {Number} index - The index of the passwordCatalogue array. And the default value is 0.
 * @returns - A string to inform the user the passwordCatalogue array is empty or the index is invalid.
 */
function showPassword (index) {
    if (passwordCatalogue.length === 0) {
        console.log('Empty list. No related app\'s password saved.');
        return;
    }
    if (passwordCatalogue[index]) {
        console.log(`Application Name: ${passwordCatalogue[index].relatedApp}`);
        console.log(`Username: ${passwordCatalogue[index].username}`);
        console.log(`Password: ${passwordCatalogue[index].password}`);
    } else {
        console.log('Invaild index.');
    }
}
