// Get the local storage data
const ls = localStorage.getItem('colorHistory');

// Parse the local storage data if it exists, else make it an empty array
let history = ls ? JSON.parse(ls) : [];

document.addEventListener('DOMContentLoaded', (e) => {
     history.forEach(item => {
         displayColorData(item.colorData);
     });
 });
 
// Form Handling
const form = document.getElementById('form')
const date = document.getElementById('date')
const clear = document.getElementById('clear')

/**
 * Event listener for the form submission.
 * Send a request to the Color of the Day API and get response.
 */
form.addEventListener('submit', async function(e) {

     // Prevent the default form submission behavior
     e.preventDefault();

     // Retrieves the user's selected date
     const selectedDate = date.value;

     // Constructs the URL for the API request
     const colorUrl = `https://colors.zoodinkers.com/api?date=${selectedDate}`;

     // Fetches the color info from the fetch API
     const response = await fetch(colorUrl);
     const colorData = await response.json();

     // Processes and display the color data
     displayColorData(colorData);

     // Adds the search to history and update the local storage
     updateHistory(selectedDate, colorData);
})

/**
 * Calculates the brightness of the fetched color.
 * The defination of brightness is based on the following formula from stackoverflow:
 * brightness = (0.299 * R) + (0.587 * G) + (0.114 * B)
 * where R,G,B are the value of the red, green, and blue color.
 * @param {string} hexColor - The hex color value
 * @param {number} The brightness value ranging from 0 (darkest) to 255 (lightest).
 */
function getBrightness(hexColor) {
     const r = parseInt(hexColor.substr(1, 2), 16);
     const g = parseInt(hexColor.substr(3, 2), 16);
     const b = parseInt(hexColor.substr(5, 2), 16);
     return (r * .299 + g * .587 + b * .114);
}

/**
 * Displays the color data on the page
 * Create a color block element with the background color set to the fetched color
 * and appends it to the DOM, along with the color's HEX value and date.
 * @param {Object} colorData - The color data object contains the date and the hex value.
 */
function displayColorData(colorData) {

     // Retrieve the container for color display
     const colorContainer = document.getElementById('colors');

     // Calculate the brightness of the background color
     const brightness = getBrightness(colorData.hex);

     // Set text color to white for dark background and black for the light background
     const textColor = brightness < 128 ? 'white' : 'black';

     // Create an element to contain the color block
     const colorBlock = document.createElement('div');
     colorBlock.style.backgroundColor = colorData.hex;
     colorBlock.style.paddingLeft = '15px';
     colorBlock.style.paddingTop = '10px';
     colorBlock.style.paddingBottom = '10px';
     colorBlock.style.margin = '10px';

     // Create the text element to display the date and the hex value
     const colorText = document.createElement('p');
     colorText.innerHTML = `${colorData.hex}<br />${colorData.date}`;

     // Set the text color based on brightness of the background color
     colorText.style.color = textColor

     colorBlock.appendChild(colorText);

     // Append the color block to the container
     colorContainer.prepend(colorBlock);
}

/**
 * Updates the search history and saves it to local storage
 * Adds the new search data to the history array and updates the local storage with the new history
 * @param {string} date - The selected date.
 * @param {Object} colorData - The color data object contains the date and the hex value.
 */
function updateHistory(date, colorData) {

     // Add the new search data to the history array
     history.unshift({ date, colorData });

     // Update the local storage with the new history
     localStorage.setItem('colorHistory',JSON.stringify(history));
}

clear.addEventListener('click', function() {

     // Clear the history array
     history = [];

     // Clear the local storage
     localStorage.clear();

     // Remove all color elements from the DOM
     const colorContainer = document.getElementById('colors');
     colorContainer.innerHTML = '';
});