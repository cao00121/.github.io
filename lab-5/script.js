// Show all the commands first
console.log('Use the following functions to showcase:');
console.log('addBook() -- Used to add a new book to the catalogue.');
console.log('showBooks() -- Used to display a list of book titles and their indexes in the catalogue.');
console.log('showBook() -- Used to display the details of a book, including the book\'s title, author, and genre.');
console.log('Sample Input -- Book 1: addBook(\'One Hundred Years of Solitude\', \'Gabriel García Márquez\', \'Magical Realism\')\n Book 2: addBook(\'The Call of the Wild\', \'Jack London\', \'Adventure\')')

// Create an empty book catalogue
let bookCatalogue = [];

/** This function will add a new book to the catalogue.
 * 
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {string} genre - The genre of the book.
 * @returns - "Book added" - returns a string to confirm the book has been added.
 */
function addBook (title, author, genre) {
    let newBook = {
        title: title,
        author: author,
        genre: genre
    };
    bookCatalogue.push(newBook);
    return 'Book added';
}

/** This function will display a list of book titles and their indexes in the catalogue.
 * 
 * @returns - "No books yet." - returns a string to confirm there are no books in the catalogue.
 */
function showBooks() {
    if (bookCatalogue.length === 0){
        return 'No books yet.'
    }
    let i = 0;
    while (i < bookCatalogue.length) {
        console.log(i + ': ' + bookCatalogue[i].title);
        i++;
    }
}


/** This function will display the details of a book, including the book's title, author, and genre.
 * 
 * @param {number} index - The index of the book in the catalogue.
 * @returns - "No books yet." - returns a string to confirm there are no books in the catalogue.
 */
function showBook (index) {
    if (bookCatalogue.length === 0) {
        return 'No books yet.'
    }
    if (bookCatalogue[index]) {
        console.log('Title: ' + bookCatalogue[index].title);
        console.log('Author: ' + bookCatalogue[index].author);
        console.log('Genre: ' + bookCatalogue[index].genre);
    } else {
        console.log('Can\'t find the book.')
    }
}