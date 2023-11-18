/**
 * Create an HTML element for a movie's title and year.
 * @param {string} title - The title of the movie.
 * @param {number} year - The year the movie was released.
 * @returns {HTMLElement} The DOM element that representing the movie title as an h3 element.
 */
function createMovieTitle (title, year) {
     const movieTitle = document.createElement('h3');
     movieTitle.textContent = `${title} (${year})`;
     movieTitle.classList.add('movie-title');
     return movieTitle;
}

/**
 * Create an HTML element for a movie's description.
 * @param {string} description - The movies' brief description.
 * @returns {HTMLElement} The DOM element that representing the movie's description.
 * The 'hidden' class is the CSS attribute used to control the visibility of the description.
 */
function createMovieDescription (description) {
     const movieDescription = document.createElement('div');
     movieDescription.textContent = description;
     movieDescription.classList.add('movie-description', 'hidden');
     return movieDescription;
}

/**
 * Create a DOM element for a movie with its title, year, and description.
 * @param {Object} movie - An object that representing a movie.
 * @param {string} movie.title - The title of the movie.
 * @param {number} movie.year - The year the movie was released.
 * @param {description} movie.description - The movies' brief description.
 * @returns {HTMLElement} The DOM element that representing the movie.
 */
function createMovie (movie) {
     const movieElement = document.createElement('div');
     movieElement.classList.add('movie');
     const titleElement = createMovieTitle(movie.title, movie.year);
     const descriptionElement = createMovieDescription(movie.description);
     movieElement.appendChild(titleElement);
     movieElement.appendChild(descriptionElement);
     return movieElement;
}

const moviesContainer = document.getElementById('movies');

/**
 * Render and display each movie in the given array of movie objects.
 * Render DOM elements for each movie in the given array of movie objects.
 * @param {Object[]} moviesArr - An array of movie objects.
 */
function renderMovies (moviesArr) {
     moviesContainer.innerHTML = '';
     for (const movie of moviesArr) {
          const movieElement = createMovie(movie);
          moviesContainer.appendChild(movieElement);
     }
}

// Add event listener
moviesContainer.addEventListener('click', function(e) {
     // Check if event target is title
     if (e.target.matches('.movie-title')){
          const description = e.target.nextElementSibling;
          description.classList.toggle('hidden');
     }
});

const form = document.getElementById('form')
const search = document.getElementById('search')

form.addEventListener('submit', function(e) {
     e.preventDefault()
});

search.addEventListener('input', function(e) {
     // Filter the movies based on the value of search
     const query = e.target.value.toLowerCase();
     const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
     renderMovies(filteredMovies)
});

// Initial rendering of movies
renderMovies(movies)