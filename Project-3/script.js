/**
 * Sets the maximum date allowed in the date input to today's date.
 * This prevents the user from selecting a future date.
 */
document.addEventListener('DOMContentLoaded', () => {
     // Get the date input element
     const dateInput = document.getElementById('date');
     // Get today's date in YYYY-MM-DD format
     const today = new Date().toISOString().split('T')[0];
     // Set the max attribute to today's date
     dateInput.setAttribute('max', today);
     displayFavorites()
});

/**
 * Handles the form submission event.
 * Fetches the APOD data from NASA API for the selected date.
 * @param {Event} event - The event object.
 */
document.getElementById('form').addEventListener('submit', async (event) => {
     event.preventDefault();
     const date = document.getElementById('date').value;
     const url = `https://api.nasa.gov/planetary/apod?api_key=aYzK28u2UY3mRzRlgZEKBvPnJrq5MTBjHoePT0eg&date=${date}`;

     // Fetch APOD data from NASA API
     const response = await fetch(url);
     const data = await response.json();
     displayApod(data);
});

// Declare a global variable to store current APOD data
let currentApodData = null;

/**
 * Displays the APOD data on the page.
 * This function dynamically creates HTML content to show the APOD image,
 * title, date, explanation, and a button to save the image to favorites.
 * @param {Object} data - The APOD data object from NASA API.
 * @param {string} data.url - The URL of the APOD image.
 * @param {string} data.hdurl - The URL of the HD version of the image.
 * @param {string} data.title - The title of the APOD.
 * @param {string} data.date - The date of the APOD.
 * @param {string} data.explanation - The explanation of the APOD.
 */
function displayApod(data) {
     currentApodData = data;
     
     const apodElement = document.getElementById('apod-pictures');
     // Set the innerHTML of the apodElement with the APOD data
     apodElement.innerHTML = `
     <div class="apod-image-container">
          <img src="${data.url}" alt="${data.title}" class="apod-image" onclick="displayHdVersion('${data.hdurl}')">
     </div>
     <div class="apod-info">
          <h2>${data.title}</h2>
          <p class="mt-2 date-num">${data.date}</p>
          <p class="mt-2">${data.explanation}</p>
          <button onclick='saveToFavorites()' class="btn btn-primary mt-2">Save to Favorites</button>
     </div>`;
}

/**
 * Displays the high-definition version of the APOD image in a modal.
 * @param {string} hdurl - The URL of the high-definition image.
 */
function displayHdVersion(hdurl) {
     const modal = document.getElementById('modal');
     const modalImg = document.getElementById('modal-content');
     modal.style.display = 'block';
     modalImg.src = hdurl;
}

/**
 * Hides the modal when clicked.
 */
function closeModal() {
     const modal = document.getElementById('modal');
     modal.style.display = 'none';
}

/**
 * Saves the selected APOD data to the local storage as a favorite.
 * New favorites are added at the top of the existing favorites.
 */
function saveToFavorites() {
     const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
     let newFavorites = { [currentApodData.date]: currentApodData };
 
     // Add existing favorites to the new object, preserving their order
     for (let date in favorites) {
         if (favorites.hasOwnProperty(date) && date !== currentApodData.date) {
             newFavorites[date] = favorites[date];
         }
     }
 
     // Update the favorites in local storage
     localStorage.setItem('favorites', JSON.stringify(newFavorites));
 
     // Update the display of favorites on the page
     displayFavorites();
}

function displayFavorites() {
     const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
     const favoritesElement = document.getElementById('favorite');
     favoritesElement.innerHTML = Object.keys(favorites)
         .map(date => `
         <div class="favorite-item">
               <img src="${favorites[date].url}" alt="${favorites[date].title}">
               <div class="favorite-info">
                    <h6>${favorites[date].title}</h6>
                    <p class="date-num">${date}</p>
                    <button onclick="removeFromFavorites('${date}')" class="btn btn-danger">Delete</button>
               </div>
          </div>`).join('');
}

/**
 * Removes a selected APOD from the favorites in the local storage.
 * @param {string} date - The date of the APOD to be removed from favorites.
 */
function removeFromFavorites(date) {
     let favorites = JSON.parse(localStorage.getItem('favorites')) || {};
     delete favorites[date];
     localStorage.setItem('favorites', JSON.stringify(favorites));
     displayFavorites();
}
 