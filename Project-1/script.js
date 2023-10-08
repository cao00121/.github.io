// Show all the commands first.
console.log('Use the following functions to showcase:');
console.log('generateCode() -- Used to randomly generates a string of characters of a specified length.');
console.log('addPassword() -- Used to generate the username and password related to an application');
console.log('showPasswordsList() -- Used to provide an overview of the user\'s stored passwords, so they can know which apps\' passwords have been saved.');
console.log('showPassword()-- Used to display a specified password the user selected.')
console.log("Sample Input -- addPassword('Toby1234','GeneratedCode','Facebook')\n                addPassword('Toby5678','GeneratedCode','WhatsApp')")

// Create the generateCode function's default value list.
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


// Create the addPassword function to generate the username and password related to an application.
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

// Create the showPasswordList function to display all related applications with username and password.
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

// Create the showPassword function to display the selected application's username and password.
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
